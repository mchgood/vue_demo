<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <TodoHeader :addTodo="addTodo" />
      <TodoList :todos="todos" :delTodo="delTodo"/>
      <TodoFooter :todos="todos" :selectAllTodos="selectAllTodos" :delCompleteTask="delCompleteTask"/>
    </div>
  </div>
</template>

<script>
  import TodoHeader from './components/TodoHeader'
  import TodoList from './components/TodoList'
  import TodoFooter from './components/TodoFooter'

  export default {
    data(){
      return {
        todos:[
          {titile:'JAVA',complete:true},
          {titile:'C++',complete:false},
          {titile:'PHP',complete:true},
          {titile:'C#',complete:false},
        ]
      }
    },
    components:{
      TodoHeader,
      TodoList,
      TodoFooter
    },
    methods:{
      addTodo(todo){
        this.todos.unshift(todo);//添加comment在数组第一位
      },
      delTodo(index){
        this.todos.splice(index,1);
      },
      //清除已完成任务
      delCompleteTask(){
        for (var i =0;i<this.todos.length;i++){
          if(this.todos[i].complete){
            this.delTodo(i);
          }
        }
      },
      //全选/全不选
      selectAllTodos(check){
        this.todos.forEach(todo=>{
          todo.complete = check;
        });

      }
    }
  }
</script>

<style scoped>
  /*app*/
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
