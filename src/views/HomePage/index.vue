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
import axios from 'axios'
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
  },
  async created () {
    try {
      // 1、先 axios 请求并后端MySQL的数据
      const res = await axios.get('http://47.79.40.65:3008')
      console.log(res.data)
      // 2、把请求过来的数据传给 list 数组
      this.list = res.data.myclassroom
      this.MyHomework = res.data.python_programming.length + res.data.routing_switching.length + res.data.windows_server.length
      this.MyTextbook = res.data.mytextbook.length
      this.MyExam = res.data.myexam.length
    } catch (error) {
      console.error('请求失败', error)
    }
  }
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
