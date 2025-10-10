<template>
  <div class="box">
    <!-- 方式一：通过store直接访问数据 -->
    <h2>Son1 子组件
      - {{ $store.state.title }}
      - {{ $store.state.count }}
    </h2>
    从vuex中获取的值: <label></label>
    <br>
    <!-- +1、+5、+10 三个按钮共用同一个方法 -->
    <button @click="handleAdd(1)">值 + 1</button>
    <button @click="handleAdd(5)">值 + 5</button>
    <button @click="handleAdd(10)">值 + 10</button>
    <button @click="changFn">改标题</button>
  </div>
</template>
<script>
export default {
  name: 'Son1Com',
  methods: {
    handleAdd (n) {
      this.$store.commit('addCount', {
        count: n,
        msg: '哈哈'
      })
    },
    changFn () {
      this.$store.commit('changeTitle', '传智教育')
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
