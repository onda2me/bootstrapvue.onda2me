<template>



  <div class="pb-2">
    <b-navbar type="light" variant="light">
      <b-navbar-nav>
        <b-nav-item href="/">Home | </b-nav-item>
        <b-nav-item href="#"><router-link :to="{ name:'About' }">About</router-link> | </b-nav-item>
        <b-nav-item href="#"><router-link to="/not123">NotFound</router-link> | </b-nav-item>
        <b-nav-item href="#"><router-link to="/events?page=46">Events</router-link> | </b-nav-item>
        <b-nav-item href="#"><router-link to="/exam/article/1">id:1</router-link> | </b-nav-item>
        <b-nav-item href="#"><router-link to="/exam/article/2">id:2</router-link> | </b-nav-item>
        <b-nav-item href="#"><router-link to="/basic/basicHome">Examples</router-link> | </b-nav-item>
        <b-nav-item href="#" ><a href="https://router.vuejs.org/guide/essentials/dynamic-matching.html" target="_blank">Vue Router</a> | </b-nav-item>
        <b-nav-item href="#" ><a href="https://vuejs.org/examples/#hello-world" target="_blank">Vue Basic</a> | </b-nav-item>
        <b-nav-item href="#" ><a href="https://bootstrap-vue.org/docs/components" target="_blank">Bootstrap-Vue</a> | </b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </div>
 
  <!--
  <LayoutHeader></LayoutHeader>
  <router-view class="view left-sidebar" name="LeftSidebar"></router-view>
  -->
  <router-view />

</template>


<script>

</script>

<style>
</style>




