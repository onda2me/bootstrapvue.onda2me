<script>
    import TodoItem from '@/views/example/TodoItem.vue'
    
    export default {
        components: {
            TodoItem
        },
        data() {
            return {
                list: [
                    {id: 0, text: 'Vegetables'},
                    {id: 1, text: 'Cheese'},
                    {id: 2, text: 'Melon'}
                ]
            }
        }
    }    
</script>
    
<template>    
    <div>
        <ol>
            <TodoItem
                v-for="item in list"
                :obj="item"
                :key="item.id"
            ></TodoItem>
        </ol>        
    </div>
</template>