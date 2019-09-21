<template>
  <div class="container">
    <Search/>
    <UserMain/>
  </div>
</template>

<script>
  import Search from './components/Search'
  import Main from  './components/Main'

  export default {
    components:{
      Search,
      UserMain:Main //因为Main标签是html的关键字，所以需要别名
    }
  }
</script>

<style scoped>

</style>
