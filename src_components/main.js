import Vue from 'vue'
import App from './App.vue'

/**
 * 1. 引入组件
 * 2. 映射组件标签
 * 3. 使用组件标签
 */
new Vue({
  el:"#app",
  components:{
    App
  },
  template:'<App/>'
})
