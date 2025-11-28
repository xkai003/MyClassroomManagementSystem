<template>
  <div class="StatusBar">
    <div class="left">学生信息管理系统</div>
    <div class="right">
        <svg t="1751084778501" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9860"><path d="M502.496 63.136c125.888 0 227.936 100.384 227.936 224.192 0 123.84-102.048 224.224-227.936 224.224-125.888 0-227.936-100.384-227.936-224.224C274.56 163.488 376.64 63.136 502.496 63.136L502.496 63.136zM502.496 63.136c125.888 0 227.936 100.384 227.936 224.192 0 123.84-102.048 224.224-227.936 224.224-125.888 0-227.936-100.384-227.936-224.224C274.56 163.488 376.64 63.136 502.496 63.136L502.496 63.136zM417.024 586.304l189.984 0c162.624 0 294.432 129.632 294.432 289.6l0 18.656c0 63.04-131.84 65.44-294.432 65.44l-189.984 0c-162.624 0-294.432-0.096-294.432-65.44l0-18.656C122.592 715.936 254.4 586.304 417.024 586.304L417.024 586.304zM417.024 586.304" fill="#272636" p-id="9861"></path></svg>
        <span>欢迎您，{{ username }}！</span>
        <router-link to="/UserLogin">退出登录</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data () {
    return {
      username: ''
    }
  },
  mounted () {
    // 页面加载时，从localStorage获取用户名
    this.username = localStorage.getItem('username') || '游客'
  }
}
</script>

<style scoped>
.StatusBar{
    width: 100%;
    height: 60px;
    background-color: rgba(115, 215, 228);
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
}
.StatusBar .left{
    height: 100%;
    width: 300px;
    /* background-color: #ebb3b3; */
    margin-left: 30px;
    font-size: 25px;
    line-height: 60px;
    color: #fff;
}
.StatusBar .right{
    height: 100%;
    /* width: 90px; */
    /* background-color: #ebb3b3; */
    margin-right: 30px;
    font-size: 20px;
    line-height: 60px;
    color: #fff;
    display: flex;
    flex-direction: row;
}
.StatusBar .right .icon{
    width: 25px;
    height: 30px;
    margin-top: 15px;
    line-height: 100px;
}
.StatusBar .right span{
    margin-left: 5px;
}
.StatusBar .right a{
    margin-left: 20px;
    font-size: 15px;
    color: #fff;
    text-decoration: none;
}
.StatusBar .right a:hover{
    color: #072cfc;
}
</style>
