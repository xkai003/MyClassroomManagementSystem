<template>
  <div class="box">
    <div class="content">
      <!-- windows_server -->
      <button @click="upulone()">Windows Server操作系统（2019） —— 23网络技术1班</button>
      <div v-show="isshowone" class="isshowbox">
        <!--  -->
        <!-- <div class="one" v-for="item in props里的传值名" :key="item.id"> -->
          <div class="one" v-for="item in windowslist" :key="item.id">
          <div class="left">
            <span class="title">{{ item.title }}</span>
            <span>{{ item.limit }}</span>
            <span>作答时间：{{ item.AnswerTime }}</span>
            <span>作业要求：{{ item.Requirements }}</span>
          </div>
          <div class="right">
            <a href="">进入</a>
          </div>
        </div>
      </div>
      <!-- routing_switching -->
      <button @click="upultwo()">路由交换技术 —— 23网络技术1班</button>
      <div v-show="isshowtwo" class="isshowbox">
        <!--  -->
        <!-- <div class="one" v-for="item in props里的传值名" :key="item.id"> -->
        <div class="one" v-for="item in routinglist" :key="item.id">
          <div class="left">
            <span class="title">{{ item.title }}</span>
            <span>{{ item.limit }}</span>
            <span>作答时间：{{ item.AnswerTime }}</span>
            <span>作业要求：{{ item.Requirements }}</span>
          </div>
          <div class="right">
            <a href="">进入</a>
          </div>
        </div>
      </div>
      <!-- python_programming -->
      <button @click="upulthree()">Python编程基础</button>
      <div v-show="isshowthree" class="isshowbox">
        <!--  -->
        <!-- <div class="one" v-for="item in props里的传值名" :key="item.id"> -->
        <div class="one" v-for="item in pythonlist" :key="item.id">
          <div class="left">
            <span class="title">{{ item.title }}</span>
            <span>{{ item.limit }}</span>
            <span>作答时间：{{ item.AnswerTime }}</span>
            <span>作业要求：{{ item.Requirements }}</span>
          </div>
          <div class="right">
            <a href="">进入</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // props: ['传值名', '传值名', '传值名'],
  props: ['windowslist', 'routinglist', 'pythonlist'],
  data () {
    return {
      isshowone: true,
      isshowtwo: false,
      isshowthree: false
    }
  },
  methods: {
    upulone () {
      this.isshowone = !this.isshowone
    },
    upultwo () {
      this.isshowtwo = !this.isshowtwo
    },
    upulthree () {
      this.isshowthree = !this.isshowthree
    }
  }
}
</script>

<style scoped>
.box{
  margin: 100px 20px 0px 20px;
  /* background-color: #bb8282; */
}
.box .content{
  /* width: 100%; */
  margin-top: 210px;
  padding: 30px;
  margin-bottom: 30px;
  background-color: #fff;
}
.box .content button{
  width: 100%;
  height: 35px;
  margin-top: 10px;
  text-align: left;
  border: none;
}
.box .content button:hover{
  cursor: pointer;
  background-color: #dddedf;
}
.box .content .isshowbox{
  display: flex;
  flex-direction: column;
}
.box .content .isshowbox .one{
  height: 130px;
  margin-top: 10px;
  padding: 10px 30px 10px 30px;
  border: 1px solid rgb(139, 139, 139);
  display: flex;
  justify-content: space-between;
}
.box .content .isshowbox .one .left{
  display: flex;
  flex-direction: column;
}
.box .content .isshowbox .one .left .title{
  font-size: 20px;
  margin-bottom: 10px;
  color: black;
}
.box .content .isshowbox .one .left span{
  font-size: 13px;
  color: #858585;
}
.box .content .isshowbox .one .right{
  height: 100%;
  /* background-color: #e9c4c4; */
  display: flex;
  align-items: center;
}
.box .content .isshowbox .one .right a{
  text-decoration: none;
  color: blue;
}
.box .content .isshowbox .one .right a:hover{
  color: red;
}
</style>
