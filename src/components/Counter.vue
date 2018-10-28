<template>
    <div>
        <button class="btn btn-primary" @click="incrementAsync({step: 10, delay:500})">Increment</button>
        <button class="btn btn-primary" @click="decrementAsync({step: 10, delay:500})">Decrement</button>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';
    export default {
        methods: {
            ...mapActions([
                'incrementAsync',
                'decrementAsync'
            ])
        }
    }
</script>