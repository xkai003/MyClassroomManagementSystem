<template>
  <div class="box">
      <div class="title">
          <p>我的教材</p>
      </div>
      <div class="seek">
          <div>教材名称：<input type="text"></div>
          <button>查询</button>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.box{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  padding: 10px;
  margin-left: 250px;
  margin-top: 60px;
  background-color: #fff;
}
.title{
  border-left: 5px solid blue;
  padding-left: 10px;
  margin-left: 10px;
}
.seek div{
  float: left;
  margin-left: 30px;
}
.seek div input{
  height: 25px;
}
.seek button{
  width: 80px;
  height: 30px;
  margin-left: 10px;
}
.seek button:hover{
  border: none;
  cursor: pointer;
  background-color: #d6d3d3;
}
</style>
