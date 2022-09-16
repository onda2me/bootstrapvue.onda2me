<script>
    export default {
        data() {
            return {
                count: 0
            }
        }
    }    
</script>
    
<template>    
    <div>
        <b-button variant="outline-secondary" disabled>{{ count }}</b-button>&nbsp;
        <b-button variant="outline-primary" @click="count++">Count</b-button>&nbsp;
        <b-button variant="outline-danger" @click="count--">Discount</b-button>&nbsp;
    </div>
</template>