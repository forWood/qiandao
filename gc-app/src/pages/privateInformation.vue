<template>
    <div class="me">
     <mt-header title="个人信息" class="toubu" fixed>
       <mt-button icon="back" @click.native="$router.back(-1)" slot="left"></mt-button>
     </mt-header>
      <br><br><br>



      <div class="me">
        <div class="mysmg">
          <div class="my-left"><img src="../assets/images/u1159.png" alt=""></div>
          <div class="my-right"><p style="font-size: large">{{info.role}}</p><span>手机号码:{{telphone}}</span></div>
        </div>
        <mt-cell title="姓名" class="t">
          <input  v-model="info_name" type="text" style="text-align:right " >
        </mt-cell>
        <mt-cell title="性别" class="t">
          <input  v-model="sex" type="text" style="text-align:right ">
        </mt-cell>
        <mt-cell title="出生年月" class="t">
          <input  v-model="born" type="text" style="text-align:right ">
          <!--<span v-model="born" type="text" style="text-align:right ">nihao</span>-->
        </mt-cell>
        <mt-cell title="学/工号" class="t">
          <input  v-model="studyNumber" type="text" style="text-align:right ">
        </mt-cell>
        <mt-button @click.native="handleClick"  type="primary" style="margin: 20px auto; display: block; width: 90%;">保存</mt-button>
      </div>
      </div>

</template>

<script>
export default {
   name : 'privateImformation',
   data(){
    return{
      mysmg: {username: '秀秀', mobile: '110110110'},
      info_name:'',
      born:'',
      sex:'',
      studyNumber:'',
      telphone:'',
      info:[],
    }
   },
//   computed:{
//     this.info2=this.$store.getters.getInfo('info'),
//  },
    created(){
        this.info=this.$store.getters.getStorage('info');
        this.$ajax({
          method:'get',
          url:'/api/users_info/appInfo',
          params:{
            telphone:this.info.telphone,
          }
        }).then(response=>{
          console.log(response);
          this.telphone=response.data[0].User_Telephone;
          this.info_name=response.data[0].User_Name;
          this.sex=response.data[0].User_Sex;
          this.born=response.data[0].User_Born;
          this.studyNumber=response.data[0].User_No;
        }).catch(function (err) {
          console.log(err);
        });
//进入actions层
//    this.$store.dispatch('getInfo',this.info.telphone);
//    console.log(this.$store.dispatch('getInfo',this.info.telphone));
//
//    this.info2=this.$store.getters.getAppInfo;
//    console.log(this.info2);
    },
    methods:{
      handleClick(){
        console.log("保存");
        console.log("保存成功后跳转到我的页面");
        this.$ajax({
          method:'put',
          url:'/api/users_info/update_appInfo',
          data:{
            telphone:this.info.telphone,
            name:this.info_name,
            sex:this.sex,
            born:this.born,
            studyNumber:this.studyNumber
          }
        }).then(response=>{
            this.$toast({
              message: '保存成功',
              duration: 1000
            });
         // console.log(response);
          if(this.info.role=='student'){
            this.$router.push('/my_student');
          }else{
            this.$router.push('/my_teacher');
          }
//          this.$router.push('/privateInformation');
        }).catch(function (err) {
          console.log(err);
        });
      }
    }
}

</script>


<style scoped lang='scss'>
  .me{
    padding: 5px 20px;
    .toubu{
      height: 55px;
      background-color: #096dd9;
    }
  }
  .t{
      border-bottom: 1px solid #999;
      display: inline-block ;
      width:100%;
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
  .lianjie{
    display: flex;
    border-bottom: 1px solid #999;
    justify-content: space-between;
    padding: 20px 10px 20px 0;
    span{
      font-size: 15px;
    }
    span:nth-child(2){
      color: #aaa;
      font-size: 15px;

    }
  }

</style>



