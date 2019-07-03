<template>
  <header class="head" id="app-header">
    <a href="javascript: void(0)"><img class="add" @click="goHome" src="../assets/images/add.png"/></a>
  </header>
</template>
<script>
  import { mapState, mapMutations } from 'vuex'
  export default {
    name: 'app-header', // Do not use built-in or reserved HTML elements as component id
    data () {
      return {

      }
    },
    computed: {
      ...mapState({
//        searchNews: state => state.SelectStore.searchNews
      })
    },
    watch: {
//      searchContent (curVal, oldVal) {
//        if (curVal === '') {
//          this.$refs.newsItem.map((item) => {
//            item.style.display = 'block'
//            item.className = ''
//          })
//        }
//        if (curVal !== '') {
//          this.$refs.title.map((item) => {
//            if (item.innerText.match(curVal)) {
//              item.parentNode.parentNode.parentNode.className = 'hightColor'
//            } else {
//              item.parentNode.parentNode.parentNode.style.display = 'none'
//            }
//          })
//        }
//      }
    },
    methods: {
//      setClass (classname) {
//        return classname
//      },
//      setSrc (src) {
//        return src
//      },
//      searchNewsBtn () {
//        alert('搜索完成')
//      },
//      goNews () {
//        this.closeSearch()
//        this.clearSearchContent()
//      },
      goHome () {
        this.$router.push('/createClass')
      },
//      clearSearchContent () {
//        this.searchContent = ''
//      },
//      ...mapMutations([
//        'toggleMenu', 'openSearch', 'closeSearch'
//      ])
    }
  }
</script>
<style lang="stylus">
  .head{
    height: 60px;
    background: #096dd9;
    position: relative;
    img{
      height: 50px;
      position: absolute;
      top: 5px;
      right: 20%;
      cursor: pointer;
    }
    .add{
      height: 20px;
      top: 20px;
      left: 10px;
    }
    .baidu{
      right: 30%;
    }
    .searchBtn{
      cursor: pointer;
      color: #FFFFFF;
      position: absolute;
      top: 18px;
      right: 15%;
    }
    .aside{
      height: 60px;
      width: 60px;
      cursor: pointer;
      position: absolute;
      top: 0;
      right: 0;
      padding-top: 1px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      .line{
        height: 1px;
        width: 25px;
        background: #fff;
        transition: all 0.5s;
      }
      .line:nth-of-type(2){
        margin: 6px 0;
      }
    }
    .closeMenu{
      .line:first-child{
        transform: rotate(45deg);
      }
      .line:nth-child(2){
        display: none;
      }
      .line:last-child{
        transform: rotate(-45deg);
      }
    }
    .searchPage{
      display: none;
      position: fixed;
      height: 100%;
      width: 100%;
      overflow: scroll;
      background: #fff;
      z-index: 999;
      .header{
        height: 60px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 0 2%;
        background: #262627;
        .search{
          height: 40px;
          width: 85%;
          border: 1px solid #eee;
          display: flex;
          justify-content: space-between;
          align-items: center;
          input{
            height: 40px;
            width: 82%;
            color: #FFFFFF;
            text-indent: 10px;
            background-color: #262627;
            outline: none;
          }
          .icon{
            color: #FFFFFF;
            margin-right: 5%;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
          }
        }
        .close{
          height: 30px;
          width: 30px;
          color: #FFFFFF;
        }
      }
    }
    .content{
      overflow: hidden;
      background-color: #FFFFFF;
      .today{
        height: 25px;
        background: #E3E4EE;
        line-height: 25px;
        text-indent: 15px;
        font-size: 14px;
      }
      .news li{
        font-size: 16px;
        margin: 15px;
        p{
          width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        i{
          font-size: 16px;
          font-style: normal;
          margin-right: 10px;
        }
        i.isTop3{
          color: red;
        }
        span{
          width: 90%;
          display: inline-block;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
        }
      }
    }
    .hightColor{
      color: #FFFFFF;
      background-color: #EEEEEE;
    }
  }
</style>
