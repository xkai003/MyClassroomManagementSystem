<template>
  <div class="table">
    <ul>
        <li class="id">id</li>
        <li>课程</li>
        <li>时间</li>
        <li>地点</li>
    </ul>
    <ul v-for="item in mysql" :key="item.id">
      <li class="id">{{ item.id }}</li>
      <li>{{ item.course }}</li>
      <li>{{ item.time }}</li>
      <li>{{ item.location }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  // 子组件通过props接收数据
  props: ['mysql']
}
</script>

<style scoped>
.table{
    width: 95%;
    margin-top: 210px;
    margin-bottom: 30px;
    background-color: #fff;
    /* border: 1px solid red; */
}
.table ul li{
    border-bottom: 1px solid rgb(189, 188, 188);
}
.table ul li{
    width: 30%;
    line-height: 45px;
    list-style: none;
    float: left;
}
.table ul .id{
    width:100px;
}
</style>
