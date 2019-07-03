<template>
  <div class="home">
    <mt-header title="签到详情">
      <router-link to="/classCourse_student" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>

    <div class="mysmg" >
      <div class="my-right">
        <p >打卡时间: 2019-0-22</p></div>
         <p >已签到</p>
    </div>
    </div>


</template>

<script>
    export default {
        name: "detail_student"
    }
</script>

<style scoped lang='css'>
  .fonter{
    position: relative;
    left: 17px;
    top: -39px;
    z-index: 2;
    font-size: large;
    color: white;
  }




</style>
