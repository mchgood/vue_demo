<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="checkAll"/>
    </label>
    <span>
          <span>已完成{{completeSize}}</span> / 全部{{todos.length}}
        </span>
    <button class="btn btn-danger" v-show="completeSize" @click="clearTask">清除已完成任务</button>
  </div>
</template>

<script>
  export default {
    props:{
      todos:Array,
      delCompleteTask:Function,
      selectAllTodos:Function
    },
    computed:{
      completeSize(){
        //reduce() 方法接收一个函数作为累加器（accumulator），数组中的每个值（从左到右）开始合并，最终为一个值。
        //arr.reduce(callback,[initialValue])
        //callback （执行数组中每个值的函数，包含四个参数）
        //  1、previousValue （上一次调用回调返回的值，或者是提供的初始值（initialValue））
        //  2、currentValue （数组中当前被处理的元素）
        //  3、index （当前元素在数组中的索引）
        //  4、array （调用 reduce 的数组）
        // initialValue （作为第一次调用 callback 的第一个参数。）
        return this.todos.reduce((preTotal, todo) => preTotal + (todo.complete?1:0) ,0);
      },
      checkAll: {
        get () { // 决定是否勾选
          return this.completeSize===this.todos.length && this.completeSize>0
        },

        set (value) {// 点击了全选checkbox  value是当前checkbox的选中状态(true/false)
          this.selectAllTodos(value)
        }
      },
    },
    methods:{
      clearTask(){
        this.delCompleteTask()
      }
    }
  }
</script>

<style scoped>
  /*footer*/
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }

</style>
