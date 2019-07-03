
export default {
  state () {
    return {
      user:null
    }
  },
  getters: {
    getStorage:(state)=>(key)=> {
      if (!state.user) {
        state.user = JSON.parse(localStorage.getItem(key)).telphone;
      }
      return JSON.parse(localStorage.getItem(key))
    }
  },
  mutations: {
    setStorage (state,value) {
      state.user = value.telphone;
      // console.log('wood');
      // console.log(state.user);
      localStorage.setItem(value.info, JSON.stringify(value));
    },
    removeStorage (state,key) {
      state.user = null;
      localStorage.removeItem(key);
    }

  }
}
