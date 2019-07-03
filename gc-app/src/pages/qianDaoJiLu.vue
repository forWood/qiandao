<template>
  <div class="jilu">
    <mt-header title="签到记录"  fixed class="toubu">
        <mt-button icon="back" @click.native="$router.back(-1)" slot="left"></mt-button>
    </mt-header>
    <br> <br> <br><br>
    <div class="mysmg" v-for="item in options">
      <div class="my-left"><img src="../assets/images/my.png" alt=""></div>
      <div class="my-right"><p><b>{{item.courseName}}</b></p><span>打卡时间:{{item.time}}</span></div>
    </div>

  </div>
</template>
<script>
  export default {
    name: 'jilu',
    created() {
    },
    data() {
      return {
        value:0 ,//默认选中第一项
        options:[
          {
            courseName:'职业规划',
            time:'2019-1-1'
          },
          {
            courseName:'智能技术',
            time:'2019-1-1',
          },
          {
            courseName:'工程训练',
            time:'2019-1-1',
          },
        ],
      }
    },
    methods: {
      handleClick () {
      },
    }
  }
</script>
<style scoped lang='scss'>
  .toubu{
    height: 55px;
    background-color: #096dd9;
  }
  .jilu{
    padding: 5px 20px;
  }
  .mysmg{
    display: flex;
    border-bottom: 1px solid #999;
    .my-left{
      width: 50px;
      margin:5px 20px 5px 0;
      img{
        width: 100%;
      }
    }
    .my-right{
      padding: 5px 10px;
      p{
        line-height: 25px;
      }
      span{
        line-height: 25px;
        color: #aaa;
      }
    }
  }
</style>
