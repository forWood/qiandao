<template>
    <div class="home">
      <div id="base" class="">


            <mt-header title="学习要求">
              <router-link to="/" slot="left">
                <mt-button icon="back">创建班课</mt-button>
              </router-link>

              <router-link to="/" slot="right">
                <mt-button icon="primary">完成</mt-button>
              </router-link>
            </mt-header>
          </div>

      <div align="left" style="border: 1px solid gray;border-radius: 5%;padding: 2%;margin: 5%">
        <mt-cell
          title="全部学生"
          to="//www.baidu.com"
          is-link >

        </mt-cell>
        <img src="../assets/images/u288.png" height="2" width="270"/>
        <mt-cell
          title="修改课程"
          to="//www.baidu.com"
          is-link>
        </mt-cell>
        <img src="../assets/images/u288.png" height="2" width="270"/>
        <mt-cell
          title="删除并退出该课"
          to="//www.baidu.com"
          is-link>
        </mt-cell>

      </div>

     <div  style="border: 1px solid gray;border-radius: 2%;padding: 2%;margin: 5% ">
     <!--  <el-select v-model="value" placeholder="value"  size="mini">
         <el-option
           v-for="item in options"
           :key="item.value"
           :label="item.label"
           :value="item.value">
         </el-option>
       </el-select>-->
<select v-model="selected">
  <option>2019-3-17</option>
  <option>2019-3-18</option>
  <option>2019-3-19</option>
</select>




     <span style="float: right;font-size: 2px"> 0正常 2请假 1缺勤 0迟到</span>


      <div class="mysmg" style="padding: 2%">
        <div class="my-left"><img src="../assets/images/u207.png"/> <span class="fonter">缺</span></div>
        <div class="my-right">
          <span style="font-size: 17px">{{mysmg.username}}</span>
          <span style="float: right;color: #7e8c8d">{{mysmg.timeAndAdress}}</span>
          <p style="color: #7e8c8d">打卡时间: {{mysmg.hitCardTime}}</p></div>
      </div>
       <div class="mysmg" style="padding: 2%">
         <div class="my-left"><img src="../assets/images/u207.png"/> <span class="fonter">缺</span></div>
         <div class="my-right">
           <span style="font-size: 17px">{{mysmg.username}}</span>
           <span style="float: right;color: #7e8c8d">{{mysmg.timeAndAdress}}</span>
           <p style="color: #7e8c8d">打卡时间: {{mysmg.hitCardTime}}</p></div>
       </div>
       <div class="mysmg" style="padding: 2%">
         <div class="my-left"><img src="../assets/images/u207.png"/> <span class="fonter">缺</span></div>
         <div class="my-right">
           <span style="font-size: 17px">{{mysmg.username}}</span>
           <span style="float: right;color: #7e8c8d">{{mysmg.timeAndAdress}}</span>
           <p style="color: #7e8c8d">打卡时间: {{mysmg.hitCardTime}}</p></div>
       </div>
    </div>
    </div>
</template>

<script>

export default {
    name : 'arrangeOfCourseCreation',
    data(){
        return{
          mysmg: {username: '小红', hitCardTime: '2019-01-30 --:--:--',timeAndAdress:"9:00~11:00 东三309"},
        selected:2019-3-17

        }
    }
}

</script>



<style scoped lang='scss'>
  .fonter{
    position: relative;
    left: 17px;
    top: -39px;
    z-index: 2;
    font-size: large;
    color: white;

  }
  .mysmg {
    display: flex;
    border-bottom: 1px solid #DCDCDC;
    .my-left {
      position: relative;
      left: 10px;
      top: 5px;
      width: 50px;
      margin: 5px 20px 5px 0;
      img {
        width: 100%;
      }
    }
    .my-right {
      padding: 10px 10px;
      p {
        line-height: 25px;
      }

      span {
        line-height: 25px;
      }
    }
  }



</style>




