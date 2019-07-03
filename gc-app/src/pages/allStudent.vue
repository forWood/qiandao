<template>
    <div class="home">
      <div id="base" class="">


            <mt-header title="全部学生">
              <router-link to="/" slot="left">
                <mt-button icon="back"></mt-button>
              </router-link>

              <router-link to="/" slot="right">
                <mt-button icon="primary">删除</mt-button>
              </router-link>
            </mt-header>
          </div>

      <el-table
        :data="tableData"
        style="width:100%">
        <el-table-column
          prop="No"
          label="学号"
          width="100">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="50">
        </el-table-column>
        <el-table-column
          prop="situation"
          label="出勤情况">
        </el-table-column>
      </el-table>










      </div>

</template>

<script>

export default {
    name : 'joinClass',
    data(){
        return{
          tableData: [{
            No: '180327001',
            name: '小黄',
            situation: '0正常 2请假 1缺勤 0迟到'
          }, {
            No: '180327002',
            name: '小白',
            situation: '0正常 2请假 1缺勤 0迟到'
          }, {
            No: '180327003',
            name: '小绿',
            situation: '0正常 2请假 1缺勤 0迟到'
          }]
        }
    }
}

</script>



<style>




</style>




