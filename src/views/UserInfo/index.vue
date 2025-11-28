<template>
  <div class="box1">
    <UserInfoOne @search="handleSearch"></UserInfoOne>

    <UserInfoTwo
      :mysql="filteredList"
      v-if="this.filteredList.length !== 0"
      @delete-user="handleDelete"
      @edit-user="handleEdit"
    ></UserInfoTwo>

    <NoData v-else-if="this.list.length == 0 || this.filteredList.length == 0"></NoData>

    <div class="popup" v-show="isEditing">
        <div class="form">
          <h3>编辑用户: {{ currentUser.username }}</h3>
          <p>新用户名: <input type="text" v-model="editForm.username"></p>
          <p>新密码: <input type="text" v-model="editForm.password"></p>
          <div class="button">
            <button @click="saveEdit">保存</button>
            <button @click="cancelEdit">取消</button>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import UserInfoOne from './UserInfoOne.vue'
import UserInfoTwo from './UserInfoTwo.vue'
import NoData from './NoData.vue'
// axios请求
import axios from 'axios'
export default {
  name: 'LoginIndex',
  components: {
    UserInfoOne,
    UserInfoTwo,
    NoData
  },
  data () {
    return {
      list: [], // 原始数据列表
      usernameQuery: '', // 查询关键词
      isEditing: false, // 控制编辑弹窗显示
      currentUser: {}, // 当前正在编辑的用户原始对象
      editForm: { // 编辑表单数据
        username: '',
        password: ''
      }
    }
  },
  computed: {
    // 根据查询关键词过滤列表数据
    filteredList () {
      if (!this.usernameQuery) {
        return this.list
      }
      const query = this.usernameQuery.toLowerCase()
      // 过滤逻辑：匹配用户名
      return this.list.filter(item => item.username.toLowerCase().includes(query))
    }
  },
  methods: {
    // **查询动作**：接收 UserInfoOne 传来的查询关键词
    handleSearch (query) {
      this.usernameQuery = query
    },

    // **删除动作**：接收 UserInfoTwo 传来的用户 ID
    handleDelete (id) {
      const confirmed = confirm(`确定要删除 ID 为 ${id} 的用户吗？（此操作仅为本地演示）`)
      if (confirmed) {
        // 找到要删除用户的索引
        const index = this.list.findIndex(user => user.id === id)
        if (index !== -1) {
          // 从列表中移除该用户
          this.list.splice(index, 1)
          alert(`用户 ID ${id} 已删除`)
        }
      }
    },

    // **编辑动作**：打开弹窗并初始化表单数据
    handleEdit (user) {
      this.currentUser = user // 存储原始用户对象
      this.editForm.username = user.username
      this.editForm.password = user.password
      this.isEditing = true
    },

    // **保存编辑**：将修改后的数据应用到原始列表
    saveEdit () {
      // 找到列表中对应用户的索引
      const userIndex = this.list.findIndex(u => u.id === this.currentUser.id)
      if (userIndex !== -1) {
        // 更新用户名和密码
        this.list[userIndex].username = this.editForm.username
        this.list[userIndex].password = this.editForm.password
        alert(`用户 ${this.currentUser.id} 信息已更新`)
      }
      this.isEditing = false
      this.currentUser = {} // 清空当前编辑状态
      this.editForm = { username: '', password: '' }
    },

    // **取消编辑**：关闭弹窗
    cancelEdit () {
      this.isEditing = false
      this.currentUser = {} // 清空当前编辑状态
      this.editForm = { username: '', password: '' }
    }
  },
  async created () {
    try {
      // 1、先 axios 请求并后端MySQL的数据
      const res = await axios.get('https://gist.githubusercontent.com/xkai003/dffaa48ea67e287c8b49cb918cfa9a4b/raw/6e3f97cc81fcb5131cec5c864bcd91a6b1a7a227/MyClassroomManagementSystem.json')
      console.log(res.data)
      // 2、把请求过来的数据传给 list 数组
      this.list = res.data.userinfo
    } catch (error) {
      console.error('请求失败', error)
    }
  }
}

</script>

<style scoped>
.box1{
  width: 100%;
  /* 后续如果数据多了就删除这个高度 */
  height: 100vh;
  margin-left: 250px;
  background-color: #f1efef;
  display: flex;
  justify-content: center;
  /* align-items: center; */
}
/* --- 编辑弹窗样式 (Edit Modal Styles) --- */
.box1 .popup{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* 半透明背景 */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
.box1 .popup .form{
  width: 300px;
  padding: 30px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
.box1 .popup .form h3, .box1 .popup .form p{
  margin-bottom: 15px;
}
.box1 .popup .form input{
  border: 1px solid #ccc;
  padding: 5px;
  border-radius: 4px;
}
.box1 .popup .form .button{
  margin-top: 20px;
  text-align: right;
}
.box1 .popup .form .button button{
  margin-left: 10px;
  padding: 8px 15px;
  border: none;
  cursor: pointer;
  border-radius: 4px;
}
.box1 .popup .form .button button:first-child{
  background-color: #42b983; /* 绿色保存按钮 */
  color: white;
}
.box1 .popup .form .button button:last-child{
  background-color: #ccc; /* 灰色取消按钮 */
}
</style>
