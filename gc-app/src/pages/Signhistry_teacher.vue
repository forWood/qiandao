<template>
  <div class="jilu">
    <mt-header title="签到记录"  fixed class="toubu">
      <mt-button icon="back" @click.native="$router.back(-1)" slot="left"></mt-button>
    </mt-header>
    <br> <br> <br><br>
    <div class="mysmg" v-for="item in record" >

   <div style="position: relative;left: 5px"> 打卡时间：<br>{{item.time}} </div>
      <div style="position: relative;left: 30px">签到人数：{{item.signN}}</div>

      <router-link :to="{path:'/SignDetailOfDiffTime',query:{Class_No:Class_No,Course_Name:Course_Name,teacher_time:item.time}}">
      <div style="position: relative;left: 50px;top:-2px;"><el-button size="mini">详情</el-button></div>
      </router-link>

      <br>
    </div>



  </div>
</template>
<script>
  export default {
    name: 'jilu',
    data() {
      return {
        value:0 ,//默认选中第一项
        record:[],
        Class_No:'',
        Course_Name:'',
        telphone:'',
      }
    },
    created() {
      this.Class_No=this.$route.query.Class_No;
      this.Course_Name=this.$route.query.Course_Name;
      this.telphone=this.$store.getters.getStorage('info').telphone;
     // console.log("SignHistory "+this.Class_No+" "+this.Course_Name+""+this.telphone );

      this.$ajax({
        method:'get',
        url:'/api/sign/SignRecord',
        params:{
          Class_No:this.Class_No,
          Course_Name:this.Course_Name,
          telphone:this.telphone
        }
      }).then(response=>{
       // console.log(response);
        this.record=response.data;
      }).catch(function (err) {
        console.log(err);
      });



    },
    methods: {
      loadMore() {

      }
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
    padding: 10px;
    color: black;
    font-size: 14px;
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
        color:black;
      }
    }
  }
</style>
