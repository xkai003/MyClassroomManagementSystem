<template>
    <div class="box1">
      <MyExamOne></MyExamOne>
      <MyExamTwo :mysql="list" v-if="this.list.length !== 0"></MyExamTwo>
    <!-- 如果数据库里没有数据就渲染 NoData 组件 -->
    <NoData v-else-if="this.list.length == 0"></NoData>
    </div>
  </template>

<script>
import MyExamOne from './MyExamOne.vue'
import MyExamTwo from './MyExamTwo.vue'
import NoData from './NoData.vue'
// axios请求
// import axios from 'axios'
export default {
  name: 'MyExamIndex',
  components: {
    MyExamOne,
    MyExamTwo,
    NoData
  },
  data () {
    return {
      list: [
        {
          id: 1,
          course: 'PHP网站开发技术',
          time: '80',
          location: '李华'
        },
        {
          id: 2,
          course: '网络安全配置设备与管理',
          time: '75',
          location: '李明'
        }
      ]
    }
  }
  // async created () {
  //   try {
  //     // 1、先 axios 请求并后端MySQL的数据
  //     // const res = await axios.get('https://gist.githubusercontent.com/xkai003/dffaa48ea67e287c8b49cb918cfa9a4b/raw/6e3f97cc81fcb5131cec5c864bcd91a6b1a7a227/MyClassroomManagementSystem.json')
  //     // console.log(res.data.myexam)
  //     // 2、把请求过来的数据传给 list 数组
  //     // this.list = res.data.myexam
  //   } catch (error) {
  //     console.error('请求失败', error)
  //   }
  // }
}
</script>

  <style scoped>
  .box1{
    width: 100%;
  height: 100vh;
  margin-left: 250px;
  background-color: #f1efef;
  display: flex;
  justify-content: center;
  }
  </style>
