<template>
  <div class="navacat">
    <ul>
      <!-- list -->
      <li v-for="item in list" :key="item.id" class="list">
        <!-- 判断是否为管理员XiaoTang，如果是就 显示用户信息 项，否则就不显示该项 -->
        <router-link :to="item.router" v-if="!item.UserInfo || username === 'XiaoTang'">{{ item.name }}</router-link>
      </li>
      <!-- menus -->
      <li v-for="(item, index) in menus" :key="item.id" class="menus">
        <button @click="toggle(index)">{{ item.name }}</button>
        <ul v-show="item.show" class="two">
          <li><router-link to="/ChangePassword">{{ item.a1 }}</router-link></li>
          <li><router-link to="/ChangeInfo">{{ item.a2 }}</router-link></li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'NavigationChine',
  data () {
    return {
      username: '',
      list: [
        { id: 1, name: '首页', router: '/HomePage' },
        { id: 2, name: '课堂教学', router: '/ClassroomTeaching' },
        { id: 3, name: '我的课堂', router: '/MyClassroom' },
        { id: 4, name: '我的教材', router: '/MyTextbook' },
        { id: 5, name: '我的作业', router: '/MyHomework' },
        { id: 6, name: '我的考试', router: '/MyExam' },
        { id: 7, name: '用户信息', router: '/UserInfo', UserInfo: true }
      ],
      //
      menus: [
        { id: 8, name: '个人中心', show: false, a1: '修改密码', a2: '个人信息' }
      ]
    }
  },
  methods: {
    toggle (index) {
      this.menus[index].show = !this.menus[index].show
    }
  },
  // 页面加载时，从localStorage获取用户名
  mounted () {
    this.username = localStorage.getItem('username')
  }
}
</script>

<style scoped>
.navacat{
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100%;
  margin-top: 60px;
  /* background-color: #f7dbdb; */
}
.navacat ul{
  width: 100%;
  list-style: none;
  padding-left: 0;
}
.navacat ul a{
  display: block;
  height: 45px;
  font-size:18px;
  color: rgb(131, 128, 128);
  text-align: left;
  text-decoration: none;
  line-height: 45px;
  padding-left: 30px;
  border-left: 5px solid rgba(0, 0, 0, 0);
}
/* list */
.navacat ul .list a:hover{
  cursor: pointer;
  background-color: #def3fa;
}
/* 鼠标点击后固定颜色 */
.navacat ul .list a.router-link-active,
.navacat ul .two a.router-link-active{
  background-color: #def3fa;
  border-left: 5px solid rgb(0, 174, 255);
  padding-left: 30px;
}

/* menus */
.navacat .menus{
  padding-left: 30px;
}
.navacat .menus button:hover,
.navacat .menus li:hover{
  background-color: #fff;
}
.navacat ul .menus button{
width: 100%;
height: 45px;
font-size:18px;
padding-left: 5px;
border: none;
text-align: left;
color: rgb(131, 128, 128);
background-color: #fff;
}
.navacat ul .menus button:hover{
cursor: pointer;
}
/* two */
.navacat .two li{
  margin: 0;
  padding-left: 10px;
  background-color: #fff;
  /* padding-left: 50px;  各li标签的内左边距 */
}
.navacat ul .two li a:hover{
  cursor: pointer;
  color: red;
}
/*  */
</style>
