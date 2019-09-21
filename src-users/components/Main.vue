<template>
  <div class="row">
    <h2 v-if="viewStatus==-1">请输入用户名搜索</h2>
    <h2 v-if="viewStatus==0">Loading...</h2>
    <h2 v-if="errorMsg">{{errorMsg}}</h2>
    <div class="card" v-for="(report,index) in reports" :key="index">
      <a :href="report.html_url" target="_blank">
        <img :src="report.avatar_url" style='width: 100px'/>
      </a>
      <p class="card-text">{{report.name}}</p>
    </div>
  </div>
</template>

<script>
  import PubSub from 'pubsub-js'
  import axios from 'axios'

  export default {
    data(){
      return {
        viewStatus:-1,
        errorMsg:"",
        reports:[]  //[{}]
      }
    },
    mounted () {
      //接收消息
      PubSub.subscribe("search",(msg,serachName)=>{
        const url = 'https://api.github.com/search/users?q='+serachName;
        //发送中
        this.viewStatus=0;
        this.reports = [];
        axios.get(url).then(response=>{
          console.log(response)
         const data = response.data.items;
         console.log(data)
         this.reports = data;
        }).catch(error=>{

        }).finally(()=>{
          this.viewStatus=1;
        })
      })
    }
  }
</script>

<style scoped>
  .card {
    float: left;
    width: 33.333%;
    padding: .75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
  }

  .card > img {
    margin-bottom: .75rem;
    border-radius: 100px;
  }

  .card-text {
    font-size: 85%;
  }

</style>
