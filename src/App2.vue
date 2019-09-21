<template>
<div>
  <div v-if="!reportNmae">loading</div>
  <div v-else>最受欢迎的Report是<a :href="reportUrl">{{reportNmae}}</a></div>
</div>
</template>

<script>
  import axios from 'axios'//哪里使用哪里引入

  export default {
    data(){
      return {
        reportNmae:"",
        reportUrl:""
      }
    },
    mounted () {
      const url ="https://api.github.com/search/repositories?q=java&sort=sta";
      // VueResource方式
      // this.$http.get(url).then(response=>{
      //     const data = response.data;
      //     this.reportNmae = data.items[0].full_name;
      //     this.reportUrl = data.items[0].html_url;
      //   },
      // response=>{
      //   alert("请求失败！")
      // });
      //axios方式
      this.$http.get(url).then(response=> {
          const data = response.data;
          this.reportNmae = data.items[0].full_name;
          this.reportUrl = data.items[0].html_url;
      }).catch(error=>{
        alert(error)
      });
    }
  }
</script>

<style scoped>

</style>
