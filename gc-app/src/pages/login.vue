<template>
    <div class="login">
        <div class="title"></div>
        <div class="coordinates-icon">
            <div class="coordinates topAct">
                <img src="../assets/images/logo.png" />
            </div>
            <div class="circle-1-1 circle-show-2"></div>
            <div class="circle-2-2 circle-show-1"></div>
            <div class="circle-3-3 circle-show"></div>
        </div>
        <div class="login-form">
            <form action="#">
              <div>
                <input type="text" name="telphone" class="qxs-ic_user qxs-icon"  placeholder="请输入您的手机号" v-model="info.telphone">
              </div>
              <div>
                <input type="text" name="password" class="qxs-ic_password qxs-icon"  placeholder="请输入您的密码" v-model="pass" >
              </div>
                <div>
                  <el-radio v-model="info.role" label="student" style="float:left">我是学生</el-radio>
                  <el-radio v-model="info.role" label="teacher" style="float:right">我是教师</el-radio>
                </div>
                <div class="login-btn" @click="login" style="margin:85px 0px 0px 0;">登录</div>
            </form>
        </div>
        <div class="forgets" >
            <router-link to="/regist">注册账号</router-link>
            <router-link to="/resetPass">忘记密码?</router-link>
        </div>
    </div>
</template>

<script>
import {mapMutations} from 'vuex'
const REG_TELPHONE= /^((13[0-9])|(14[5,7])|(15[0-3,5-9])|(17[0,3,5-8])|(18[0-9])|166|198|199|(147))\d{8}$/;
const REG_PASS=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
export default {
    name:'login',
    data() {
        return {
            pass: '',
            info:{
              telphone:'',
              role:"student",
              info:'info'
            }

        }
    },
    methods: {
        //缓存管理
        ...mapMutations(['setStorage']),
        // 用户登录
        login() {
        //  console.log(this.info.role);
            if(!this.info.telphone || !this.pass){
              this.$toast({
                message: '账号或密码不能为空',
                duration: 1000
              });
                return;
            }
           if(!REG_TELPHONE.test(this.info.telphone)){
             this.$toast({
               message: '手机号格式错误',
               duration: 1000
             });
           }
            this.$ajax({
              method:'post',
              url:'/api/users_info/appLogin',
              data:{
                telphone:this.info.telphone,
                pass:this.pass,
                role:this.info.role
              }
            }).then(response=>{
              console.log(response);
              if(response.status==204){
                this.$toast({
                  message: '你输入的账号有误',
                  duration: 1000
                });
              }
              if(response.data==2){
                this.$toast({
                  message: '密码或角色有误',
                  duration: 1000
                });
              }
              if((this.info.role=='student')&&(response.data==3)){
                this.$toast({
                  message: '学生登陆成功',
                  iconClass: 'icon icon-success',
                  duration: 1000
                });
                this.setStorage(this.info);
                this.$router.push('/home_student');
              }
              if((this.info.role=='teacher')&&(response.data==3)){
                this.$toast({
                  message: '教师登陆成功',
                  iconClass: 'icon icon-success',
                  duration: 1000
                });
                this.setStorage(this.info);
                this.$router.push('/home_teacher');
              }
            }).catch(function (err) {
              console.log(err);
            });
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/function';
.login{
    width:100%;
    height: 800px;
    overflow:hidden;
    background-color:#e6f7ff;
    padding-bottom: px2rem(260px);
    .title{
        width:100%;
        height:auto;
        overflow:hidden;
        font-size:18px;
        text-align:center;
        height:px2rem(200px);
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
    .login-form{
        width:px2rem(600px);
        height:auto;
        margin:0 auto;

      .qxs-ic_user {
        background: url("../assets/images/user.png") no-repeat;
        background-size: 15px 15px;
        background-position:3px 90px;
        padding-top: 30%;
        padding-left: 10%;
        padding-right: 10%;
        border-bottom: 1px solid #999;
        display: inline-block ;
        width:100%;
      }
      .qxs-ic_password {
        background: url("../assets/images/pass.png") no-repeat;
        background-size: 15px 15px;
        background-position:3px 45px;
        margin-bottom: 20px;
        padding-top: 15%;
        padding-left: 10%;
        padding-right: 10%;
        border-bottom: 1px solid #999;
        display: inline-block;
        width:100%;

      }
        .common-div{
            width:100%;
            height:px2rem(80px);
            overflow:hidden;
            border-radius:4px;
            margin-bottom: px2rem(50px);
            >.common-icon{
                color: #ffffff;
                float:left;
                width:px2rem(40px);
                height:px2rem(40px);
                line-height: px2rem(40px);
                font-size: px2rem(40px);
                overflow:hidden;
                margin:px2rem(20px);
                text-align: center;
                img{
                    width:100%;
                    height:auto;
                }
            }
            >input{
                float:left;
                line-height: px2rem(80px);
                background-color:transparent;
                border:none;
                outline:none;
                font-size:16px;
                color:#fff;
            }
        }
        .user-name,.user-pasw{
            background-color:rgba(255,255,255,0.1);
        }
        .login-btn{
            background-color:#0bd38a;
            color:#fff;
            font-size:20px;
            text-align:center;
            height:px2rem(100px);
            line-height:px2rem(100px);
            margin-bottom: px2rem(50px);
            border-radius:4px;
        }
    }
    .forgets{
        width:px2rem(600px);
        height:auto;
        margin:20px auto;
        >a{
            color:#000000;
            opacity:0.5;
            font-size:16px;
            +a{
                float:right;
            }
        }
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
