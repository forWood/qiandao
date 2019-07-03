<template>
    <div class="resetPass">
        <div class="title">重置密码操作</div>
      <el-steps :active="active" finish-status="finish" align-center style="margin-top: 20px">
        <el-step title="步骤一" description="手机验证"></el-step>
        <el-step title="步骤二" description="重置密码"></el-step>
        <el-step title="步骤三" description="重置成功"></el-step>
      </el-steps>
    <br>
        <div class="resetPass-form">
            <form action="#">
              <div class="step1" v-if="active===1"  style=" background-color: #e6f7ff">
                <div class="step11" >
                  <span style="font-size:13px">手机号</span>
                  <input  placeholder="输入注册时手机号" v-model="telphone" style="background-color: #e6f7ff; padding:40px 0 0 25px">
                </div>
                <div class="step12" style="padding:20px 0 0 0">
                    <table style="white-space: nowrap">
                      <tr>
                        <th>
                          <span style="font-size:13px">验证码</span>
                        </th>
                        <th>
                          <input  placeholder="输入验证码" v-model="captcha" style="background-color: #e6f7ff; padding:0 0 0 29px">
                        </th>
                        <th>
                          <div class="verifi-code" @click="getCode" v-show="!sendCode">
                            获取验证码
                          </div>
                          <span class="verifi-code readonly" v-show="sendCode">
                        {{timeOut}}秒重新获取
                    </span>
                        </th>
                      </tr>
                    </table>
                  <div>
                  </div>
                </div>
              </div>
              <div class="step2" v-if="active===2">
                <div class="step21">
                  <span style="font-size:13px">修改密码</span>
                  <input  type="password" placeholder="请输入修改后的密码" v-model="pass" style="background-color: #e6f7ff; padding:40px 0 0 25px">
                </div>
                <div class="step22">
                  <span style="font-size:13px">确认密码</span>
                  <input type="password"  placeholder="请再次输入密码" v-model="againPass" style="background-color: #e6f7ff; padding:30px 0 0 25px">
                </div>
              </div>
              <div class="step3" v-if="active===3">
                <div style="text-align: center;padding: 30px 0 0 0"><img src="../assets/images/chongzhimima.png" width="100px" height="100px"></div>
                <div style="text-align: center;font-size: 20px;padding: 18px 0 0 0">恭喜你重置密码成功</div>
                <div style="text-align: center;font-size: 15px;padding: 22px 0 0 0"><b>可以登陆系统</b></div>
              </div>
              <div class="deployBtn">
                <el-button style="margin-top:50px; background-color:#0bd38a;color:#fff;font-size:16px;float:left;height:42px;border-radius:10px;" @click="prev" v-if="active==2">上一步</el-button>
                <el-button style="margin-top:50px; background-color:#0bd38a;color:#fff;font-size:16px;float:right;height:42px;border-radius:10px;" @click="next" v-if="active==1||active==2" >下一步</el-button>
                <mt-button @click.native="submit"  type="primary" style="margin: 50px auto; display: block; width: 90%;" v-if="active==3">登陆</mt-button>
              </div>
              <div style="float:right;margin-top: 40px;margin-left:150px;font-size:16px;"> <router-link to="/" v-if="active==1||active==2">记起密码?登录>></router-link></div>
            </form>
        </div>
    </div>
</template>

<script>

//import { mapActions } from 'vuex'
const REG_TELPHONE= /^((13[0-9])|(14[5,7])|(15[0-3,5-9])|(17[0,3,5-8])|(18[0-9])|166|198|199|(147))\d{8}$/;
const REG_CODE=/^\w{4}$/;
const REG_PASS=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
export default {
    name:'resetPass',
    created() {
//    this.$emit('public_header', false);
//    this.$emit('public_footer', false);
    },
    data() {
        return {
            telphone:'',
            captcha:'',
            captcha2:'',
            pass:'',
            againPass:'',
            sendCode: false,
            timeOut: 60,
            active: 1
        }
    },
    computed: {
    },
    methods: {
      prev(){
        --this.active;
        if(this.active<1) this.active=1
      },
      next(){
        if(this.active>2) this.active==1;
        if(this.active ==1){
          if(!this.telphone){
            this.$toast({
              message: '手机号不能为空',
              duration: 1000
            });
            return;
          }
          if(!REG_TELPHONE.test(this.telphone)){
            this.$toast({
              message: '手机号格式错误',
              duration: 1000
            });
            return;
          }
          if(!REG_CODE.test(this.captcha)){
            this.$toast({
              message: '请输入四位验证码',
              duration: 1000
            });
            return;
          }
         // console.log("如果验证码正确,下一步");
          if(this.captcha2.toLowerCase()==this.captcha.toLowerCase()){
            this.active++;
          }else{
            this.$toast({
              message: '你输入的验证码有误',
              duration: 1000
            });
          }

        }
        if(this.active==2){
          if(!this.pass||!this.againPass){
            this.$toast({
              message: '密码不能为空',
              duration: 1000
            });
            return;
          }
          if(this.pass.length >=1　&& this.pass.length <8){
            this.$toast({
              message: '密码至少8位数',
              duration: 1000
            });
            return;
          }
          if(this.pass.length>=8&&!REG_PASS.test(this.pass)){
            this.$message.error('密码包含至少1个大写字母，1个小写字母和1个数字');
          }
          if(this.pass == this.againPass){
            this.$ajax({
              method:'put',
              url:'/api/users_info/resetPass',
              data:{
                telphone:this.telphone,
                pass:this.pass,
              }
            }).then(response=>{
            //  console.log(response);
              if(response.status==204){
                this.$message.error('该手机号未注册,不能重置密码');
                return;
              }
              this.active++
            }).catch(function (err) {
              console.log(err);
            });

          }else{
            this.$toast({
              message: '两次输入的密码不一致',
              duration: 1000
            });
          }
        }
      },
        getCode () {
            let me = this;
            me.sendCode = true;
            me.createCode();
           if(this.telphone){
            this.$ajax({
              method:'post',
              url:'/sms/sendsms',
              data:{
                sid:"11bd37dbcf9ab6863ec5e3a9631ebefa",
                token:"792375300e03f02165e79f37608c6f36",
                appid:"c38c00e8590b45d4a55d33c28d48b48f",
                templateid:"460076",
                param:this.captcha2,
                mobile:this.telphone,
//            uid:"2d92c6132139467b989d087c84a365d8"
              }

            }).then(response=>{
             // console.log('测试注册完是否返回数据');
              //console.log(response);
            }).catch(function (err) {
              console.log(err);
            });
          }else{
             this.$toast({
               message: '手机号不能为空',
               duration: 1000
             });
          }
            me.timeOut = 60;
            me.setTimeOut();
        },
        createCode(){
          var code = "";
          var codeLength = 4;//验证码的长度
          var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R', 'S','T','U','V','W','X','Y','Z');//随机数
          for(var i = 0; i < codeLength; i++) {
          //循环操作
            var index = Math.floor(Math.random()*36);//取得随机数的索引（0~35）
            code += random[index];//根据索引取得随机数加到code上
          }
          this.captcha2= code;//把code值赋给验证码
            console.log(code);
        },
        setTimeOut () {
            let me = this;
            let timer = setTimeout(() => {
                if(me.timeOut < 0) return;
                me.timeOut--;
                me.setTimeOut()
            }, 1000);
            if(me.timeOut <= 0) {
                me.sendCode = false;
            }
        },
        submit () {
          this.$router.push('/');
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/function';
.resetPass{
    width:100%;
    height: 700px;
    overflow:hidden;
    background-color: #e6f7ff;
    padding-bottom: px2rem(260px);
    .title{
        width:100%;
        height:auto;
        overflow:hidden;
        font-size:18px;
        text-align:center;
        line-height:px2rem(200px);
        color:#000000;
    }

    .resetPass-form{
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
          background-color: #e6f7ff;
          border-bottom: 1px solid #999;
          display: inline-block ;
          width:100%;
          .verifi-code {
            display: inline-block;
            width: px2rem(180px);
            height: px2rem(60px);
            font-size: 12px;
            line-height: px2rem(60px);
            background: #0bd38a;
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
      .step2{
        .step21{
          border-bottom: 1px solid #999;
          display: inline-block ;
          width:100%;
        }
        .step22{
          background-color: #e6f7ff;
          border-bottom: 1px solid #999;
          display: inline-block ;
          width:100%;
        }
      }
    }
}
</style>
