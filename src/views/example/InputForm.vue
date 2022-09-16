<script>
    export default {
        data() {
            return {
                text: 'Edit me',
                checked: true, 
                list: [
                    {id: 0, text: 'Apple'},
                    {id: 1, text: 'Grape'},
                    {id: 2, text: 'Melon'},
                ], 
                checkedNames: ['Grape', 'Melon'],
                selectedName: 'Grape',
                selected: 'A'
            }
        }
    }    
</script>
    
<template>    
    <div>
        <h5>TextInput</h5>
        <input v-model="text" > {{ text }} 

        <p class="my-3 border-bottom" ></p>
        <h5>Checkbox</h5>
        <input type="checkbox" id="checkbox" v-model="checked" >
        <label for="checkbox">Checked: {{ checked }}</label>
        
        <p class="my-3 border-bottom" ></p>
        <h5>Multi Checkbox</h5>
        <input type="checkbox" id="apple" value="Apple" v-model="checkedNames">
        <label for="apple">Apple</label>&nbsp;
        <input type="checkbox" id="grape" value="Grape" v-model="checkedNames">
        <label for="grape">Grape</label>&nbsp;
        <input type="checkbox" id="melon" value="Melon" v-model="checkedNames">
        <label for="melon">Melon</label>

        <p class="my-3 border-bottom" ></p>
        <h5>Multi Checkbox : v-for</h5>
        <div v-if="list.length">
            <span v-for="item of list" v-bind:key="item.id" > <input type="checkbox" id="{{ item.id }}" value="{{ item.text }}" v-model="checkedNames"> <label for="{{ item.id }}">({{ item.id }}) {{ item.text }} </label>&nbsp; </span>
        </div>

        <p class="my-3 border-bottom" ></p>
        <h5>Radio</h5>
        <select v-model="selected">
            <option disabled value="">Please select one</option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
        </select> &nbsp;
        <span>Selected: {{ selected }}</span>

        <p class="my-3 border-bottom" ></p>
        <h5>Select : v-for</h5>
        <select v-if="list.length" v-model="selectedName">
            <option disabled value="">Please select one</option>
            <option  v-for="item of list" v-bind:key="item.id">{{ item.text }}</option>
        </select> &nbsp;
        <span>Selected: {{ selectedName }}</span>      
        
        <p class="my-3 border-bottom" ></p>
        <h5>Multi Select : v-for</h5>
        <select v-if="list.length" v-model="checkedNames" multiple style="width:150px;">
            <option  v-for="item of list" v-bind:key="item.id">{{ item.text }}</option>
        </select> &nbsp;
        <span>Selected: {{ checkedNames }}</span>         
    </div>
</template>