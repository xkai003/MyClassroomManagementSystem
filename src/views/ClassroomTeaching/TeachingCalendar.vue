<template>
  <div class="box1">
      <TeachingOne></TeachingOne>
      <TeachingNavigation></TeachingNavigation>
      <div class="kkry">
        <img src="@/assets/暂无数据.png" alt="">
      </div>
  </div>
</template>

<script>
import TeachingOne from './TeachingOne.vue'
import TeachingNavigation from './TeachingNavigation.vue'
export default {
  name: 'ClassroomTeachingIndex',
  components: {
    TeachingOne,
    TeachingNavigation
  }
}
</script>

<style scoped>
.box1{
  margin-top: 180px;
  width: 100%;
  height: 78vh;
  margin-left: 250px;
  margin-top: 180px;
  background-color: #f1efef;
}
.box1 .kkry{
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: #fff; */
}
</style>
