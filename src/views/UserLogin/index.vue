<template>
  <div class="box1">
    <UserLogin></UserLogin>
  </div>
</template>

<script>
import UserLogin from './UserLogin.vue'
export default {
  name: 'LoginIndex',
  components: {
    UserLogin
  }
}

</script>

<style scoped>
.box1{
  width: 100%;
  height: 98vh;
  background-color: #eff0f1;
}
</style>
