<template>
    <div class="login-container">
    <div class="login-box">
      <!-- 头像区域 -->
      <div class="avatar-box">
        <img class="avatar" src="@/assets/logo.png" />
      </div>
      <!-- 表单区域 -->
      <div class="form-login">
        <!-- 登录名称 -->
        <div class="form-group">
          <label for="username">账户：</label>
          <input
            type="text"
            class="form-control"
            id="username"
            placeholder="请输入登录账号"
            autocomplete="off"
            v-model.trim="user"
          />
        </div>
        <!-- 登录密码 -->
        <div class="form-group">
          <label for="password">密码：</label>
          <input
            type="password"
            class="form-control"
            id="password"
            placeholder="请输入登录密码"
            v-model.trim="pasw"
          />
        </div>
        <!-- 登录按钮 -->
      <div class="form-group">
        <button type="button" class="btn" @click="onLogin()">登录</button>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
// axios请求
import axios from 'axios'
export default {
  name: 'UserLogin',
  data () {
    return {
      user: '',
      pasw: '',
      list: []
    }
  },
  // axios请求
  async created () {
    try {
      // 1、先 axios 请求并后端MySQL的数据
      const res = await axios.get('https://gist.githubusercontent.com/xkai003/dffaa48ea67e287c8b49cb918cfa9a4b/raw/6e3f97cc81fcb5131cec5c864bcd91a6b1a7a227/MyClassroomManagementSystem.json')
      // 2、把请求过来的数据传给 list 数组
      this.list = res.data.userinfo
      console.log(this.list)
    } catch (error) {
      console.error('请求失败', error)
    }
  },
  methods: {
  // 两种登录方式
    onLogin () {
      // 方式一：数据库登录
      const matchedUser = this.list.find(item => item.username === this.user && item.password === this.pasw)
      if (matchedUser) {
        alert('登录成功！（数据库验证）')
        localStorage.setItem('username', matchedUser.username)
        this.$router.push('/HomePage')
        return // 关键：登录成功后直接 return，防止继续执行后面逻辑
      }

      // 方式二：默认账号密码登录
      if (this.user === 'XiaoTang' && this.pasw === '123456') {
        alert('登录成功！（管理人账号）')
        localStorage.setItem('username', this.user)
        this.$router.push('/HomePage')
        return
      }

      // 如果两种方式都不匹配
      alert('用户名或密码错误')
      localStorage.removeItem('username')
    }
  }

}
</script>

<style scoped>
.login-box {
  width: 400px;
  height: 250px;
  background-color: #fff;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  box-shadow:1px 20px 20px -2px rgb(197, 196, 196)
}
.login-box .avatar-box img{
  margin-left: 35%;
  /* background-color: #dfb9b9; */
}
.form-login {
  padding: 60px;
}
.form-group{
  padding-top: 20px;
}

.form-control{
  flex: 1;
  padding: 0.5rem;
}
.avatar-box {
  position: absolute;
  width: 100%;
  top: -65px;
  left: 0;
}
.avatar {
  width: 120px;
  height: 120px;
  border-radius: 50% !important;
  box-shadow: 0 0 6px #efefef;
  background-color: #fff;
}
.form-group button{
  width: 100px;
  height: 30px;
  margin-left: 30%;
  border: none;
  background-color:deepskyblue;
  color: #fff;
}
.form-group button:hover{
  background-color:rgb(62, 89, 241);
  color: #fff;
  cursor: pointer;
}
</style>
