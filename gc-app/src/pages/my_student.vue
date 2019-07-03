<template>
  <div class="my">
    <br>
    <div class="mysmg">
      <div class="one"><img class="" src="../assets/images/my.png" style="width: 40px;height:40px;"/></div>
      <div class="two"><span>{{this.info.telphone}}</span></div>
      <div class="three"><span>{{this.info.role}}</span></div>
    </div>
    <div align="left" style="border: 2px solid gray;border-radius: 5%;padding: 5px 5px 10px 0;margin: 10%;" class="me">
      <mt-cell
        title="个人信息"
        to="/privateInformation"
        is-link  class="t">
      </mt-cell>
      <mt-cell
        title="修改手机号"
        to="/resetTelphone"
        is-link class="t">
      </mt-cell>
      <mt-cell
        title="修改密码"
        to="/changePass"
        is-link class="t">
      </mt-cell>
    </div>
    <div align="left" style="border: 2px solid gray;border-radius: 5%;padding: 5px 5px 10px 0;margin: 10%" class="me">
      <mt-cell
        title="用户反馈"
        to="/fankui"
        is-link class="t">
      </mt-cell>
      <mt-cell
        title="关于我们"
        to="/aboutUs"
        is-link class="t">
      </mt-cell>
    </div>
      <mt-button @click.native="handleClick"  type="primary" class="button" style="background-color:#1890ff;margin: 20px auto; display: block; width: 70%">退出当前账号</mt-button>
    <br>  <br> <br>
    <mt-tabbar v-model="selected"  fixed class="footer" >

      <mt-tab-item id="班课">
        <router-link to="/home_student">
          <p><img slot="icon" src="../assets/images/finger.png"></p>
          班课
        </router-link>
      </mt-tab-item>
      <mt-tab-item id="我的">
        <router-link to="/my_student">
          <p><img slot="icon" src="../assets/images/my.png"></p>
          我的
        </router-link>
      </mt-tab-item>

    </mt-tabbar>

  </div>

</template>
<script>
  import {mapMutations,mapGetters} from 'vuex'
  export default {
    name: 'my_student',
    created() {
       this.info=this.$store.getters.getStorage('info')
    },
    data() {
      return {
        selected: '',
        name:'',
        role:'',
        info:[]
      }
    },
    methods:{
      //缓存管理
      ...mapMutations(['setStorage','removeStorage']),
      handleClick(){
        console.log("退出当前账号");
        this.$messagebox({

          title: '温馨提示',

          message: '你确定要退出当前账号吗？',

          showCancelButton: true,

          confirmButtonText:"确定",

          cancelButtonText:"取消"

        }).then(action => {

          if(action == 'confirm'){
            console.log('确定');
            this.removeStorage('info');
            this.$router.push('/');
          }else{

            console.log('取消');

          }

        });
      }
    }
  }
</script>
<style lang="scss" scoped>
  .my{
    width:100%;
    height:100%;
    .footer {
      background-color:#096dd9;
      p {
        img{height:20px;width: 20px}
        line-height: 20px;
        font-size: 20px;
        color: #fff;
        margin-bottom: 2px;
      }
    }
    .me{
      .t{
        border-bottom: 1px solid #999;
        display: inline-block ;
        width:100%;
        color:black;
      }
    }
  }
  .mysmg{
    text-align: center;
    .two{
      font-size: 15px;
    }
  }

</style>
