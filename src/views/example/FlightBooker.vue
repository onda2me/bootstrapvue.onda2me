<script>
    function stringToDate(str) {
        const [y, m, d] = str.split('-')
        return new Date(+y, m - 1, +d)
    }

    function dateToString(date) {
        return (
            date.getFullYear() + '-' +
            pad(date.getMonth() + 1) + '-' +
            pad(date.getDate())
        )
    }  
    function pad(n, s = String(n)) {
        return s.length < 2 ? `0${s}` : s
    }      
    export default {
        data() {
            return {
                flightType: 'one-way flight',
                departureDate:  dateToString(new Date()),
                returnDate:  dateToString(new Date())
            }
        },
        computed: {
            isReturn() {
                return this.flightType === 'return flight'
            },
            isCanBook() {
                return (
                    !this.isReturn ||
                    stringToDate(this.returnDate) > stringToDate(this.departureDate)
                )
            }
        }, methods: {
            book() {
                alert(
                    this.isReturn ?
                    'Your have booked '+this.departureDate+' ~ ' + this.returnDate :
                    'Your have booked '+this.departureDate
                )

            }
        }
    }    
</script>
    
<template>    
    <div>
        <select v-model="flightType">
            <option value="one-way flight">One-way Flight</option>
            <option value="return flight">Return Flight</option>
        </select>

        <input type="date" v-model="departureDate" />
        <input type="date" v-model="returnDate" :disabled="!isReturn" />
        
        <button @click="book" :disabled="!isCanBook">Book</button>
        <p>return : {{ isReturn }}, canBook : {{ isCanBook  }}, </p>
        <p class="warning">{{ isCanBook ? '' : 'Return date must be after departure date.'}}</p>
    </div>
</template>

<style>
    select,
    input,
    button {
      display: block;
      margin: 0.5em 0;
      font-size: 15px;
      margin: 1rem;
    }
    
    input[disabled] {
      color: #999;
    }
    
    .warning {
      color: red;
    }
    </style>