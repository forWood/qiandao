<template>
  <section class="menus">
    <p class="user" title="">{{userName}}</p>
    <ul class="aside">
      <li v-for='(m, index) in menus' :key='index'><a href="">{{m.text}}</a></li>
    </ul>
  </section>
</template>
<script>
  import { mapState } from 'vuex'
  export default {
    computed: {
      ...mapState({
        userName: state => state.sideMenu.userName,
        menus: state => state.sideMenu.menus,
      })
    }
  }
</script>

<style lang="stylus">
  .menus{
    position: fixed;
    top: 0;
    right: 0;
    color: #fff;
    width: 120px;
    height: 100%;
    background: #46a6ff;
    z-index: 9;
    .user{
      height: 60px;
      line-height: 60px;
      background: #7dbcea;
      text-align: center;
      width: 60%;
      padding: 0 20%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .aside li{
      height: 50px;
      width: 60%;
      padding: 0 20%;
      cursor: pointer;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      a{
        height: 100%;
        color: #FFFFFF;
        line-height: 50px;
        display: inline-block;
      }
    }
    .aside li:hover{
      background-color: #3E90E3;
    }
  }
</style>
