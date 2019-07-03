// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import axios from 'axios'
import qs from 'qs'
import VueResource from 'vue-resource'
Vue.use(VueResource);
import 'ant-design-vue/dist/antd.css'
import Antd from 'ant-design-vue'
Vue.use(Antd);
import 'mint-ui/lib/style.css'
import MintUI from 'mint-ui'
Vue.use(MintUI);
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';
Vue.use(ElementUI);

import { InfiniteScroll } from 'mint-ui';
Vue.use(InfiniteScroll);



Vue.config.productionTip = false;
Vue.config.debug = true;
Vue.prototype.$ajax = axios;
Vue.prototype.$qs = qs;


//基本路径
Vue.prototype.baseURL = "http://127.0.0.1:3000/api";

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  VueResource,
  components: { App },
  template: '<App/>'
})
