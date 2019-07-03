<template>
    <div class="joinClass">
      <mt-header title="加入班课" class="toubu">
        <router-link to="/" slot="left">
          <mt-button icon="back"></mt-button>
          </router-link>
       </mt-header>
      <br>
      <div align="left" style="border: 1px solid gray;border-radius: 5%;padding: 10px 5px 10px 0;margin: 5%" class="content1">
        <mt-cell
          title="签到"
          to="//www.baidu.com"
          is-link >
        </mt-cell>
        <img src="../assets/images/u288.png" height="2" width="100%" class="image"/>
        <mt-cell
          title="签退"
          to="//www.baidu.com"
          is-link >
        </mt-cell>
        <img src="../assets/images/u288.png" height="2" width="100%" class="image"/>
        <mt-cell
          title="请假"
          to="//www.baidu.com"
          is-link>
        </mt-cell>
        <img src="../assets/images/u288.png" height="2" width="100%" class="image"/>
        <mt-cell
          title="签到记录"
          to="//www.baidu.com"
          is-link>
        </mt-cell>
      </div>
      <br>
      <div align="left" style="border: 1px solid gray;border-radius: 5%;padding: 10px 5px 10px 0;margin: 5% " class="content2">
        <mt-cell
          title="课程信息"
          to="//www.baidu.com"
          is-link>
        </mt-cell>
        <img src="../assets/images/u288.png" height="2" width="100%" class="image"/>
        <mt-cell
          title="学习要求"
          to="//www.baidu.com"
          is-link>
        </mt-cell>
        <img src="../assets/images/u288.png" height="2" width="100%" class="image"/>
        <mt-cell
          title="退出班课"
          to="//www.baidu.com"
          is-link>
        </mt-cell>
      </div>
    </div>

</template>

<script>

export default {
    name : 'joinClass',
    data(){
        return{

        }
    },
    created(){

    }
}

</script>



<style scoped lang='scss'>
.joinClass {
  .toubu {
    height: 55px;
    background-color: #096dd9;
  }
}

</style>




