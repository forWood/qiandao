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

      <div style="padding: 2%;margin: 5% ">
      <el-input
        type="textarea"
        :rows="12"
        placeholder="请填写学习要求，最多3000字"
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
          textarea: ''
        }
    }
}

</script>



<style>




</style>




