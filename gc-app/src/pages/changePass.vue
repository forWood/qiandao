<template>
  <div class="changeTelphone">
    <mt-header title="修改密码" class="toubu" fixed>
        <mt-button icon="back" @click.native="$router.back(-1)" slot="left"></mt-button>
    </mt-header>
    <br>  <br>  <br> <br> <br>
    <div class="changePass-form">
      <form action="#">
        <div class="step1" >
          <div class="step11" >
            <span style="font-size:13px">旧密码</span>
            <input  placeholder="密码至少8位数" v-model="old_pass" style=" padding:40px 0 0 25px" type="password">
          </div>
          <div class="step11" >
            <span style="font-size:13px">新密码</span>
            <input  placeholder="至少包含1大写和1小写字母" v-model="new_pass" style=" padding:40px 0 0 25px" type="password">
          </div>
          <div class="step11" >
            <span style="font-size:13px">确认新密码</span>
            <input  placeholder="密码至少包含1个数字" v-model="confirm_newPass" style=" padding:40px 0 0 25px" type="password">
          </div>
        </div>
      </form>
    </div>
    <br><br><br><br>
    <mt-button @click.native="confirmChangePass"  type="primary" style="margin: 20px auto; display: block; width: 90%;">确定修改密码</mt-button>
  </div>

</template>

<script>
  const REG_PASS=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  export default {
    name:'changePass',
    created() {
      this.telphone=this.$store.getters.getStorage('info').telphone;
      this.role=this.$store.getters.getStorage('info').role
    },
    data() {
      return {
        old_pass:'',
        new_pass:'',
        confirm_newPass:'',
        telphone:'',
        role:''
      }
    },
    computed: {
    },
    methods: {
      confirmChangePass(){

        if (this.old_pass === '' ||this.new_pass===''||this.confirm_newPass==='') {
          this.$toast({
            message: '密码不能为空',
            duration: 1000
          });
          return;
        } else {
          if(this.old_pass.length<8||this.new_pass.length<8||this.confirm_newPass.length<8){
            this.$toast({
              message: '密码至少8位数',
              duration: 1000
            });
            return;
          }
          if (!REG_PASS.test(this.old_pass)||!REG_PASS.test(this.new_pass)||!REG_PASS.test(this.confirm_newPass)) {
            this.$toast({
              message: '密码至少包含1个大写字母，1个小写字母和1个数字',
              duration: 1000
            });
            return;
          }
        }
        console.log('如果旧密码相同，且两次密码相同，则修改密码');
        if (this.new_pass !== this.confirm_newPass) {
          this.$toast({
            message: '两次输入的密码不一致',
            duration: 1000
          });
        return;
      }else{
          this.$ajax({
            method:'put',
            url:'/api/users_info/changePass',
            data:{
              old_pass:this.old_pass,
              new_pass:this.new_pass,
              telphone:this.telphone
            }
          }).then(response=>{
            //console.log(response);
            if(response.status==204){
              this.$message.error('您输入的旧密码有误，不能更改新密码');
              return;
            }
            if(response.status==201){
              this.$toast({
                message: '修改密码成功',
                duration: 1000
              });
              if(this.role=='student'){
                this.$router.push('/my_student');
              }
              if(this.role=='teacher'){
                this.$router.push('/my_teacher');
              }
            }
          }).catch(function (err) {
            console.log(err);
          });
        }
      },
    }
  }
</script>

<style lang="scss" scoped>
  @import '../assets/css/function';
  .changeTelphone{
    .toubu{
      height: 55px;
      background-color: #096dd9;
    }
    .changePass-form{
      width:px2rem(600px);
      height:auto;
      margin:0 auto;
      .step1{
        .step11{
          border-bottom: 1px solid #999;
          display: inline-block ;
          width:100%;
        }
        .step12{
          border-bottom: 1px solid #999;
          display: inline-block ;
          width:100%;
          .verifi-code {
            display: inline-block;
            width: px2rem(180px);
            height: px2rem(60px);
            font-size: 12px;
            line-height: px2rem(60px);
            background: #40a9ff;
            color: #fff;
            text-align: center;
            padding-left: px2rem(20px);
            border-radius: 10%
          }
          .readonly {
            background: #eee;
            color: #555;
          }
        }
      }
    }
  }
</style>

