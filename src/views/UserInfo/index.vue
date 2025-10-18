<template>
  <div class="box1">
    <UserInfoOne></UserInfoOne>
    <!--
      :mysql="list" 通过父传子，把 list 数组中的信息传给子组件
      v-if="this.list.length !== 0" 如果数据库里有数据就渲染 UserInfoTwo 组件
     -->
    <UserInfoTwo  :mysql="list" v-if="this.list.length !== 0"></UserInfoTwo>
    <!-- 如果数据库里没有数据就渲染 NoData 组件 -->
    <NoData v-else-if="this.list.length == 0"></NoData>
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
      list: []
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
</style>
