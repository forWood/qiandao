<template>
  <div id="app-footer">
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="banke">
        <img slot="icon" src="../assets/images/finger.png">
        班课
      </mt-tab-item>
      <mt-tab-item id="my">
        <img slot="icon" src="../assets/images/my.png">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
  export default {
    name: 'app-footer',
    data () {
      return {
        selected:''
      }
    }
  }
</script>
