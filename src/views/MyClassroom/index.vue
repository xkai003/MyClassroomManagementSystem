<template>
  <div class="box1">
    <ClassroomOne @search-course="handleSearch"></ClassroomOne>
    <ClassroomTwo :mysql="filteredList" v-if="filteredList.length !== 0"></ClassroomTwo>

    <NoData v-else></NoData>
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
      list: [], // 原始数据
      // 新增：存储当前的查询条件
      currentSearch: ''
    }
  },
  computed: {
    // 新增：根据查询条件过滤列表
    filteredList () {
      if (!this.currentSearch) {
        return this.list
      }
      const query = this.currentSearch.toLowerCase()
      // 过滤逻辑：搜索课程名或地点
      return this.list.filter(item => {
        const courseMatch = item.course && item.course.toLowerCase().includes(query)
        const locationMatch = item.location && item.location.toLowerCase().includes(query)
        return courseMatch || locationMatch
      })
    }
  },
  methods: {
    // 新增：处理 ClassroomOne 发送的查询值
    handleSearch (searchQuery) {
      this.currentSearch = searchQuery
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
      const res = await axios.get('https://gist.githubusercontent.com/xkai003/dffaa48ea67e287c8b49cb918cfa9a4b/raw/6e3f97cc81fcb5131cec5c864bcd91a6b1a7a227/MyClassroomManagementSystem.json')
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
