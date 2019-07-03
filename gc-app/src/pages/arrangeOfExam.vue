<template>
    <div class="home">


      <mt-header title="考试安排">
        <router-link to="/" slot="left">
          <mt-button icon="back">创建班课</mt-button>
        </router-link>

        <router-link to="/" slot="right">
          <mt-button icon="primary">完成</mt-button>
        </router-link>
      </mt-header>

      <div style="padding: 2%;margin: 5% ">
        <el-input
          type="textarea"
          :rows="12"
          placeholder="请填写考试安排，最多3000字"
          v-model="textarea">
        </el-input>
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



<style>




</style>




