<script>
    export default {
        data() {
            return {
                show: true,
                list: [1, 2, 3],
                show2: true,
                list2: [1, 2, 3]
            }
        }
    }
</script>
    
<template>    
    <div>
        <button @click="show = !show">Toggle List</button>
        <button @click="list.push(list.length + 1)">Push Number</button>
        <button @click="list.pop()">Pop Number</button>
        <button @click="list.reverse()">Reverse List</button>
        
        <ul v-if="show && list.length">
            <li v-for="item of list" v-bind:key="item">{{ item }}</li>
        </ul>
        <p v-else-if="list.length">List is not empty, but hidden.</p>
        <p v-else>List is empty.</p>
    </div>

    
    <div>
        <b-button variant="success" @click="show2 = !show2">Toggle List</b-button>&nbsp;
        <b-button variant="secondary" @click="list2.push(list2.length + 1)">Push Number</b-button>&nbsp;
        <b-button variant="success" @click="list2.pop()">Pop Number</b-button>&nbsp;
        <b-button variant="secondary" @click="list2.reverse()">Reverse List</b-button>&nbsp;
        
        <ul v-if="show2 && list2.length">
            <li v-for="item of list2" v-bind:key="item">{{ item }}</li>
        </ul>
        <p v-else-if="list2.length">List is not empty, but hidden.</p>
        <p v-else>List is empty.</p>
    </div>    
</template>