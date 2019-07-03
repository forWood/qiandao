<template>
  <div>
    <mt-header title="签到" fixed class="toubu">
      <router-link :to="{path:'/classCourse_teacher',query:{Class_No:this.Class_No,Course_Name:this.Course_Name,telphone:this.telphone}}" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>

    <div style="position: relative;left:38%;top: 200px" v-if="this.signing_state==1">
      <el-button type="primary"  v-on:click="signUpStart" >发起正常签到</el-button>
    </div>

    <div style="position: relative;left:38%;top: 250px" v-if="this.signing_state==1">
      <el-button type="primary"  v-on:click="signUpStart2" >发起手动签到</el-button>
    </div>


    <div style="position: relative;left:38%;top: 200px" v-if="this.signing_state==0">
      <el-button type="primary"  v-on:click="signUpEnd">结束签到</el-button>
    </div>



  </div>

</template>

<script>
    export default {
      name: "SignIn_teacher",
      data() {
        return {
          telphone:'',
          Class_No:'',
          Course_Name:'',
          signing_state: '',
          signingStartTime:''
        }
      },
      created()
      {
        this.signing_state=1;//1显示开始签到 和 手动签到 0显示结束签到
        this.telphone=this.$store.getters.getStorage('info').telphone;
        this.Class_No=this.$route.query.Class_No;
        this.Course_Name=this.$route.query.Course_Name;
       // console.log("Sign_teacher");
        //console.log(this.Class_No);
        //console.log("Sign_teacher");

        this.$ajax({
          method:'get',
          url:'/api/sign/getSignState',
          params:{
            NOClass:this.Class_No
          }
        }).then(response=>{
          if(response.status==204){//课程状态未找到
            this.signing_state=1
          }else{
            this.signing_state=1-response.data.signing_state;
          }
         // console.log(this.signing_state);
         // setTimeout(this.signUpEnd,600000);
        }).catch(function (err) {

        });

      },
      methods: {
        signUpStart()
        {
          this.signing_state=1;
          //console.log(this.$route.query);
          this.$ajax({
            method:'get',
            url:'/api/sign/SignIn_start',
            params:{
              telephone:this.telephone,
              Class_No:this.Class_No,
              signing_state:this.signing_state
            }
          }).then(response=>{
            console.log(response.data[0].teacher_time);
            this.signingStartTime=response.data[0].teacher_time;
        //  console.log("test");
          //  console.log(this.signingStartTime);
           // console.log("test");
         //   setTimeout(this.signUpEnd,600000);
          }).catch(function (err) {

          });
          this.signing_state=0;
      },
        signUpStart2() {
          this.signing_state=2;
          //console.log(this.$route.query);
          this.$ajax({
            method:'get',
            url:'/api/sign/SignIn_start',
            params:{
              telephone:this.$route.query.telphone,
              Class_No:this.$route.query.Class_No,
              signing_state:this.signing_state
            }
          }).then(response=>{
            this.signingStartTime=response.data[0].teacher_time;
         //   console.log("test");
           // console.log(this.signingStartTime);
            //console.log("test");
            setTimeout(this.signUpEnd,600000);
          }).catch(function (err) {
          });
          this.signing_state=0;
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
              teacher_time:this.signingStartTime
            }
          }).then(response=>{

          }).catch(function (err) {

          });

        }
    }
    }



</script>

<style scoped>
  .toubu{
    height: 55px;
    background-color: #096dd9;
    font-size:19px;

  }
</style>
