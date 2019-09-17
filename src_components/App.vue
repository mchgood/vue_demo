<template>
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对Vue的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
    <!--   组件间传递函数   -->
      <Add :addComment="addComment"/>

      <!--   组件间传递参数，给list组件传递 comments 参数  -->
      <List :comments="comments" :delComment="delComment"/>
    </div>
  </div>
</template>

<script>
  import Add from './components/Add.vue'
  import List from './components/List.vue'

  export default {
    data(){
      return {
        comments:[//数据在哪个组件，更新数据的行为(方法)就应该定义在哪个组件
          {name:"Bob",content:"Vue 不错"},
          {name:"Tom",content:"Vue 很好"},
          {name:"Cat",content:"Vue 简单"}
        ]
      }
    },
    components:{
      Add,
      List
    },
    methods:{
      addComment(comment){
        this.comments.unshift(comment);//添加comment在数组第一位
      },
      delComment(index){
        debugger;
        this.comments.splice(index,1);//根据下标删除
      }
    }
  }
</script>

<style scoped>

</style>
