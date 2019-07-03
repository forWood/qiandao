<template>
  <div class="resetTelphone">
    <mt-header title="修改手机号" class="toubu" fixed>
        <mt-button icon="back" @click.native="$router.back(-1)" slot="left"></mt-button>
    </mt-header>
    <br><br><br>
    <div class="t"><img src="../assets/images/shouji.png" alt=""></div>
    <div class="t"><p style="font-size: 18px">您当前手机号为<b>{{telphone}}</b></p></div>
    <div style="text-align: center"><p>修改后需要使用新手机号登陆</p></div>
    <div style="text-align: center"><p>仅支持修改到未注册的手机号，如果手机号已注册,则更换失败</p></div>
      <br><br><br><br>
    <mt-button @click.native="changeTel"  type="primary" style="margin: 20px auto; display: block; width: 90%;">更换手机号</mt-button>
  </div>

</template>


<script>
  import { MessageBox } from 'mint-ui';
  export default {
    name : 'resetTelphone',
    data(){
      return{
        telphone:''
      }
    },
    created(){
      this.telphone=this.$store.getters.getStorage('info').telphone;
    },
    methods:{
      changeTel(){
        console.log('更换手机号');
        this.verifyTel();
      },
      verifyTel(){
        MessageBox.prompt('请输入您的账号密码').then(({ value, action }) => {
         // console.log('先验证密码是否正确');
          //console.log(value);
          //console.log(action);
          this.$ajax({
            method:'get',
            url:'/api/users_info/verifyPass',
            params:{
              telphone:this.telphone,
              pass:value,
            }
          }).then(response=>{
           // console.log(response);
            if(response.status==201){
           //   console.log("密码正确");
              this.$router.push('/changeTelphone');//跳转到更换手机页面

            }
            if(response.status==204){
              console.log("密码错误");
              this.$message.error('密码错误，不能更换手机号');
            }
          }).catch(function (err) {
            console.log(err);
          });
        });
      }
    }
  }

</script>



<style scoped lang="scss">

  .resetTelphone{
    .toubu{
      height: 55px;
      background-color: #096dd9;
    }
  }
  .t{
    text-align: center;
    padding: 30px 0 0 0
  }


</style>




