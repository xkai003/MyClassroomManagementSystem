<template>
  <div class="box1">
    <ClassroomOne></ClassroomOne>
    <!-- 如果数据库里有数据就渲染 ClassroomTwo 组件 -->
    <ClassroomTwo v-if="this.classes.length !== 0"></ClassroomTwo>
    <!-- 如果数据库里没有数据就渲染 NoData 组件 -->
    <NoData v-else-if="this.classes.length == 0"></NoData>
  </div>
</template>

<script>
import ClassroomOne from './ClassroomOne.vue'
import ClassroomTwo from './ClassroomTwo.vue'
import NoData from './NoData.vue'
// 1. 导入创建的 mixin 共享功能配置文件
import gistDataMixin from '../../mixins/gistDataMixin.js'
export default {
  name: 'MyClassroomIndex',
  mixins: [gistDataMixin],
  components: {
    ClassroomOne,
    ClassroomTwo,
    NoData
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
