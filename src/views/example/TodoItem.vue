<script>
    export default {
      props: {
        obj: Object
      }
    }
</script>
    
<template>
    <li>(id:{{ obj.id }}) {{ obj.text }}</li>
</template>