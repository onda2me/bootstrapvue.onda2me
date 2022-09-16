<script>
    import ShowModalPop from '@/views/example/ShowModalPop.vue'

    export default {
        components: {
            ShowModalPop
        }, 
        data() {
            return {
                showModal: false
            }
        }
    }    
</script>
    
<template>    
    <div>

        <button id="show-modal" @click="showModal=true">Show Modal</button>

        <Teleport to="body">
            <!-- use the modal component, pass in the prop -->
            <ShowModalPop :show="showModal" @close="showModal = false">
            <template #header>
                <h3>custom header</h3>
            </template>
            </ShowModalPop>
        </Teleport>        
    </div>
</template>