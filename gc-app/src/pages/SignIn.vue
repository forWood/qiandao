<template>
  <div class="home">
  <mt-header title="签到" fixed class="toubu">
    <router-link :to="{path:'/classCourse_student',query:{Class_No:this.Class_No,Course_Name:this.Course_Name,telphone:this.telphone}}" slot="left">
      <mt-button icon="back"></mt-button>
    </router-link>



  </mt-header>

    <div style="position: relative;left:38%;top: 200px">
      <el-button type="primary"  v-on:click="signUp">签到</el-button>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'SignIn',
    created() {
      this.signStatus='4';
    },
    data() {
      return {
        signStatus:'',
        telphone:this.$route.query.telphone,
        Class_No:this.$route.query.Class_No,
        Course_Name:this.$route.query.Course_Name,
      }
    },
    mounted(){

    }
    ,
    methods: {
      signUp()
    {
      this.$ajax({
        method:'post',
        url:'/api/sign/SignIn',
        data:{
          telephone:this.telphone,
          Class_No:this.Class_No,
        }
      }).then(response=>{   //sign -1代表失败，1代表成功
      //  console.log(response.data);
       // console.log( this.signStatus);
        if(response.status==204){
          this.$toast({
            message: '老师未发起签到',
            duration: 2000
          });
        }else if(response.status==200)
        {
          this.$toast({
            message: ' 签到成功',
            duration: 2000
          });
        }else if(response.status==201)
        {
          this.$toast({
            message: ' 已经签到过',
            duration: 2000
          });
        }
     //   console.log(response.data[0].teacher_time);
        // console.log(response.data[0].signing_state);
      }).catch(function (err) {
        console.log(err);
      });
       // console.log(this.$route.query);

    }

    }
  }
</script>

<style >
  .toubu{
    height: 55px;
    background-color: #096dd9;
    font-size:19px;

  }
</style>
