<template>
    <div class="box">
      <div class="title">
          <h1>欢迎来到学生信息管理系统</h1>
      </div>
      <div class="one">
          <div>
              <p class="data">{{ MyClassroomPOST }}</p>
              <p>学生信息</p>
          </div>
          <div>
              <p class="data">{{ MyTextbookPOST }}</p>
              <p>学生作业</p>
          </div>
          <div>
              <p class="data">{{ MyHomeworksPOST }}</p>
              <p>学生成绩</p>
          </div>
          <div>
              <p class="data">{{ MyExamPOST }}</p>
              <p>我的考试</p>
          </div>
      </div>
    </div>
  </template>

<script>
export default {
  props: ['MyClassroomPOST', 'MyHomeworksPOST', 'MyTextbookPOST', 'MyExamPOST']
}
</script>

  <style scoped>
  .box{
      width: 80%;
      height: 600px;
      /* background-color: #fff; */
      margin-top: 30px;
      display: flex;
      flex-direction: column;
  }
  .box .title{
      text-align: center;

  }
  .box .one{
      width: 100%;
      /* background-color: #e9c0c0; */
  }
  .box .one div{
      width: 23%;
      height: 90px;
      border-radius: 20px;
      margin-left: 90px;
      margin-top: 30px;
      text-align: center;
      float: left;
      background-color: #fff;
  }
  .box .one div .data{
      color: rgb(206, 24, 230);
      font-weight: bold;
  }
  .box .two{
      width: 500px;
      height: 90px;
      border-radius: 20px;
      margin-left: 60px;
      background-color: #fff;
  }
  .box .two p{
      margin-left: 40px;
  }
  </style>
