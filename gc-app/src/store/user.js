import axios from 'axios'
export default {
  state :{
      user:null,
      info:[],
      count: 4

  },
  // getters: {
  //   getAppInfo(state){
  //     console.log('getters层');
  //     console.log('2222');
  //     console.log(state.info);
  //     console.log(state.count);
  //     console.log('222222');
  //     return state.info;
  //   }
  // },
  mutations: {
    getInfo(state,value){
      console.log('mutations层');
      state.info=value;
      state.count=5;
      // console.log(state.info);
    }
  },
  actions:{
    /////获得个人信息/////
    getInfo(context,data){
      return new Promise((resolve) => {
        axios({
          method: 'post',
          url: '/api/users_info/appInfo',
          data: {
            telphone: data,
          }
        }).then(response => {
          context.commit('getInfo', response);
        }).catch(function (err) {
          console.log(err);
        });
        resolve();
      })
    }
  }
}
