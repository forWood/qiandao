<template>
  <div class="home">
    <mt-header :title=this.Course_Name fixed class="toubu">
        <mt-button icon="back " @click.native="$router.back(-1)" slot="left">返回</mt-button>
    </mt-header>
    <br>  <br>  <br> <br>

    <!--<div  style="border: 1px solid gray;border-radius: 2%;padding: 2%;margin: 5% ">-->



      <div>
        <!--<select v-model="selected">-->
        <!--<option>2019-3-17</option>-->
        <!--<option>2019-3-18</option>-->
        <!--<option>2019-3-19</option>-->
        <!--</select>-->
        <span style="text-align: center;font-size: 2px;position: relative;left: 20px"> {{a}}正常 {{b}}迟到 {{c}}缺席 {{d}}早退 {{e}}请假</span>
        <div style="border-bottom: 1px solid #40a9ff;display: inline-block ;width:100%;"></div>
      </div>

      <div  style="padding: 0%;font-size: 16px" v-for="item in detail">
        <!--<div class="my-left"><img src="../assets/images/u207.png"/> <span class="fonter">缺</span></div>-->
        <div style="float:left">
          <!--<span style="font-size: 17px">{{item.username}}</span>-->
          <!--<span style="float: right;color: #7e8c8d">{{item.timeAndAdress}}</span>-->
          <p style="color: #000000;position:relative;left:18px">{{item.time}} 签到</p>
          <!--<span style="font-size: 1px">1111</span>-->
        </div>
        <div  style="float:right;position:relative;left:-30px">{{item.SignState}}</div>
        <div style="border-bottom: 1px solid #666666;display: inline-block ;width:100%;position: relative;top: -15px"></div>
      </div>
    <!--</div>-->
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name : 'home',
    data(){
      return{
        telphone:'',
        role:'',
        Class_No:'',
        Course_Name:'',
        detail: [],
        signState:'',
        selected:2019-3-17,
        a:0,//正常
        b:0,//迟到
        c:0,//缺席
        d:0,//早退
        e:0,//请假

      }
    },
    created(){
//      this.telphone=this.$store.getters.getStorage('info').telphone;
      this.role=this.$store.getters.getStorage('info').role;
      this.Class_No=this.$route.query.Class_No;
      this.Course_Name=this.$route.query.Course_Name;
      this.telphone=this.$route.query.telphone;
      //显示所有该成员这门课的所有签到记录
      this.$ajax({
        method:'get',
        url:'/api/sign/showSignDetail',
        params:{
          NOClass:this.Class_No,
          telphone:this.telphone
        }
      }).then(response=>{
       // console.log('111111111');
        //console.log(response.data);
        for(var i=0;i<response.data.length;i++){
         // console.log('wood');
          if(response.data[i].SignState==1){
            response.data[i].SignState='正常签到';
            this.a++;
          }
          if(response.data[i].SignState==2){
            response.data[i].SignState='迟到';
            this.b++;
          }
          if(response.data[i].SignState==3){
            response.data[i].SignState='缺席';
            this.c++;
          }
          if(response.data[i].SignState==4){
            response.data[i].SignState='早退';
            this.d++;
          }
          if(response.data[i].SignState==5){
            response.data[i].SignState='请假';
            this.e++;
          }
        }
       // console.log(response.data);
        this.detail=response.data;


      }).catch(function (err) {
        console.log(err);
      });
    },
    computed: {

    },
    methods:{

    }
  }
</script>

<style lang="scss" scoped>
  @import '../assets/css/function';
  .home {
    width: 100%;
    height: 100%;
    overflow: hidden;
    padding-bottom: px2rem(260px);
    .toubu{
      height: 55px;
      background-color: #096dd9;
      font-size:19px;

    }
    .fonter{
      position: relative;
      left: 15px;
      top: -37px;
      z-index: 2;
      font-size: large;
      color: white;

    }
    .member{
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
    }
  }

</style>





