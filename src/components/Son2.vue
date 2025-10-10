<template>
  <div class="box">
    <!-- 方式一：通过store直接访问数据 -->
    <h2>Son2 子组件
      - {{ $store.state.title }}
      - {{ $store.state.count }}
    </h2>
    从vuex中获取的值: <label></label>
    <br>
    <!-- +1、+5、+10 三个按钮共用同一个方法 -->
    <button @click="handleSub(1)">值 - 1</button>
    <button @click="handleSub(5)">值 - 5</button>
    <button @click="handleSub(10)">值 - 10</button>
  </div>
</template>
<script>
export default {
  name: 'Son1Com',
  methods: {
    handleSub (n) {
      this.$store.commit('SubCount', n)
    }
  }
}
</script>
<style lang="css" scoped>
.box{
border: 3px solid #ccc;
width: 400px;
padding: 10px;
margin: 20px;
}
h2 {
margin-top: 10px;
}
</style>
