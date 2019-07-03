<template>
    <div class="home">
      <mt-header :title=this.Course_Name fixed class="toubu">
        <!--<router-link to="/home_student" slot="left">-->
          <!--<mt-button icon="back">返回</mt-button>-->
        <!--</router-link>-->
      </mt-header>
      <br>  <br>  <br>

      <div align="left" style="padding: 2%;margin: 5%">
        <!--<input>-->
        <mt-cell title="课程名" value="" ><input  v-model="Course_Name" type="text" style="text-align:right "></mt-cell>
        <mt-cell title="班级名" value="" ><input  v-model="Class_Name" type="text" style="text-align:right "></mt-cell>
        <mt-cell title="班课号" value="" >{{Class_No}}</mt-cell>
        <mt-cell title="所属学期" value="" ><input  v-model="Course_Term" type="text" style="text-align:right "></mt-cell>
        <mt-cell title="课程周数" value="" ><input  v-model="Course_Week" type="text" style="text-align:right "></mt-cell>
        <mt-cell title="学校院系" value="" ><input  v-model="School" type="text" style="text-align:right "></mt-cell>
        <mt-cell title="上课地点" value="" ><input  v-model="Class_Place" type="text" style="text-align:right "></mt-cell>
        <mt-cell title="授课教师" value="" ><input  v-model="Teacher_Name" type="text" style="text-align:right "></mt-cell>
        <mt-cell title="学习要求" value="" ><input  v-model="Course_Require" type="text" style="text-align:right "></mt-cell>
        <mt-cell title="教学进度" value="" ><input  v-model="Course_proceed" type="text" style="text-align:right "></mt-cell>
        <mt-cell title="考试安排" value="" ><input  v-model="Course_Exam" type="text" style="text-align:right "></mt-cell>
        <img src="../assets/images/u288.png" height="2" width="473"/>
        <mt-button @click.native="editClassCourse"  type="primary" class="button" style="background-color:#1890ff;margin: 10px auto; display: block; width: 80%;">修改班课</mt-button>
        <br>  <br> <br>


      </div>
      <mt-tabbar v-model="selected"  fixed class="footer" >
        <mt-tab-item id="成员">
          <router-link :to="{path:'/classCourse_teacher',query:{Class_No:this.Class_No,Course_Name:this.Course_Name}}">
            <p><img slot="icon" src="../assets/images/my.png"></p>
            成员
          </router-link>
        </mt-tab-item>
        <mt-tab-item id="详情">
          <router-link :to="{path:'/changeClassCourseDetail',query:{Class_No:this.Class_No,Course_Name:this.Course_Name}}">
            <p><img slot="icon" src="../assets/images/detail.png"></p>
            详情
          </router-link>
        </mt-tab-item>
      </mt-tabbar>



    </div>


</template>

<script>

export default {
    name : 'joinClass',
    data(){
        return{
          selected:'',
          Class_No:'',
          telphone:'',
          Course_Name:'',
          Class_Name:'',
          Teacher_Name:'',
          School:'',
          Course_Term:'',
          Course_Week:'',
          Class_Place:'',
          Course_Require:'',
          Course_proceed:'',
          Course_Exam:''
        }
    },
    created(){
      this.Class_No=this.$route.query.Class_No;
      this.Course_Name=this.$route.query.Course_Name;
      this.telphone=this.$store.getters.getStorage('info').telphone;
      this.$ajax({
        method:'get',
        url:'/api/classCourse/ClassNoClassCourse',
        params:{
          NOClass:this.Class_No,
        }
      }).then(response=>{
       // console.log(response);
        if(response.status==204){
          console.log('班课号不存在，不能加入班课');
          this.$toast({
            message: '班课号有误',
            duration: 4000
          });
        }else{
          //console.log(response.data[0]);
          this.Course_Name=response.data[0].Course_Name;
          this.Class_Name=response.data[0].Class_Name;
          this.Teacher_Name=response.data[0].Teacher_Name;
          this.School=response.data[0].School;
          this.Course_Term=response.data[0]. Course_Term;
          this.Course_Week=response.data[0].Course_Week;
          this.Class_Place=response.data[0].Class_Place;
          this.Course_Require=response.data[0].Course_Require;
          this.Course_proceed=response.data[0].Course_proceed;
          this.Course_Exam=response.data[0].Course_Exam;
        }

      }).catch(function (err) {
        console.log(err);

      });
    },
    methods:{
      //下拉框
      editClassCourse(){
        this.$messagebox({

          title: '温馨提示',

          message: '你确定要修改当前班课信息吗？',

          showCancelButton: true,

          confirmButtonText:"确定",

          cancelButtonText:"取消"

        }).then(action => {

          if(action == 'confirm'){
            console.log('确定');
            this.$ajax({
              method:'put',
              url:'/api/classCourse/editClassCourse',
              data:{
                telphone:this.telphone,
                Class_Name:this.Class_Name,
                Class_Place:this.Class_Place,
                Teacher_Name:this.Teacher_Name,
                Course_Name:this.Course_Name,
                School:this.School,
                Course_Term:this.Course_Term,
                Course_Week:this.Course_Week,
                Course_Require:this.Course_Require,
                Course_proceed:this.Course_proceed,
                Course_Exam:this.Course_Exam,
                Class_No:this.Class_No,
              }
            }).then(response=>{
              //console.log(response);
              if(response.data==1){
                this.$toast({
                  message: '修改班课成功',
                  duration: 4000
                });
              }
            }).catch(function (err) {
              console.log(err);
            });
          }else{
            console.log('取消');
          }
        });
      }
    },
}

</script>



<style lang="scss" scoped>
  .toubu{
    height: 55px;
    background-color: #096dd9;
    font-size:19px;

  }
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



</style>




