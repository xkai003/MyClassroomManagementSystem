<template>
  <div class="table">
    <ul>
        <li class="id">id</li>
        <li>用户名</li>
        <li>密码</li>
        <li class="operate">操作</li>
    </ul>
    <!-- 通过 v-for 遍历渲染传过来的 mysql 数据 -->
    <ul v-for="item in mysql" :key="item.id">
        <li class="id">{{ item.id }}</li>
        <li>{{ item.username}}</li>
        <li>{{ item.password }}</li>
        <li class="operate">
            <button>查看</button>
            <button>删除</button>
        </li>
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
    width: 40%;
    line-height: 45px;
    list-style: none;
    float: left;
}
.table ul .id{
    width:100px;
}
.table ul .operate{
    width: 10%;
}
.table ul .operate button{
    margin-right: 5px;
}
</style>
