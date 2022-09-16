<template>
<b-card-group deck>
    <b-card
      header="BasicHome Navigation"
      header-tag="header"
      style="max-width: 15rem;"
    >
    <b-nav vertical>
      <b-nav-item active href="/basic/basicHome">basicHome</b-nav-item>
      <b-nav-item href="/basic/helloWorld">helloWorld</b-nav-item>
      <b-nav-item href="/basic/userInput">userInput</b-nav-item>
      <b-nav-item href="/basic/condition">condition</b-nav-item>
      <b-nav-item href="/basic/todoList">todoList</b-nav-item>
      <b-nav-item href="/basic/inputForm">inputForm</b-nav-item>
      <b-nav-item href="/basic/treeView">treeView</b-nav-item>
      <b-nav-item href="/basic/showModal">showModal</b-nav-item>
      <b-nav-item href="/basic/counter">counter</b-nav-item>
      <b-nav-item href="/basic/temp">converter Temp</b-nav-item>
      <b-nav-item href="/basic/flight">Flight Booker</b-nav-item>
      <b-nav-item disabled>Disabled</b-nav-item>
    </b-nav>
    </b-card>

    <b-card header="Contents" header-tag="contents">
      <router-view />
      <router-view name="helper" />
    </b-card>
  </b-card-group>

  <div class="pt-5">
    <b-alert show variant="dark" >
      <b-link href="https://vuejs.org/examples/" >참고문서</b-link>
    </b-alert>
  </div>

  </template>
  
  <script>
  
  </script>