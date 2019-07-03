<template>
  <div id="app">
    <v-alert v-show="showAlert"></v-alert>
    <!--<app-menu></app-menu>-->
    <div class="page">
      <!--<app-header v-if="header_show"></app-header>-->
      <!--<keep-alive><router-view v-on:public_header="public_header" v-on:public_footer="public_footer"></router-view></keep-alive>-->
      <!--<app-footer v-if="footer_show"></app-footer>-->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import alert from '@/components/alert'
import Header from './components/header'
import Footer from './components/footer'
import sideMenu from './components/sideMenu.vue'
export default {
  name: 'App',
  data(){
    return {
//      header_show:true,
//      footer_show:true,
    }
  },

  components: {
		'v-alert': alert,
    'app-header':Header,
    'app-menu': sideMenu,
    'app-footer':Footer,
  },
  computed: {
    ...mapGetters([
          'showAlert'
      ])
  },
  methods:{
    //是否显示头部
//     public_header:function (bool) {
//      console.log(bool);
//      this.header_show = bool;
//    },
    //是否显示底部
//    public_footer:function (bool) {
//      this.footer_show = bool;
//    }
  }
}
</script>

<style>
  /*#app{*/
    /*overflow: hidden;*/
  /*}*/
  /*.page{*/
    /*position: relative;*/
    /*z-index: 99;*/
    /*transition: all 0.5s;*/
  /*}*/
  /*.toggle{*/
    /*transform: translateX(-120px);*/
  /*}*/
</style>
