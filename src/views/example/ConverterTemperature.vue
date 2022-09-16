<script>
    export default {
        data() {
            return {
                c: 0,
                f: 32
            }
        },  
        methods: {
            setC(e, c = +e.target.value) {
                this.c = c
                this.f = c * (9 / 5) + 32
            },
            setF(event) {
                var f = event.target.value
                this.c = (f - 32) * (5 / 9)
            }            
        }
    }    
</script>
    
<template>    
  <div>
    <b-row>
      <b-col sm="4">
        <input type="number" :value="c" @change="setC"> 
      </b-col>
      <b-col sm="4">Celsius &lt;--&gt; Fahrenheit</b-col>
      <b-col sm="4">
        <input type="number" :value="f" @change="setF"> 
      </b-col>
      <!--  failed run 
      <b-col sm="2">
      <b-form-input type="number" v-model="c" @updated="setF"></b-form-input>{{ c }}
      </b-col>
      <b-col sm="2">
      <b-form-input type="number" v-model="f" @updated="setC"></b-form-input> {{ f }}
      </b-col>-->
  </b-row>
  </div>
</template>