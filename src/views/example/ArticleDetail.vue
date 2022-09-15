

<template>
    <section>
      <h2>선택하신글은 아래와 같습니다</h2>
      <h3>{{articles[$route.params.id].title}}</h3>
      <p>{{articles[$route.params.id].desc}}</p>
    </section>
  </template>
  
  <script>
  export default {
      props : {
          blogs : Array
      }, 
      data() {
        return {
            articles : [
                {id : 0, title : '포스팅0', desc : '포스팅0 예제입니다.'},
                {id : 1, title : '포스팅1', desc : '포스팅1 예제입니다.'},
                {id : 2, title : '포스팅2', desc : '포스팅2 예제입니다.'},
                {id : 3, title : '포스팅3', desc : '포스팅3 예제입니다.'},
                {id : 4, title : '포스팅4', desc : '포스팅4 예제입니다.'},
            ]
        }
      }
  }
  </script>
  
  <style>
  
  </style>