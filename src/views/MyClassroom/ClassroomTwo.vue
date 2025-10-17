<template>
  <div class="box">
    <div class="ckgd">
      <div class="one" v-for="item in list" :key="item.id">
        <div class="left">
          <p>{{ item.course }}</p>
            <table>
              <tr>
                <td>上课时间：</td>
                <td>{{ item.date }}</td>
              </tr>
              <tr>
                <td>所属课程：</td>
                <td>{{ item.course }}</td>
              </tr>
              <tr>
                <td>地址：</td>
                <td>{{ item.location }}</td>
              </tr>
            </table>
        </div>
        <div class="right">
            <a :href=item.url>进入</a>
            <button @click="del(item.id)">删除</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      list: [
        {
          id: 1,
          date: '0',
          course: '0',
          location: '0',
          url: '0'
        }
      ]
    }
  },
  async created () {
    try {
      // 1、先 axios 请求并后端MySQL的数据
      const res = await axios.get('https://gist.githubusercontent.com/xkai003/dffaa48ea67e287c8b49cb918cfa9a4b/raw/6e3f97cc81fcb5131cec5c864bcd91a6b1a7a227/MyClassroomManagementSystem.json')
      console.log('ClassroomTwo部分请求数据：', res.data.myclassroom)
      // 2、把请求过来的数据传给 list 数组
      this.list = res.data.myclassroom
    } catch (error) {
      console.error('请求失败', error)
    }
  }
}
</script>

<style scoped>
.box{
  margin: 160px 30px 0px 30px;
}
.box .ckgd{
  width: 1570px;
  height: 90vh;
  /* background-color: #fff; */
  margin-bottom: 30px;
}
.box .ckgd .one{
  display: block;
  width: 700px;
  height: 150px;
  border-radius: 20px;
  border: 1px solid rgb(206, 204, 204);
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 5px;
  float: left;
  margin:45px 0px 0px 45px;
}
.box .one:hover{
  box-shadow:1px 20px 20px -2px rgb(197, 196, 196)
}
 .box .one .right{
    align-items: center;
    line-height: 150px;
    /* background-color: #c58585; */
}
 .box .one .right a{
  color: blue;
    text-decoration: none;
    font-size: small;
}
.box .one .right a:hover{
    color: red;
}
.box .one .right button{
  color: rgb(75, 202, 219);
  margin-left: 10px;
  border: none;
  background-color: #fff;
}
.box .one .right button:hover{
  cursor: pointer;
  color: red;
}
</style>
