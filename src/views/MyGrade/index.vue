<template>
    <div class="box1">
      <MyGradeOne></MyGradeOne>
      <MyGradeTwo :mysql="list" v-if="this.list.length !== 0"></MyGradeTwo>
    <!-- 如果数据库里没有数据就渲染 NoData 组件 -->
    <NoData v-else-if="this.list.length == 0"></NoData>
    </div>
  </template>

<script>
import MyGradeOne from './MyGradeOne.vue'
import MyGradeTwo from './MyGradeTwo.vue'
import NoData from './NoData.vue'
// axios请求
// import axios from 'axios'
export default {
  name: 'MyGradeIndex',
  components: {
    MyGradeOne,
    MyGradeTwo,
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
