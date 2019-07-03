<template>
  <div class="home">
  <div>
  <mt-header title="签到记录详情"  fixed class="toubu">
    <mt-button icon="back" @click.native="$router.back(-1)" slot="left"></mt-button>
  </mt-header>
<br>
  <div v-for="item in record" class="member" >
    <div class="my-left"><img src="../assets/images/user.png" alt=""></div>
    <div class="my-right"><tr style="font-size: 15px">{{item.User_Name}}</tr><span>{{item.User_No}}</span></div>
    <div class="right"><p align="right" style="position: relative;left: 120px">{{tickOfState[item.SignState]}}</p></div>
  </div>
  </div>
  </div>
</template>

<script>
    export default {
      name: "SignDetailOfDiffTime",
      data() {
        return {
          value:0 ,//默认选中第一项
          record:[],
          Class_No:'',
          Course_Name:'',
          telphone:'',
          teacher_time:'',
          tickOfState:["未签到","正常","迟到","缺席","早退"]
        }
      },
      created() {
        this.Class_No=this.$route.query.Class_No;
        this.Course_Name=this.$route.query.Course_Name;
        this.telphone=this.$store.getters.getStorage('info').telphone;
        this.teacher_time=this.$route.query.teacher_time;
        this.$ajax({
          method:'get',
          url:'/api/sign/GetSpecificTimeRecord',
          params:{
            Class_No:this.Class_No,
            Course_Name:this.Course_Name,
            telphone:this.telphone,
            teacher_time:this.teacher_time
          }
        }).then(response=>{
          console.log(response.data);
          this.record=response.data;
        }).catch(function (err) {
          console.log(err);
        });
      }
    }
</script>

<<style lang="scss" scoped>
  @import '../assets/css/function';
  .home {

    width: 100%;
    height: 100%;
    overflow: hidden;
    padding-bottom: px2rem(260px);
    .toubu{
      height: 55px;
      background-color: #096dd9;
    }
    .container{
      width:32%;
      height:20%;
      border:1px solid #DCDCDC;
      vertical-align: middle;
      margin:0 auto;
      display: flex;
      justify-content: center;
      border-radius: 5%;
      img{
        width: 50px;
        height:50px;
      }
    }
    .footer {
      background-color:#096dd9;

      p {
        img{height:20px;width: 20px}
        line-height: 20px;
        font-size: 20px;
        color: #fff;
        margin-bottom: 2px;
      }
    }
    .member{
      position: relative;
      top: 40px;
      display: flex;
      border-bottom: 1px solid #999;
      .my-left{
        width: 50px;
        margin:10px 10px 0 0;
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
      .right{
        float:right;
        padding:20px 0 0 0
      }
    }
  }

</style>

