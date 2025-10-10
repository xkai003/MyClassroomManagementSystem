<template>
  <div class="box">
    <!-- 导航组件 -->
    <!-- 条件判断：如果当前路径不是 login/register，则显示导航 -->
    <Navigation v-if="!noNavRoutes.includes($route.path)"></Navigation>
    <StatusBar v-if="!noNavRoutes.includes($route.path)"></StatusBar>
    <!-- 渲染匹配到的路由组件 -->
    <router-view> </router-view>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'
import StatusBar from './components/StatusBar.vue'
export default {
  components: {
    Navigation,
    StatusBar
  },
  computed: {
    noNavRoutes () {
      return ['/', '/UserLogin'] // 不显示导航栏的路由
    }
  }
}
</script>

<style scoped>
.box{
  /* 横向布局 */
  display: flex;
  flex-direction: row;
}
</style>
