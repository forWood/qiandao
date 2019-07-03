<template>
  <div class="home">
    <mt-header :title=this.Course_Name fixed class="toubu">
      <router-link to="/home_student" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <br>  <br>  <br> <br>

    <div class="container" >
      <router-link :to="{path:'/SignIn',query:{Class_No:Class_No,Course_Name:Course_Name,telphone:telphone}}" ><p><img src="../assets/images/joinSign.png"  alt="" /></p> &nbsp;参与签到</router-link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <router-link :to="{path:'/qiandaoDetail_student',query:{Class_No:this.Class_No,Course_Name:this.Course_Name,telphone:this.telphone}}"><p><img src="../assets/images/detailSign.png"  alt="" /></p> &nbsp;签到详情</router-link>
    </div>
    <br>
    <div>
      <div style="border-bottom: 1px solid #40a9ff;display: inline-block ;width:100%;">
      </div>
      <div style="float: left">成员总数</div><div style="float: right">{{member.length}}人</div>
      <div style="border-bottom: 1px solid #40a9ff;display: inline-block ;width:100%;">
      </div>
    </div>
    <div v-for="item in member">
<!--      <router-link :to="{path:'/classCourse_teacher',query:{Class_No:item.Class_No,Class_Name:item.Class_Name,Course_Name:item.Course_Name}}">-->
        <!--<a @click="classCourse">-->
        <div class="member">
          <div class="my-left"><img src="../assets/images/user.png" alt=""></div>
          <div class="my-right"><tr style="font-size: 15px">{{item.User_Name}}</tr><span>{{item.User_No}}</span></div>
        </div>
        <!--</a>-->
<!--      </router-link>-->
    </div>
    <mt-tabbar v-model="selected"  fixed class="footer" >
      <mt-tab-item id="成员">
        <router-link :to="{path:'/classCourse_student',query:{Class_No:this.Class_No,Course_Name:this.Course_Name}}">
          <p><img slot="icon" src="../assets/images/my.png"></p>
          成员
        </router-link>
      </mt-tab-item>
      <mt-tab-item id="详情">
        <router-link :to="{path:'/classCourseDetail',query:{Class_No:this.Class_No,Course_Name:this.Course_Name}}">
          <p><img slot="icon" src="../assets/images/detail.png"></p>
          详情
        </router-link>
      </mt-tab-item>
    </mt-tabbar>
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
        selected:'',
        member:[],
        Class_No:'',
        Course_Name:''
      }
    },
    created(){
      this.telphone=this.$store.getters.getStorage('info').telphone;
      this.role=this.$store.getters.getStorage('info').role;
      this.Class_No=this.$route.query.Class_No;
      this.Course_Name=this.$route.query.Course_Name;
      //显示所有成员
      this.$ajax({
        method:'get',
        url:'/api/classCourse/StudentCourseMember',
        params:{
          NOClass:this.Class_No
        }
      }).then(response=>{
       // console.log('wood');
       // console.log(response);
        this.member=response.data;
      }).catch(function (err) {
        console.log(err);
      });
    },
    computed: {

    },
    methods:{

//      joinClass(){
//        console.log("使用班课号加入班课");
//        this.$router.push('/inputClassN');
//      },
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
    .container{
      width:80%;
      height:30%;
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





