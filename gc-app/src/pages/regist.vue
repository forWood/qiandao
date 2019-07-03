<template>
    <div class="regist">
        <div class="title"></div>
        <div class="coordinates-icon">
            <div class="coordinates topAct">
                <img src="../assets/images/logo.png" />
            </div>
            <div class="circle-1-1 circle-show-2"></div>
            <div class="circle-2-2 circle-show-1"></div>
            <div class="circle-3-3 circle-show"></div>
        </div>
        <div class="regist-form">
              <el-form  label-width="75px" :model="ruleForm" :rules="rules" ref="ruleForm" overflow:hidden>
                <div>
                  <el-form-item label="姓名" prop="name" >
                    <el-input v-model="ruleForm.name" placeholder="请输入您的姓名"></el-input>
                  </el-form-item>
                </div>
                <div>
                  <el-form-item label="角色" prop="role" >
                    <el-select v-model="ruleForm.role" placeholder="请选择角色" prop="rule" style="width:100%">
                      <el-option label="学生" value="student"></el-option>
                      <el-option label="教师" value="teacher"></el-option>
                    </el-select>
                  </el-form-item>
                </div>
                <div>
                  <el-form-item label="学/工号" prop="studyNumber">
                    <el-input v-model.number="ruleForm.studyNumber" placeholder="请输入您的学号"></el-input>
                  </el-form-item>
                </div>
                <div>
                  <el-form-item label="手机号" prop="telphone">
                    <el-input v-model.number="ruleForm.telphone" placeholder="请输入您的手机号"></el-input>
                  </el-form-item>
                </div>
                <div>
                  <el-form-item label="验证码" prop="code">
                    <el-col :span="14">
                      <el-form-item prop="code">
                        <el-input v-model="ruleForm.code" placeholder="验证码"></el-input>
                      </el-form-item>
                    </el-col>
                    <el-col :span="10">
                      <el-form-item>
                     <span class="verifi-code" @click="getCode" v-show="!sendCode">
                        获取验证码
                      </span>
                        <span class="verifi-code readonly" v-show="sendCode">
                        {{timeOut}}秒重新获取
                    </span>
                      </el-form-item>
                    </el-col>
                  </el-form-item>
                </div>
               <div>
                 <el-form-item label="密码" prop="pass">
                   <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
                 </el-form-item>
               </div>
               <div>
                 <el-form-item label="确认密码" prop="checkPass">
                   <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
                 </el-form-item>
               </div>
             <div>
               <el-form-item label="" prop="xieyi">
                 <el-checkbox v-model="ruleForm.xieyi">已阅读并同意<a href="/xieyi">《用户协议》</a></el-checkbox>
               </el-form-item>
             </div>
              </el-form>
        </div>
      <div>
        <mt-button @click="regist"  type="primary" style="margin: 10px auto; display: block; width: 220px;background-color:#0bd38a " class="button">注册</mt-button>
      </div>
        <div class="forgets">
            <router-link to=""></router-link>
            <router-link to="/">已有账号?登录>></router-link>
        </div>
    </div>
</template>

<script>

//import { mapActions } from 'vuex'

const REG_TELPHONE= /^((13[0-9])|(14[5,7])|(15[0-3,5-9])|(17[0,3,5-8])|(18[0-9])|166|198|199|(147))\d{8}$/;
const REG_CODE=/^\w{4}$/;
const REG_PASS=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
export default {
    name:'regist',
    created() {
//      this.$emit('public_header',false);
//      this.$emit('public_footer',false);
    },
    data() {
      var checkTelphone = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('手机号不能为空'));
          return;
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('手机号必须为数字'));
          } else {
            if (!REG_TELPHONE.test(value)) {
              callback(new Error('您输入的手机号格式不正确'));
              return;
            } else {
              callback();
            }
          }
        }, 1000);
      };
      var checkCode = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('验证码不能为空'));
          return;
        }
        setTimeout(() => {
            if (!REG_CODE.test(value)) {
              callback(new Error('请输入四位验证码'));
              return;
            } else {
              callback();
            }
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('密码不能为空'));
          return;
        } else {
          if(value.length<8){
            callback(new Error('密码至少8位数'));
            return;
          }
          if (!REG_PASS.test(value)) {
            callback(new Error('至少1个大写字母，1个小写字母和1个数字'));
            return;
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
          return;
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
          return;
        } else {
          callback();
        }
      };
      return {
            sendCode: false,
            timeOut: 60,
            ruleForm: {
              name: '',
              role: '',
              studyNumber: '',
              telphone:'',
              code:'',
              code2:'',
              pass:'',
              checkPass:'',
              xieyi:false
            },
            rules:{
              name: [
                { required: true, message: '姓名不能为空', trigger: 'blur' },
                { min: 2, max: 5, message: '长度在 2 到 5 个字符', trigger: 'blur' }
                ],
              role:[
                {required: true, message: '请选择角色', trigger: 'change' }
              ],
              studyNumber:[
                {required: true, message: '学号不能为空', trigger: 'blur'},
                {type:'number',message: '学号必须为数字', trigger: 'blur'}
              ],
              telphone:[
                {validator:checkTelphone,trigger: 'blur'}
              ],
              code:[
                {validator:checkCode,trigger: 'blur'}
              ],
              pass: [
                { validator:validatePass, trigger: 'blur' }
              ],
              checkPass: [
                { validator:validatePass2, trigger: 'blur' }
              ],
            },
        }
    },
    computed: {
    },
    methods: {
        //下拉框
        choose(){
         // console.log(this.value);
        },
        getCode () {
          this.sendCode = true;
          this.createCode();
          if(this.ruleForm.telphone){
            this.$ajax({
              method:'post',
              url:'/sms/sendsms',
              data:{
                sid:"11bd37dbcf9ab6863ec5e3a9631ebefa",
                token:"792375300e03f02165e79f37608c6f36",
                appid:"c38c00e8590b45d4a55d33c28d48b48f",
                templateid:"459016",
                param:this.ruleForm.code2,
                mobile:this.ruleForm.telphone,
//            uid:"2d92c6132139467b989d087c84a365d8"
              }

            }).then(response=>{
              console.log('测试注册完是否返回数据');
             // console.log(response);
            }).catch(function (err) {
              console.log(err);
            });

          }else{
            this.$message.error('手机号不能为空');
          }



          this.timeOut = 60;
          this.setTimeOut();
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
            this.ruleForm.code2 = code;//把code值赋给验证码
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
        regist () {
//          console.log(this.ruleForm.role);
//          console.log(this.ruleForm.xieyi);
          if (this.ruleForm.xieyi === false) {
            this.$message.error('请阅读《用户协议》并勾选');
            return;
          }
          if(REG_TELPHONE.test(this.ruleForm.telphone)){
            if(this.ruleForm.code.toLowerCase()!=this.ruleForm.code2.toLowerCase()){
              this.$message.error('验证码有误');
              this.ruleForm.code="";
              return;
            }

            this.$ajax({
              method:'post',
              url:'/api/users_info/regist',
              data:{
                name: this.ruleForm.name,
                role: this.ruleForm.role,
                studyNumber: this.ruleForm.studyNumber,
                telphone: this.ruleForm.telphone,
                pass: this.ruleForm.pass,
                checkPass: this.ruleForm.checkPass,
              }
            }).then(response=>{
            //  console.log('测试注册完是否返回数据');
              console.log(response);
              if(response.status == 204){
                this.$message.error('该手机号已注册');
                this.ruleForm.name = '';
                this.ruleForm.role = '';
                this.ruleForm.studyNumber = '';
                this.ruleForm.telphone='';
                this.ruleForm.pass ='';
                this.ruleForm.checkPass='';
              }
              if(response.status== 201){
                this.$toast({
                  message: '注册成功',
                  iconClass: 'icon icon-success',
                  duration: 1000
                });
                this.$router.push('/');
              }
            }).catch(function (err) {
              console.log(err);
            });
          }
          }

        }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/function';
.regist{

    width:100%;
    height: 1000px;
    /*overflow:hidden;*/
    background-color: #e6f7ff;

    /*padding-bottom: px2rem(260px);*/
    .title{
        width:100%;
        height:40px;
        overflow:hidden;
        font-size:18px;
        text-align:center;
        line-height:px2rem(200px);
        color:#fff;
    }
    .coordinates-icon{
        width:px2rem(400px);
        height:px2rem(250px);
        margin:px2rem(50px) auto;
        position:relative;
        .coordinates{
            width:px2rem(150px);
            overflow:hidden;
            position:absolute;
            z-index:8;
            left: 32%;
            img{
                width:100%;
                height:auto;
            }
        }
        .circle-1-1{
            width:100%;
            height:px2rem(150px);
            overflow:hidden;
            border:1px solid rgba(255,255,255,0.5);
            border-radius:100%;
            background-color:#3a3d4a;
            position:absolute;
            bottom:0;
            z-index:1;
            opacity:0;
        }
        .circle-2-2{
            width:px2rem(230px);
            height:px2rem(80px);
            overflow:hidden;
            border:1px solid rgba(255,255,255,0.4);
            border-radius:100%;
            background-color:#4e515c;
            left:75%;
            margin-left:px2rem(-217px);
            bottom:px2rem(35px);
            position:absolute;
            z-index:2;
            opacity:0;
        }
        .circle-3-3{
            width:px2rem(130px);
            height:px2rem(50px);
            overflow:hidden;
            border:1px solid rgba(255,255,255,0.3);
            border-radius:100%;
            background-color:#71747d;
            z-index:3;
            left:35%;
            margin-left:px2rem(-8px);
            bottom:px2rem(50px);
            position:absolute;
            opacity:0;
        }
    }
    .regist-form{
        width:px2rem(700px);
        display: flex;
        justify-content:center;
        overflow:hidden;
        margin:auto;
    }
  .forgets{
    width:px2rem(600px);
    height:auto;
    margin:0 auto;
    >a{
      color:#000000;
      opacity:0.5;
      font-size:16px;
      +a{
        float:right;
      }
    }
  }
  .verifi-code {
    display: inline-block;
    width: px2rem(200px);
    height: px2rem(60px);
    line-height: px2rem(60px);
    background: #0bd38a;
    color: #fff;
    text-align: center;
    padding-left: px2rem(20px);
    border-radius: 7%
  }
  .readonly {
    background: #eee;
    color: #555;
  }

}
.topAct{
  animation:topAct 3s ease-in-out infinite;
  -webkit-animation:topAct 3s ease-in-out infinite;
  -moz-animation:topAct 3s ease-in-out infinite;
  -o-animation:topAct 3s ease-in-out infinite;
  -ms-animation:topAct 3s ease-in-out infinite;
}
@keyframes topAct
{
  0% {top:px2rem(-100px);}
  50% {top:px2rem(-30px);}
  100%{top:px2rem(-100px);}
}
@-webkit-keyframes topAct
{
  0% {top:px2rem(-100px);}
  50% {top:px2rem(-30px);}
  100%{top:px2rem(-100px);}
}
@-moz-keyframes topAct
{
  0% {top:px2rem(-100px);}
  50% {top:px2rem(-30px);}
  100%{top:px2rem(-100px);}
}
.circle-show{
  animation:circleShow 3s ease-in-out infinite 1s;
  -webkit-animation:circleShow 3s ease-in-out infinite 1s;
  -moz-animation:circleShow 3s ease-in-out infinite 1s;
  -ms-animation:circleShow 3s ease-in-out infinite 1s;
  -o-animation:circleShow 3s ease-in-out infinite 1s;
}
@keyframes circleShow
{
  0% {opacity:0;}
  50% {opacity:1;}
  100%{opacity:0;}
}
@-webkit-keyframes circleShow
{
  0% {opacity:0;}
  50% {opacity:1;}
  100%{opacity:0;}
}
@-moz-keyframes circleShow
{
  0% {opacity:0;}
  50% {opacity:1;}
  100%{opacity:0;}
}

.circle-show-1{
  animation:circleShow1 3s ease-in-out infinite 1.2s;
  -webkit-animation:circleShow1 3s ease-in-out infinite 1.2s;
  -moz-animation:circleShow1 3s ease-in-out infinite 1.2s;
  -ms-animation:circleShow1 3s ease-in-out infinite 1.2s;
  -o-animation:circleShow1 3s ease-in-out infinite 1.2s;
}
@keyframes circleShow1
{
  0% {opacity:0;}
  50% {opacity:1;}
  100%{opacity:0;}
}
@-webkit-keyframes circleShow1
{
  0% {opacity:0;}
  50% {opacity:1;}
  100%{opacity:0;}
}
@-moz-keyframes circleShow1
{
  0% {opacity:0;}
  50% {opacity:1;}
  100%{opacity:0;}
}

.circle-show-2{
  animation:circleShow2 3s ease-in-out infinite 1.4s;
  -webkit-animation:circleShow2 3s ease-in-out infinite 1.4s;
  -moz-animation:circleShow2 3s ease-in-out infinite 1.4s;
  -ms-animation:circleShow2 3s ease-in-out infinite 1.4s;
  -o-animation:circleShow2 3s ease-in-out infinite 1.4s;
}
@keyframes circleShow2
{
  0% {opacity:0;}
  50% {opacity:1;}
  100%{opacity:0;}
}
@-webkit-keyframes circleShow2
{
  0% {opacity:0;}
  50% {opacity:1;}
  100%{opacity:0;}
}
@-moz-keyframes circleShow2
{
  0% {opacity:0;}
  50% {opacity:1;}
  100%{opacity:0;}
}
</style>
