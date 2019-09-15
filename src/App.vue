<template>
  <div>
    <img src="./assets/logo.png" height="200" width="200"/>
    <!--  3.使用组件标签  -->
    <HelloWorld/>
  </div>
</template>

<script>
  // 1. 引入组件
  import HelloWorld from './components/HelloWorld.vue'

  export default {
    //2. 映射组件标签
    components:{
      HelloWorld
    }
  }
</script>

<style>

</style>
