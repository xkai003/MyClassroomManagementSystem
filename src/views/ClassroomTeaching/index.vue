<template>
  <div class="box1">
      <TeachingOne></TeachingOne>
      <TeachingNavigation></TeachingNavigation>
      <AllCourses></AllCourses>
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
  }
}
</script>

<style scoped>
.box1{
  width: 100%;
  height: 100%;
  margin-left: 250px;
  margin-top: 60px;
  padding-bottom: 60px;
  background-color: #f1efef;
}
</style>
