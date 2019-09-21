<template>
  <!--
    mouseenter: 进入
    mouseleave: 退出
  -->
  <li @mouseenter="handleEnter(true)" @mouseleave="handleEnter(false)" :style="{background: bgColor}">
    <label>
      <input type="checkbox" v-model="todo.complete"/>
      <span>{{todo.titile}}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click="delItem">删除</button>
  </li>
</template>

<script>
  export default {
    data(){
      return {
        bgColor:"white",
        isShow:false
      }
    },
    props:{
      todo:Object,
      index:Number,
      delTodo:{
        type: Function
      }
    },
    methods:{
      handleEnter(isEnter){
        if(isEnter){
          this.bgColor="#aaaaaa";
          this.isShow=true;
        }else {
          this.bgColor="white";
          this.isShow=false;
        }
      },
      delItem(){
        this.delTodo(this.index);
      }
    }
  }
</script>

<style scoped>

</style>
