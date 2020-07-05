<template>
  <div id="app">
     <router-view></router-view>
  </div>
</template>

<script>
import storage from './storage/index'

export default {
  name: 'App',
  components: {
    
  },
  data(){
  return{
     res:{}
    }
  },
  mounted(){
    // 使用插件mockjs,本地集成
    this.axios.get('/user/login').then((res)=>{
      this.res = res;
    })
    storage.setItem('0');
  }
}
  
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
