<template>
  <div class="box1">
    <HomeOne
      :MyClassroomPOST="list.length"
      :MyHomeworksPOST="MyHomework"
      :MyTextbookPOST="MyTextbook"
      :MyExamPOST="MyExam"
    ></HomeOne>
  </div>
</template>

<script>
import HomeOne from './HomeOne.vue'
// axios请求
// import axios from 'axios'
export default {
  name: 'HomeOneIndex',
  components: {
    HomeOne
  },
  data () {
    return {
      list: [],
      MyHomework: '0',
      MyTextbook: '0',
      MyExam: '0'
    }
  }
  // async created () {
  //   try {
  //     // 1、先 axios 请求并后端MySQL的数据
  //     const res = await axios.get('https://gist.githubusercontent.com/xkai003/dffaa48ea67e287c8b49cb918cfa9a4b/raw/3d7241f6fa70e693a37f9e0b9b7e7b23010a3ec6/MyClassroomManagementSystem.json')
  //     console.log(res.data)
  //     // 2、把请求过来的数据传给 list 数组
  //     this.list = res.data.myclassroom
  //     this.MyHomework = res.data.python_programming.length + res.data.routing_switching.length + res.data.windows_server.length
  //     this.MyTextbook = res.data.mytextbook.length
  //     this.MyExam = res.data.myexam.length
  //   } catch (error) {
  //     console.error('请求失败', error)
  //   }
  // }
}
</script>

<style scoped>
.box1{
  width: 100vw;
  height: 98vh;
  margin-left: 250px;
  margin-top: 50px;
  /* padding-bottom: 60px; */
  background-color: #f1efef;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
