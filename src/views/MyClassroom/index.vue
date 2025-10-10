<template>
  <div class="box1">
    <ClassroomOne></ClassroomOne>
    <!-- 如果数据库里有数据就渲染 ClassroomTwo 组件 -->
    <ClassroomTwo :mysql="list" v-if="this.list.length !== 0"></ClassroomTwo>
    <!-- 如果数据库里没有数据就渲染 NoData 组件 -->
    <NoData v-else-if="this.list.length == 0"></NoData>
  </div>
</template>

<script>
import ClassroomOne from './ClassroomOne.vue'
import ClassroomTwo from './ClassroomTwo.vue'
import NoData from './NoData.vue'
// axios请求
import axios from 'axios'
export default {
  name: 'MyClassroomIndex',
  data () {
    return {
      list: []
    }
  },
  components: {
    ClassroomOne,
    ClassroomTwo,
    NoData
  },
  async created () {
    try {
      // 1、先 axios 请求并后端MySQL的数据
      const res = await axios.get('http://47.79.40.65:3001')
      console.log(res.data.myclassroom)
      // 2、把请求过来的数据传给 list 数组
      this.list = res.data.myclassroom
    } catch (error) {
      console.error('请求失败', error)
    }
  }
}
</script>

<style scoped>
.box1{
  width: 100%;
  height: 100%;
  margin-left: 250px;
  padding-bottom: 60px;
  background-color: #f1efef;
}
</style>
