<template>
    <div class="container">
        <p>{{msg}}</p>
        <hr>
        <input type="text" v-model="name">
        <button v-on:click="doAction">click</button>

        <ul>
            <li v-for="(person,key) in people">
                {{person.id}}: {{person.name}} [{{person.mail}}] ({{person.age}})
            </li>
        </ul>
    </div>
</template>

<script>
    const axios = require('axios');
    export default {
        mounted() {
            axios.get('/hello/json').then(response => {
                console.log(response)
                this.people = response.data;
                this.msg = 'get data!';
            });
        },
        data:function() {
            return {
                msg:'wait...',
                name: '',
                people: [],
            };
        },
        methods: {
            doAction:function() {
                this.msg = 'Hello, ' + this.name + '!!';
            }
        }
    }
</script>
