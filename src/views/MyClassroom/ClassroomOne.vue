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
    <div class="popup" v-show="isshow">
      <div class="form">
        <button class="shut" @click="shut()">X</button>
        <p>添加课程</p>
        <table>
          <tr>
            <td>上课时间：</td>
            <td><input type="date" v-model="date"></td>
          </tr>
          <tr>
            <td>所属课程：</td>
            <td><input type="text" v-model="course"></td>
          </tr>
          <tr>
            <td>上课地点：</td>
            <td><input type="text" v-model="location"></td>
          </tr>
          <tr>
            <td>网址：</td>
            <td><input type="text" v-model="url"></td>
          </tr>
        </table>
        <div class="button">
          <button @click="submit()">提交</button>
          <button @click="reset()">重置</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isshow: false,
      date: '',
      course: '',
      location: '',
      url: ''
    }
  },
  methods: {
    // 打开弹窗
    open () {
      this.isshow = true
    },
    // 退出弹窗
    shut () {
      this.isshow = false
    },
    // 提交动作
    submit () {
      const newClass = {
        id: Date.now(), // 用时间戳生成唯一 ID
        date: this.date,
        course: this.course,
        location: this.location,
        url: this.url
      }
      // 调用 mutation 添加课程
      this.$store.commit('addClass', newClass)
      // 弹窗提示
      alert(
        '上课时间：' + this.date + '\n' +
        '所属课程：' + this.course + '\n' +
        '上课地点：' + this.location + '\n' +
        '网站：' + this.url
      )
      // 关闭弹窗
      this.isshow = false
    },
    // 重置动作
    reset () {
      this.date = ''
      this.course = ''
      this.location = ''
      this.url = ''
    }
  }
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
