<template>
  <div class="box bg-gray-50 min-h-screen p-4 sm:p-8 font-sans">
    <div class="one">
      <div class="input">
        <input type="text" v-model="searchTerm" placeholder="搜索课程或地点...">
        <button @click="search">查询</button>
      </div>
      <div class="add">
        <button @click="open()">添加</button>
      </div>
    </div>

    <!-- 添加课程弹窗 -->
    <div class="popup" v-show="isshow">
      <div class="form">
        <button class="shut" @click="shut()">X</button>
        <p>添加课程</p>
        <form @submit.prevent="submitForm">
          <table>
            <tr>
              <td>上课时间：</td>
              <td><input type="date" v-model="newClass.date" required></td>
            </tr>
            <tr>
              <td>所属课程：</td>
              <td><input type="text" v-model="newClass.course" required></td>
            </tr>
            <tr>
              <td>上课地点：</td>
              <td><input type="text" v-model="newClass.location" required></td>
            </tr>
            <tr>
              <td>网址：</td>
              <td><input type="url" placeholder="https://example.com" v-model="newClass.url"></td>
            </tr>
          </table>
          <div class="button">
            <button type="submit">提交</button>
            <button type="button" @click="resetForm()">重置</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

// ⚠️ 安全警告：客户端存储token不安全
// 在生产环境中应该使用后端服务
// https://gist.githubusercontent.com/xkai003/dffaa48ea67e287c8b49cb918cfa9a4b/raw/76f3e80853e14638d9983c5845188a8b857b9a16/MyClassroomManagementSystem.json
const GITHUB_PAT = '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' // 请替换为你的token
const GIST_ID = 'dffaa48ea67e287c8b49cb918cfa9a4b'
const GIST_FILENAME = 'MyClassroomManagementSystem.json'
const API_URL = `https://api.github.com/gists/${GIST_ID}`
const headers = {
  Authorization: `token ${GITHUB_PAT}`,
  Accept: 'application/vnd.github.v3+json'
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
      if (!GITHUB_PAT) {
        alert('错误：未配置 GitHub Token，无法执行写操作。')
        return false
      }
      this.isLoading = true
      try {
        // 创建一个当前完整内容的深拷贝，以防意外修改
        const updatedGistContent = JSON.parse(JSON.stringify(this.gistContent))

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

    // 提交表单的方法 (逻辑保持不变，但现在它调用的 updateGist 是正确的)
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
    // 验证必填字段
    // if (!this.newClass.date || !this.newClass.course || !this.newClass.location) {
    //   alert('请填写所有必填字段')
    //   return
    // }
    // const newEntry = {
    //   ...this.newClass,
    //   id: Date.now() // 使用时间戳作为简单ID
    // }

    // const updatedClasses = [...this.classes, newEntry]
    // const success = await this.updateGist(updatedClasses)

    // if (success) {
    //   this.classes = updatedClasses
    //   this.shut() // 关闭弹窗并重置表单
    //   alert('课程添加成功！')
    // }
    // },

    // 删除课程
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
</script>

<style scoped>
.box{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  padding: 10px;
  margin-left: 250px;
  margin-top: 60px;
  margin-bottom: 30px;
  background-color: #fff;
}
.box .title{
    border-left: 5px solid blue;
    padding-left: 10px;
    margin-left: 10px;
}
.box .one{
  width: 83%;
  margin-left: 10px;
  display: flex;
  justify-content: space-between;
  /* background-color: #fff; */
}
.box .input{
  /* width: 100%; */
  height: 30px;
  border: 1px solid black;
}
.box .input input{
  height: 28px;
  border: none;
}
.box .input button{
  width: 60px;
  height: 95%;
  border: none;
}
.box .input button:hover{
  cursor: pointer;
  background-color: #e0c9c9;
}
.box .add button{
  width: 60px;
  height: 100%;
  border: none;
}
.box .add button:hover{
  cursor: pointer;
  background-color: #e0c9c9;
}
/* 弹窗popup */
.box .popup{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
}
.box .popup .form{
  width: 300px;
  padding: 30px;
  background-color: #fff;
}
.box .popup .form .shut{
  float: right;
}
.box .popup .form p{
  text-align: center;
}
.box .popup .form .button{
  margin-top: 10px;
  text-align: center;
}
</style>
