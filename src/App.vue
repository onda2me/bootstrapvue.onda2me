<template>




  <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About1</router-link> |
      <router-link :to="{ name:'About' }">About2</router-link> |
      <router-link to="/not123">NotFound2</router-link> |
      <router-link to="/events?page=46">Events</router-link> | 
      <router-link to="/exam/HelloWorld">HelloWorld</router-link> | 
      <router-link to="/exam/article/1">id:1</router-link> | 
      <router-link to="/exam/article/2">id:2</router-link> | 
      <a href="https://bootstrap-vue.org/docs/components" target="_blank">Vue Components</a>      
  </div>

  <LayoutHeader></LayoutHeader>

  <router-view class="view left-sidebar" name="LeftSidebar"></router-view>
  <router-view />

</template>


<script>

</script>

<style>
</style>




