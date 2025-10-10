<template>
    <div>
      <p>我的课堂</p>
      <div class="title">
        <p>标题：{{ $store.state.title }}</p>
        <p>钱包余额：{{ $store.state.count }}</p>
        <p>当前颜色：{{ $store.state.color }}</p>
      </div>
    </div>
  </template>

<script>
export default {
  name: 'MyClassroom'
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
