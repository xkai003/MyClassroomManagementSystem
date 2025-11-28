<template>
  <div class="box1">
      <TeachingOne @search-class="updateSearchConditions"></TeachingOne>
      <TeachingNavigation></TeachingNavigation>
      <AllCourses :search="searchConditions"></AllCourses>
  </div>
</template>

<script>
import TeachingOne from './TeachingOne.vue'
import TeachingNavigation from './TeachingNavigation.vue'
import AllCourses from './AllCourses.vue'
export default {
  name: 'ClassroomTeachingIndex',
  components: {
    TeachingOne,
    TeachingNavigation,
    AllCourses
  },
  data () {
    return {
      // 存储查询条件
      searchConditions: {
        date: '',
        course: '',
        location: ''
      }
    }
  },
  methods: {
    // 更新查询条件的方法
    updateSearchConditions (conditions) {
      this.searchConditions = conditions
    }
  }
}
</script>
