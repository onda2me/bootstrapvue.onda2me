<script>
    import TreeItem from '@/views/example/TreeItem.vue'

    const treeData = {
        name: 'My Fruit Tree',
        children: [
            { name: 'Apple' },
            { name: 'Banana' },
            { name: 'Melon' },
            { name: 'Melon Type',
                children: [
                    { name: 'Melon' },
                    { name: 'Water Melon' },
                    { name: 'Small Melon' }
                ]
            }
        ]       
    }

    export default {
        components: {
            TreeItem
        },
        data() {
            return {
                treeData
            }
        }
    }    
</script>
    
<template>    
    <div>
        <ul>
            <TreeItem class="item" :model="treeData"></TreeItem>
        </ul>
        
    </div>
</template>

<style>
    .item {
      cursor: pointer;
      line-height: 1.5;
    }
    .bold {
      font-weight: bold;
    }
    </style>