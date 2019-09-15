<template>
  <div class="col-md-8">
    <h3 class="reply">评论回复：</h3>
    <h2 style='display: none'>暂无评论，点击左侧添加评论！！！</h2>
    <ul class="list-group">
      <!--   循环Item标签，给Item组件传递参数comment   -->
      <Item v-for="(comment,index) in comments" :key="index" :comment="comment"/>
    </ul>
  </div>
</template>

<script>
  import Item from './Item.vue'

  export default {
    components:{Item},
    props:['comments']//接收组件间传递的参数
  }
</script>

<style scoped>
  .reply {
    margin-top: 0px;
  }

  li {
    transition: .5s;
    overflow: hidden;
  }

  .handle {
    width: 40px;
    border: 1px solid #ccc;
    background: #fff;
    position: absolute;
    right: 10px;
    top: 1px;
    text-align: center;
  }

  .handle a {
    display: block;
    text-decoration: none;
  }

  .list-group-item .centence {
    padding: 0px 50px;
  }

  .user {
    font-size: 22px;
  }
</style>
