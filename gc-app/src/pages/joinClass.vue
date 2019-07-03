<template>
    <div class="joinClass">
        <mt-header title="加入班课" class="toubu">
          <router-link to="/inputClassN" slot="left">
            <mt-button icon="back">返回</mt-button>
          </router-link>
        </mt-header>
            <div class="b" align="center" style="margin: 5%">
              <div >
                <img src="../assets/images/u207.png" height="70" width="70"/>
                <div style="position:relative ;left: 0px;top:-45px;z-index: 2;font-size: large">{{Course_Name}}</div>
              </div>
              <div style="" class="fonter">
                {{Class_Name}}
              </div>
            </div>
          <div align="left" style="border: 1px solid gray;border-radius: 5%;padding: 2%;margin: 5%">
              <mt-cell title="老师" value="" >{{Teacher_Name}}</mt-cell>
            <!--<img src="../assets/images/u288.png" height="2" width="473"/>-->
            <mt-cell title="班课号" value="" v-model="NOClass"></mt-cell>
            <!--<img src="../assets/images/u288.png" height="2" width="473"/>-->
             <mt-cell title="学校" value="" v-model="School"></mt-cell>
          </div>
      <mt-button @click.native="join_class"  type="primary" style="margin: 20px auto; display: block; width: 90%;" class="button">加入班课</mt-button>
      </div>
</template>

<script>

export default {
    name : 'joinClass',
    data(){
        return{
          NOClass:'',
          telphone:'',
          Course_Name:'',
          Class_Name:'',
          Teacher_Name:'',
          School:''
        }
    },
    created(){
      this.NOClass=this.$route.query.NOClass;
      this.telphone=this.$store.getters.getStorage('info').telphone;
      this.$ajax({
        method:'get',
        url:'/api/classCourse/ClassNoClassCourse',
        params:{
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
        }else{
          console.log(response.data[0]);
          this.Course_Name=response.data[0].Course_Name;
          this.Class_Name=response.data[0].Class_Name;
          this.Teacher_Name=response.data[0].Teacher_Name;
          this.School=response.data[0].School;
        }

      }).catch(function (err) {
        console.log(err);

      });
    },
    methods:{
      join_class(){
        console.log('加入班课');
        this.$ajax({
          method:'post',
          url:'/api/classCourse/joinClassCourse',
          data:{
            NOClass:this.NOClass,
            telphone:this.telphone,
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

          if(response.status==200){
            this.$messagebox({
              message: '加入成功',
              confirmButtonText:"查看课程",

            }).then(action => {

              if(action == 'confirm'){
                console.log('查看课程');
                this.$router.push('/home_student');
              }else{
                console.log('取消');
              }

            });
          }
          if(response.status==201){
            this.$toast({
              message: '无需重复加入班课',
              duration: 4000
            });
//              this.$router.push('/home_teacher');
          }
        }).catch(function (err) {
          console.log(err);
        });

      }
    }
}

</script>

<style scoped lang='scss'>
  .joinClass{
    .toubu{
      height: 55px;
      background-color: #096dd9;
    }
    .fonter{
      font-family: 'Arial Normal', 'Arial';
      font-weight: 400;
      font-style: normal;
      font-size: 13px;
      color: #333333;
      text-align: center;
      line-height: normal;

    }
    .button{
      background-color: #096dd9;
    }
  }
</style>




