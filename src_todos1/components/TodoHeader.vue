<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认" @keyup.enter="addItem" v-model="titile"/>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        titile:''
      }
    },
    props:{
      addTodo:{
        type:Function,//参数类型为函数
        required:true//参数为必填
      }
    },
    methods:{
      addItem(){
        //1. 检查输入合法性
        const titile = this.titile.trim();
        if(!titile){
          alert("不能为空！");
          return false;
        }
        //2. 生成todo对象
        const todo={
          titile:titile,
          complete:false
        }
        //3. 添加到todos
        this.addTodo(todo);
        //4. 清除输入
        this.titile = '';
      }
    }
  }
</script>

<style scoped>
  /*header*/
  .todo-header input {
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
  }

  .todo-header input:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
  }


</style>
