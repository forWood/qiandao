<template>
  <div class="changeTelphone">
    <mt-header title="更换手机号" class="toubu" fixed>
      <router-link to="" slot="left">
        <mt-button icon="back" @click.native="$router.back(-1)"></mt-button>
      </router-link>
    </mt-header>
    <br>  <br>  <br> <br> <br>
    <div class="changeTelphone-form">
      <form action="#">
        <div class="step1" >
          <div class="step11" >
            <span style="font-size:13px">手机号</span>
            <input  placeholder="请输入您要更换的手机号" v-model="after_tel" style=" padding:40px 0 0 25px">
          </div>
          <div class="step12" style="padding:20px 0 0 0">
            <table style="white-space: nowrap">
              <tr>
                <th>
                  <span style="font-size:13px">验证码</span>
                </th>
                <th>
                  <input  placeholder="输入验证码" v-model="captcha" style="padding:0 0 0 29px">
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
      </form>
    </div>
    <br><br><br><br>
    <mt-button @click.native="confirmChangeTel"  type="primary" style="margin: 20px auto; display: block; width: 90%;">确定更换手机号</mt-button>
  </div>
</template>

<script>
  import {mapMutations,mapGetters} from 'vuex'
  const REG_TELPHONE= /^((13[0-9])|(14[5,7])|(15[0-3,5-9])|(17[0,3,5-8])|(18[0-9])|166|198|199|(147))\d{8}$/;
  const REG_CODE=/^\w{4}$/;
  export default {
    name:'changeTelphone',
    created() {
      this.before_tel=this.$store.getters.getStorage('info').telphone;
    },
    data() {
      return {
        before_tel:'',
        after_tel:'',
        captcha:'',
        captcha2:'',
        sendCode: false,
        timeOut: 60,
      }
    },
    computed: {
    },
    methods: {
      //缓存管理
      ...mapMutations(['setStorage','removeStorage']),
      getCode () {
        let me = this;
        me.sendCode = true;
        me.createCode();
        if(this.after_tel){
          this.$ajax({
            method:'post',
            url:'/sms/sendsms',
            data:{
              sid:"11bd37dbcf9ab6863ec5e3a9631ebefa",
              token:"792375300e03f02165e79f37608c6f36",
              appid:"c38c00e8590b45d4a55d33c28d48b48f",
              templateid:"462446",
              param:this.captcha2,
              mobile:this.after_tel,
//            uid:"2d92c6132139467b989d087c84a365d8"
            }

          }).then(response=>{
            console.log('测试注册完是否返回数据');
           // console.log(response);
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
        console.log(code);
        this.captcha2= code;//把code值赋给验证码

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
      confirmChangeTel(){
        if(!this.after_tel){
          this.$toast({
            message: '手机号不能为空',
            duration: 1000
          });
          return;
        }
        if(!REG_TELPHONE.test(this.after_tel)){
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
        console.log("如果验证码正确,就可以更换手机号了");
        if(this.captcha2.toLowerCase()==this.captcha.toLowerCase()){
          this.$ajax({
            method:'put',
            url:'/api/users_info/changeTel',
            data:{
              before_tel:this.before_tel,
              after_tel:this.after_tel
            }
          }).then(response=>{
            console.log(response);
            if(response.status==204){
              this.$message.error('该手机号已注册，不能更换成此号码');
              return;
            }
            if(response.status==201){
              this.$toast({
                message: '更换手机号成功，请重新登陆',
                duration: 1000
              });
              console.log("更换手机号成功，返回登陆页面");
              this.$router.push('/');
              this.removeStorage('info');
            }
          }).catch(function (err) {
            console.log(err);
          });
        }else{
          this.$toast({
            message: '你输入的验证码有误',
            duration: 1000
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
    .changeTelphone-form{
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
