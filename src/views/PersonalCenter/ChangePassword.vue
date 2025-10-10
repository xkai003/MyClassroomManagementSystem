<template>
    <div class="box">
        <form action="">
            <div><div class="title">*原来密码：</div><input type="text" v-model="oldpas"></div>
            <div><div class="title">*新密码：</div><input type="password" v-model="newpas"></div>
            <div><div class="title">*确认密码：</div><input type="password" v-model="qrpas"></div>
            <div class="button">
                <input type="button" class="qr" value="确认" @click="confirm()">
                <input type="button" class="cz" value="重置" @click="Reset()">
            </div>
        </form>
    </div>
</template>

<script>
export default {
  data () {
    return {
      oldpas: '',
      newpas: '',
      qrpas: ''
    }
  },
  methods: {
    confirm () {
      alert('提交成功！')
      this.oldpas = ''
      this.newpas = ''
      this.qrpas = ''
    },
    Reset () {
      this.oldpas = ''
      this.newpas = ''
      this.qrpas = ''
    }
  }
}
</script>

<style scoped>
.box{
    width: 100vw;
    height: 93vh;
    margin-left: 250px;
    margin-top: 50px;
    background-color: #f1efef;
}
.box form{
    /* width: 900px; */
    height: 300px;
    margin-left: 30px;
    margin-top: 30px;
    padding: 30px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
}
.box form .title{
    width: 120px;
    font-size: 20px;
    margin-top: 10px;
    float: left;
}
.box form input{
    width: 700px;
    height: 30px;
    margin-top: 10px;
}
.box .button{
    margin-top: 10px;
}
.box .button .qr,
.box .button .cz{
    width: 80px;
    margin-left: 30px;
    border: none;
    color: #fff;
    background-color: #6dd4f3;
}
.box .button .qr:hover,
.box .button .cz:hover{
    color: rgba(12, 5, 5, 0.87);
    background-color: #0db0f1;
    cursor: pointer;
}
</style>
