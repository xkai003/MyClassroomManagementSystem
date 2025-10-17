import axios from 'axios'

// 使用环境变量
const GITHUB_PAT = import.meta.env.VITE_GITHUB_TOKEN // api令牌
const GIST_ID = import.meta.env.VITE_GIST_ID // 我的Gist ID
const GIST_FILENAME = import.meta.env.VITE_GIST_FILENAME || 'MyClassroomManagementSystem.json' // Gist 中 JSON 文件的名字

const API_URL = `https://api.github.com/gists/${GIST_ID}`

// 创建 headers 的函数，避免在 PAT 未定义时报错
const getHeaders = () => {
  if (!GITHUB_PAT) {
    console.error('GitHub Token 未配置')
    return null
  }
  return {
    Authorization: `token ${GITHUB_PAT}`,
    Accept: 'application/vnd.github.v3+json'
  }
}

export default {
  data () {
    return {
      isshow: false,
      classes: [],
      searchTerm: '',
      isLoading: false,
      newClass: {
        date: '',
        course: '',
        location: '',
        url: ''
      }
    }
  },
  computed: {
    filteredClasses () {
      if (!this.searchTerm) {
        return this.classes
      }
      const lowerCaseSearch = this.searchTerm.toLowerCase()
      return this.classes.filter(item =>
        item.course.toLowerCase().includes(lowerCaseSearch) ||
        item.location.toLowerCase().includes(lowerCaseSearch)
      )
    }
  },
  methods: {
    // 打开弹窗
    open () {
      this.isshow = true
    },
    // 关闭弹窗
    shut () {
      this.isshow = false
      this.resetForm()
    },
    // 搜索
    search () {
      // 搜索逻辑已经在computed属性中处理
      console.log('搜索:', this.searchTerm)
    },
    // 重置表单
    resetForm () {
      this.newClass = {
        date: '',
        course: '',
        location: '',
        url: ''
      }
    },

    // ✨ 2. [已重构] 获取数据的方法
    async fetchClasses () {
      this.isLoading = true
      try {
        const headers = getHeaders()
        if (!headers) {
          alert('错误：GitHub Token 未配置，无法获取数据。')
          return
        }

        const response = await axios.get(API_URL, { headers })
        const fileContent = response.data.files?.[GIST_FILENAME]?.content

        if (fileContent) {
          // 将从服务器获取的完整JSON字符串解析成对象，并存储起来
          this.gistContent = JSON.parse(fileContent)
          // 从完整对象中，只取出 myclassroom 数组用于在页面上显示
          this.classes = this.gistContent.myclassroom || []
        } else {
          // 如果文件不存在或内容为空，初始化为空状态
          this.gistContent = {}
          this.classes = []
          console.warn(`在 Gist 中未找到或内容为空: ${GIST_FILENAME}`)
        }
      } catch (error) {
        console.error('获取课程数据失败:', error)
        alert('错误：无法从GitHub Gist加载数据。')
      } finally {
        this.isLoading = false
      }
    },

    // ✨ 3. [已重构] 更新数据的通用方法
    async updateGist (updatedClasses) {
      const headers = getHeaders()
      if (!headers) {
        alert('错误：GitHub Token 未配置，无法执行写操作。')
        return false
      }

      this.isLoading = true
      try {
        // 创建一个当前完整内容的深拷贝，以防意外修改
        const updatedGistContent = JSON.parse(JSON.stringify(this.gistContent || {}))

        // **核心**：只更新完整内容中的 myclassroom 部分
        updatedGistContent.myclassroom = updatedClasses

        const payload = {
          files: {
            [GIST_FILENAME]: {
              // 将修改后的【完整】对象转换回JSON字符串，发送给服务器
              content: JSON.stringify(updatedGistContent, null, 2)
            }
          }
        }
        await axios.patch(API_URL, payload, { headers })
        console.log('Gist 数据更新成功！')
        return true
      } catch (error) {
        console.error('更新 Gist 失败:', error)
        alert('数据更新失败，请重试。')
        return false
      } finally {
        this.isLoading = false
      }
    },

    // （ClassroomOne.vue）添加课堂
    async submitForm () {
      if (!this.newClass.date || !this.newClass.course || !this.newClass.location) {
        alert('请填写所有必填字段：上课时间、所属课程、上课地点')
        return
      }
      const newEntry = { ...this.newClass, id: Date.now() }
      const updatedClasses = [...this.classes, newEntry]
      const success = await this.updateGist(updatedClasses)

      if (success) {
        this.classes = updatedClasses
        this.shut()
        alert('课程添加成功！')
      }
    },
    // （ClassroomTwo.vue）删除课程
    async deleteClass (id) {
      if (!confirm('确定要删除这个课程吗？')) {
        return
      }

      const updatedClasses = this.classes.filter(c => c.id !== id)
      const success = await this.updateGist(updatedClasses)

      if (success) {
        this.classes = updatedClasses
        alert('课程删除成功！')
      }
    }
  },
  // 组件创建时加载数据
  async mounted () {
    await this.fetchClasses()
  }
}
