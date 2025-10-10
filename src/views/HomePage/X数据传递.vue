<template>
  <div>
    首页
    <!--
    步骤一：先创建按钮并为其添加点击事件
    步骤二：点击按钮，传递新值
    步骤三：通过 this.$store.commit('方法名', 新值)
    步骤四：进入index.js文件中通过
          方法名(state,新值){
            state.原值 = 新值
          }
    ---------------------------------- -->
    <!-- 改标题 -->
    <div class="title">
      <p>标题：{{ $store.state.title }}</p>
      <input type="text" v-model="newtt">
      <button @click="changFn">改标题</button>
    </div>
    <!-- 改count余额 -->
    <div class="title">
      <span>钱包</span><br>
      <span>余额：{{ $store.state.count }}</span><br>
      <button @click="handleAdd(1)"> + 1</button>
      <button @click="handleAdd(5)"> + 5</button>
      <button @click="handleAdd(10)"> + 10</button>
    </div>
    <!-- 改颜色 -->
    <div class="title">
      <span>改颜色</span><br>
      <span>当前颜色：{{ $store.state.color }}</span><br>
      <button @click="changCl('绿色')">绿色</button>
      <button @click="changCl('蓝色')">蓝色</button>
      <button @click="changCl('紫色')">紫色</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeOne',
  data () {
    return {
      newtt: ''
    }
  },
  methods: {
    // 改标题
    changFn () {
      this.$store.commit('changeTitle', this.newtt)
    },
    // 改余额
    handleAdd (n) {
      this.$store.commit('addCount', {
        count: n,
        msg: '哈哈'
      })
    },
    // 改颜色
    changCl (n) {
      this.$store.commit('changColor', n)
    }
  }
}
</script>

<style scoped>
.title{
  margin-top: 10px;
  border: 1px solid red;
  padding: 10px;
}
.title button{
  margin-left: 5px;
}
</style>
