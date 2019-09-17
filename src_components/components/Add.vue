<template>
  <div class="col-md-4">
    <form class="form-horizontal">
      <div class="form-group">
        <label>用户名</label>
        <input type="text" class="form-control" placeholder="用户名" v-model="name">
      </div>
      <div class="form-group">
        <label>评论内容</label>
        <textarea class="form-control" rows="6" placeholder="评论内容" v-model="content">></textarea>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <!--    绑定点击事件      -->
          <button type="button" class="btn btn-default pull-right" @click="add">提交</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    props:{
      addComment:{
        type:Function,//参数类型为函数
        required:true//参数为必填
      }
    },
    data(){
      return {
        name:"",
        content:""
      }
    },
    methods:{
      add(){
        //1. 校验数据合法性
        const name = this.name.trim();
        const content = this.content.trim();
        if(!name || !content){
          alert("不能为空！");
          return false;
        }
        //2. 根据输入的数据，封装对象
        const comment = {
          name,
          content
        }
        //3. 添加到comments中
        this.addComment(comment);
        //4. 清除输入框
        this.name = "";
        this.content = "";
      }
    }
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
