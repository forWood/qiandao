<template>
    <div class="home">
            <mt-header title="课程信息">
              <router-link to="/" slot="left">
                <mt-button icon="back"></mt-button>
              </router-link>
            </mt-header>


      <div align="left" style="padding: 2%;margin: 5%">
        <mt-cell title="课程名" value="" >智能技术xxx班</mt-cell>
        <img src="../assets/images/u288.png" height="2" width="473"/>
        <mt-cell title="老师" value="" >池芝标</mt-cell>
        <img src="../assets/images/u288.png" height="2" width="473"/>
        <mt-cell title="学期" value="" >2018-2019学年下学期</mt-cell>
        <img src="../assets/images/u288.png" height="2" width="473"/>
        <mt-cell title="上课周数" value="" >1-18周</mt-cell>
        <img src="../assets/images/u288.png" height="2" width="473"/>
        <mt-cell title="时间" value="" >    <select name="time" size="1" > <option value="1">星期一9:00-11:00 </option>   <option value="1">星期一9:00-11:00 </option> </select>     </mt-cell>
        <img src="../assets/images/u288.png" height="2" width="473"/>
        <mt-cell title="地点" value="" ><select name="time" size="1" > <option value="1">东三100 </option>   <option value="1">数计三号楼204 </option> </select> </mt-cell>
        <img src="../assets/images/u288.png" height="2" width="473"/>
        <mt-cell title="学校" value="" >福州大学</mt-cell>
        <img src="../assets/images/u288.png" height="2" width="473"/>
        <mt-cell title="院系" value="" >数学与计算机科学学院</mt-cell>


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



<style lang="scss" scoped>
  .fonter{
    font-family: 'Arial Normal', 'Arial';
    font-weight: 400;
    font-style: normal;
    font-size: 15px;
    color: #333333;
    text-align: center;
    line-height: normal;

  }



</style>




