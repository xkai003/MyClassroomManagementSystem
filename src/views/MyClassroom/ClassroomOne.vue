<template>
  <div class="box">
    <div class="title">
      <p>我的课堂</p>
    </div>
    <div class="one">
      <div class="input">
        <input type="text" name="" id="">
        <button>查询</button>
      </div>
      <div class="add">
        <button @click="open()">添加</button>
      </div>
    </div>
    <!-- 添加课程弹窗 -->
    <div class="popup" v-show="isshow">
      <div class="form">
        <button class="shut" @click="shut()">X</button>
        <p>添加课程</p>
        <form @submit.prevent="submitForm">
          <table>
            <tr>
              <td>上课时间：</td>
              <td><input type="date" v-model="newClass.date" required></td>
            </tr>
            <tr>
              <td>所属课程：</td>
              <td><input type="text" v-model="newClass.course" required></td>
            </tr>
            <tr>
              <td>上课地点：</td>
              <td><input type="text" v-model="newClass.location" required></td>
            </tr>
            <tr>
              <td>网址：</td>
              <td><input type="url" placeholder="https://example.com" v-model="newClass.url"></td>
            </tr>
          </table>
          <div class="button">
            <button type="submit">提交</button>
            <button type="button" @click="resetForm()">重置</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
// 1. 导入创建的 mixin 共享功能配置文件
import gistDataMixin from '../../mixins/gistDataMixin.js'
export default {
  mixins: [gistDataMixin]
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
  margin-bottom: 30px;
  background-color: #fff;
}
.box .title{
    border-left: 5px solid blue;
    padding-left: 10px;
    margin-left: 10px;
}
.box .one{
  width: 83%;
  margin-left: 10px;
  display: flex;
  justify-content: space-between;
  /* background-color: #fff; */
}
.box .input{
  /* width: 100%; */
  height: 30px;
  border: 1px solid black;
}
.box .input input{
  height: 28px;
  border: none;
}
.box .input button{
  width: 60px;
  height: 95%;
  border: none;
}
.box .input button:hover{
  cursor: pointer;
  background-color: #e0c9c9;
}
.box .add button{
  width: 60px;
  height: 100%;
  border: none;
}
.box .add button:hover{
  cursor: pointer;
  background-color: #e0c9c9;
}
/* 弹窗popup */
.box .popup{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
}
.box .popup .form{
  width: 300px;
  padding: 30px;
  background-color: #fff;
}
.box .popup .form .shut{
  float: right;
}
.box .popup .form p{
  text-align: center;
}
.box .popup .form .button{
  margin-top: 10px;
  text-align: center;
}
</style>
