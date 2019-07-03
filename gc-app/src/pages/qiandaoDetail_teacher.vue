<template>
  <div class="home">
    <mt-header :title=this.$route.query.Course_Name fixed class="toubu">
      <router-link :to="{path:'/classCourse_teacher',query:{Class_No:this.Class_No,Course_Name:this.Course_Name,telphone:this.telphone}}" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
  <br>  <br>  <br> <br>  <br>

    <div class="container" >
      <div><mt-button type="danger" v-on:click="signUpEnd">结束签到</mt-button></div>
    </div>
    <div><p align="center"><b>{{state}}</b></p></div>

    <div>
      <div style="border-bottom: 1px solid #40a9ff;display: inline-block ;width:100%;">
      </div>
      <div style="float: left">未签到成员</div><div style="float: right">{{unsigned_member.length}}人</div>
      <div style="border-bottom: 1px solid #40a9ff;display: inline-block ;width:100%;">
      </div>
    </div>

    <div v-for="(item,index) in unsigned_member">
        <!--<a @click="classCourse">-->
        <div class="member">
          <div class="my-left"><img src="../assets/images/user.png" alt=""></div>
          <div class="my-right"><tr style="font-size: 15px">{{item.User_Name}}</tr><span>{{item.User_No}}</span></div>

          <div class="right"><p align="right">未签到</p></div>
          <div v-if="editer_unsigned[index]==0">
          <el-button  icon="el-icon-edit" circle style="position: relative;left:100px" v-on:click="Edit_unsigned(index)" ></el-button>
          </div>
          <div v-if="editer_unsigned[index]==1" style="width:75px;position: relative;left:30px;top:10px" >
              <el-select v-model="stateChosen" size="mini" placeholder="请选择">
                <el-option
                  v-for="item1 in stateOfStudent"
                  :key="item1.value"
                  :label="item1.label"
                  :value="item1.value">
                </el-option>
              </el-select>
          </div>
          <div v-if="editer_unsigned[index]==1" style="width:15px;position: relative;left:45px;top:10px">
            <el-button size="mini" round   v-on:click="ensureChange(item,index)">提交</el-button>
          </div>
        </div>

        <!--</a>-->
    </div>

    <div>
      <div style="border-bottom: 1px solid #40a9ff;display: inline-block ;width:100%;">
      </div>
      <div style="float: left">已签到或标记成员</div><div style="float: right">{{signed_member.length}}人</div>
      <div style="border-bottom: 1px solid #40a9ff;display: inline-block ;width:100%;">
      </div>
    </div>

    <div v-for="(item,index) in signed_member">
      <!--<a @click="classCourse">-->
      <div class="member">
        <div class="my-left"><img src="../assets/images/user.png" alt=""></div>
        <div class="my-right"><tr style="font-size: 15px">{{item.User_Name}}</tr><span>{{item.User_No}}</span></div>
        <div class="right"><p align="right">{{tickOfState[item.SignState]}}</p></div>

        <div v-if="editer_signed[index]==0">
          <el-button  icon="el-icon-edit" circle style="position: relative;left:120px" v-on:click="Edit_signed(index)" ></el-button>
        </div>

        <div v-if="editer_signed[index]==1" style="width:75px;position: relative;left:42px;top:10px" >
          <el-select v-model="stateChosen" size="mini" placeholder="请选择">
            <el-option
              v-for="item1 in stateOfStudent"
              :key="item1.value"
              :label="item1.label"
              :value="item1.value">
            </el-option>
          </el-select>
        </div>
        <div v-if="editer_signed[index]==1" style="width:15px;position: relative;left:55px;top:10px">
          <el-button size="mini" round   v-on:click="ensureChange(item,index)">提交</el-button>
        </div>
      </div>
    <!--<mt-tabbar v-model="selected"  fixed class="footer" >-->
      <!--<mt-tab-item id="成员">-->
        <!--<router-link :to="{path:'/classCourse_teacher',query:{Class_No:this.Class_No,Course_Name:this.Course_Name}}">-->
          <!--<p><img slot="icon" src="../assets/images/my.png"></p>-->
          <!--成员-->
        <!--</router-link>-->
      <!--</mt-tab-item>-->
      <!--<mt-tab-item id="详情">-->
        <!--<router-link :to="{path:'/changeClassCourseDetail',query:{Class_No:this.Class_No,Course_Name:this.Course_Name}}">-->
          <!--<p><img slot="icon" src="../assets/images/detail.png"></p>-->
          <!--详情-->
        <!--</router-link>-->
      <!--</mt-tab-item>-->
    <!--</mt-tabbar>-->
  </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    name: 'home',
    data() {
      return {
        telphone: '',
        role: '',
        Class_No: '',
        Course_Name: '',
        editer_unsigned:[],
        editer_signed:[],
        selected: '',
        unsigned_member: [],
        signed_member: [],
        member:[],
        state: '',
        teacher_time: '',
        stateOfStudent:[{label:"未签到",value:5},{label:"正常",value:1},{label:"迟到",value:2},{label:"缺席",value:3},{label:"早退",value:4}],
        stateChosen:"",
        tickOfState:["未签到","正常","迟到","缺席","早退"]
      }
    },
    created() {

      this.telphone = this.$store.getters.getStorage('info').telphone;
      this.role = this.$store.getters.getStorage('info').role;
      this.Class_No = this.$route.query.Class_No;
      this.Course_Name = this.$route.query.Course_Name;

    //  console.log("qiandaoDetail");
      //console.log(this.Class_No);
      //console.log("qiandaoDetail");
      //判断老师是否发起了签到
      this.$ajax({
        method:'get',
        url:'/api/sign/getSignState',
        params:{
          NOClass:this.Class_No
        }
      }).then(response=>{
        if(response.status==204){
          this.state="未发起签到";
        }else{
          this.teacher_time=response.data.teacher_time;
          var tick=response.data.signing_state;
          // console.log(response.data);
          //  console.log(tick);
          if(tick==1)
            this.state="已发起正常签到";
          else if(tick==2)
            this.state="已发起手动签到";
          else
            this.state="未发起签到";
        }
      }).catch(function (err) {
        console.log(err);
      });


//显示所有成员
      this.$ajax({
        method: 'get',
        url: '/api/sign/showMember',
        params: {
          NOClass: this.Class_No
        }
      }).then(response => {
        //console.log("start loop");
        //console.log('111111111111');
          this.member=response.data;
          this.signed_member=response.data.signed;
          this.unsigned_member=response.data.unsigned;
          this.editer_unsigned=new Array(this.unsigned_member.length);
          this.editer_unsigned.fill(0);
          this.editer_signed=new Array(this.signed_member.length);
          this.editer_signed.fill(0);
          // console.log(this.editer);
          // console.log(response.data);
          //this.member = response.data;

      }).catch(function (err) {
        console.log(err);
      });

      //判断哪些学生已签到，哪些学生未签到
   /*   console.log(this.state);
      //console.log(this.teacher_time);
      //console.log('skal' + this.teacher_time);
      //console.log(this.member);
      this.qindaoMember();*/
    },
    computed: {},
    methods: {
      qindaoMember() {
        //console.log(this.state);
        //console.log(this.Class_No);
        //console.log('进来了吗' + this.teacher_time);
        //console.log(this.teacher_time);
//        if(this.state=='已发起签到'){
//          this.$ajax({
//            method:'post',
//            url:'/api/users_qiandao/signMember',
//            data:{
//              NOClass:this.Class_No,
//              teacher_time:this.teacher_time
//            }
//          }).then(response=>{
//          //  console.log('哈哈哈');
//            console.log(response);
//          }).catch(function (err) {
//            console.log(err);
//          });
//        }
      },
      signUpEnd()
      {
        this.signing_state=1;
        this.$ajax({
          method:'put',
          url:'/api/sign/SignIn_end',
          data:{
            telephone:this.$route.query.telphone,
            NOClass:this.$route.query.Class_No,
          }
        }).then(response=>{
          this.state="未发起签到";
        }).catch(function (err) {

        });
        this.state="未发起签到";
        this.signed_member=[];
        this.unsigned_member=[];
      },
      Edit_signed(index)
      {
       // this.editer[index]=1;
        this.$set(this.editer_signed,index,1);
      //  console.log(this.editer);
      },
      Edit_unsigned(index)
      {
        // this.editer[index]=1;
        this.$set(this.editer_unsigned,index,1);
        //console.log(this.editer);
      },
      ensureChange(user,index)
      {

        if(this.stateChosen!='')
        {
         if(this.stateChosen==5)
           this.stateChosen=0;
          this.$ajax({
            method:'post',
            url:'/api/sign/ChangeStatus',
            data:{
              NOClass:this.Class_No,
              stateChosen:this.stateChosen,
              user:user
            }
          }).then(response=>{
            //console.log(response.data);
           // console.log(this.Class_No);
           // console.log(this.Course_Name);
          //  console.log(this.telphone);
            if(response.data){
              console.log(response.data);
             this.signed_member=response.data.signed;
              this.unsigned_member=response.data.unsigned;
            }
            this.editer_unsigned=new Array(this.unsigned_member.length);
            this.editer_unsigned.fill(0);
            this.editer_signed=new Array(this.signed_member.length);
            this.editer_signed.fill(0);

             // console.log(this.editer_signed);
          }).catch(function (err) {

          });
          this.stateChosen='';

        }

      }
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





