<template>
  <div class="box">
    <div class="ckgd">
      <div class="one" v-for="item in $store.state.myclass" :key="item.id">
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
export default {
  methods: {
    // 删除动作
    del (id) {
      if (id) {
        const confirmed = confirm('确定要删除吗？')
        if (confirmed) {
          this.$store.commit('delClassById', id)
        }
      }
    }
  }
}
</script>

<style scoped>
.box{
  margin-top: 180px;
}
.box .ckgd .one{
  display: block;
  width: 93%;/* 每个课程块的长度 */
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
