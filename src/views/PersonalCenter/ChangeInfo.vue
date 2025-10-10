<template>
  <div class="box">
    <div class="form">
      <ul>
        <li><img src="@/assets/logo.png" alt=""></li>
        <li>工号：353135</li>
        <li>姓名：{{ username }}</li>
        <li>性别：女</li>
        <li>手机：19188888888</li>
        <li>邮箱：666@qq.com</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: ''
    }
  },
  mounted () {
    this.username = localStorage.getItem('username') || '游客'
  }
}
</script>

<style scoped>
.box{
  width: 100vw;
  height: 93vh;
  margin-left: 250px;
  margin-top: 50px;
  background-color: #f1efef;
}
.box .form{
  width: 300px;
  height: 300px;
  margin: 30px;
  padding: 30px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  box-shadow:20px 20px 20px 10px rgb(197, 196, 196);
}
.box .form ul{
  width: 50%;
  list-style: none;
  margin: 0;
  padding: 0;
  /* background-color: #db9494; */
}
.box .form ul li{
  line-height: 30px;
}
.box img{
  margin-left: 10%;
  height: 100px;
}
</style>
