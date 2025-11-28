<template>
    <div class="box">
        <div class="navigation">
            <router-link to="/ClassroomTeaching">全部课程</router-link>
            <router-link to="/TeachingCalendar">教学日历</router-link>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.box{
    position: absolute;
    top: 120px;
    left: 0;
    width: 100%;
    height: 50px;
    padding: 10px;
    margin-top: 60px;
    margin-left: 250px;
    margin-bottom: 30px;
    /* background-color: #fff; */
}
.navigation{
    margin-left: 10px;
    border-bottom: 2px solid rgb(157, 184, 202);
    display: flex;
    flex-direction: row;
    /* background-color: #f7c0c0; */
}
.navigation a{
    display: block;
    width: 100px;
    height: 40px;
    margin-right: 30px;
    text-align: center;
    color: black;
    border-bottom: 2px solid rgb(157, 184, 202);
    /* background-color: #c57a7a; */
    text-decoration: none;
}
.navigation a:hover{
    color: blue;
    border-bottom: 2px solid blue;
}
.navigation a.router-link-active{
    color: blue;
    border-bottom: 2px solid blue
}
</style>
