<template>
    <div class="box1">
      <MyHomeworkOne></MyHomeworkOne>
      <!-- <MyHomeworkTwo :传值名="数组名"></MyHomeworkTwo> -->
      <MyHomeworkTwo
       :windowslist="windowsList"
       :routinglist="routingList"
       :pythonlist="pythonList"
      ></MyHomeworkTwo>
    </div>
  </template>

<script>
import MyHomeworkOne from './MyHomeworkOne.vue'
import MyHomeworkTwo from './MyHomeworkTwo.vue'
// axios请求
import axios from 'axios'
export default {
  name: 'MyHomeworkIndex',
  data () {
    return {
      // 数组名: []
      windowsList: [],
      routingList: [],
      pythonList: []
    }
  },
  components: {
    MyHomeworkOne,
    MyHomeworkTwo
  },
  async created () {
    try {
      // 1、先 axios 请求并后端MySQL的数据
      const res = await axios.get('http://47.79.40.65:3008')
      // 2、把请求过来的数据传给 相应的 数组
      // this.数组名 = res.data.数据库表名
      this.windowsList = res.data.windows_server
      this.routingList = res.data.routing_switching
      this.pythonList = res.data.python_programming
      console.log(this.list)
    } catch (error) {
      console.error('请求失败', error)
    }
  }
}
</script>

  <style scoped>
  .box1{
    width: 100%;
    /* height: 95vh; */
    margin-left: 250px;
    padding: 30px;
    background-color: #f1efef;
  }
  </style>
