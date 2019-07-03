<template>
  <div class="inputClassN">
      <mt-header title="加入班课" class="toubu">
        <router-link to="/home_student" slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
          <mt-button icon="primary" @click="joinClass" slot="right">下一步</mt-button>
      </mt-header>

    <mt-field label="班课号" placeholder="请输入班课号" v-model="NOClass"></mt-field>



  </div>

</template>

<script>
  export default {
    name : 'inputClassN',
    data(){
      return{
        NOClass:'',
        telphone:''
      }
    },
    created(){
      this.telphone=this.$store.getters.getStorage('info').telphone
    },
    methods:{
      joinClass(){
        console.log('班课号判断');
        if(this.NOClass===''){
          console.log('班课号为空');
          this.$toast({
            message: '班课号不能为空',
            duration: 1000
          });
        }
        console.log(this.NOClass);
        if(this.NOClass!==''){
          //
          this.$ajax({
            method:'post',
            url:'/api/classCourse/inputClassNo',
            data:{
               NOClass:this.NOClass,
            }
          }).then(response=>{
            console.log(response);
            if(response.status==204){
              console.log('//班课号不存在，不能加入班课');
              this.$toast({
                message: '你输入的班课号有误',
                duration: 4000
              });
            }
            if(response.status==201){
                this.$router.push({
                  path:'/joinClass',
                  query:{
                    NOClass:this.NOClass,
                  }
                });
            }
          }).catch(function (err) {
            console.log(err);
          });

        }
      }
    }
  }

</script>



<style scoped lang="scss">

.inputClassN{
    .toubu{
      height: 55px;
      background-color: #096dd9;
    }

}


</style>




