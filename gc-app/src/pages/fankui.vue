<template>
  <div class="fankui">
    <mt-header title="用户反馈" class="toubu" fixed>
        <mt-button icon="back" @click.native="$router.back(-1)" slot="left"></mt-button>
    </mt-header>
    <br>  <br>  <br> <br> <br>
    <div style="padding: 2%;margin: 5% ;color: black">
      <el-input
        type="textarea"
        :rows="12"
        placeholder="请填写你需要反馈的内容"
        v-model="textarea">
      </el-input>
    </div>

    <br>
    <mt-button @click.native="submit"  type="primary" style="margin: 20px auto; display: block; width: 90%;">提交</mt-button>
  </div>

</template>

<script>
  export default {
    name: 'fankui',
    created() {
      this.role=this.$store.getters.getStorage('info').role;
      this.telphone=this.$store.getters.getStorage('info').telphone

    },
    data() {
      return {
        textarea:'',
        role:'',
        telphone:''
      }
    },
    methods: {
      submit() {
//        console.log("用户反馈");
        //console.log(this.textarea);
//        console.log('djfkjad');
        this.$ajax({
          method:'post',
          url:'/api/users_info/save_feedback',
          data:{
            content:this.textarea,
            role:this.role,
            telphone:this.telphone,
          }
        }).then(response=>{
          this.$toast({
            message: '提交成功',
            duration: 1000
          });
          if(this.role=='student'){
            this.$router.push('/my_student');
          }else{
            this.$router.push('/my_teacher');
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
  .fankui{
    .toubu{
      height: 55px;
      background-color: #096dd9;
    }
  }
</style>
