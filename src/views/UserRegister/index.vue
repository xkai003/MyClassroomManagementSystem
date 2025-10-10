<template>
  <div class="box1">
    <UserRegister></UserRegister>
  </div>
</template>

<script>
import UserRegister from '../UserRegister/UserRegister.vue'
export default {
  name: 'UserRegisterIndex',
  components: {
    UserRegister
  }
}

</script>

<style scoped>
.box1{
  width: 100%;
  height: 100%;
  margin-left: 250px;
}
</style>
