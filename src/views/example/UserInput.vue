<script>
    export default {
        data() {
            return {
                message: 'Input Data Test!'
            }
        },
        methods: {
            reverseMessage() {
                this.message = this.message.split('').reverse().join('')
            },
            notify() {
                alert('pre evented.')
            }
        }
    }
</script>
    
<template>    
    <div class="p-2">
        <h3> {{ message }}</h3>
        <button @click="reverseMessage">Reverse Message</button>&nbsp;
        <button @click.prevent="notify">Notify</button>
    </div>

    <div class="p-2">
        <b-button variant="success" @click="reverseMessage">Reverse Message</b-button>&nbsp;
        <b-button @click.prevent="notify">Notify</b-button>
    </div>

    <b-button-group class="p-2">
        <b-button @click="reverseMessage">Reverse Message</b-button>
        <b-button variant="info" @click.prevent="notify">Notify</b-button>
    </b-button-group>    

</template>