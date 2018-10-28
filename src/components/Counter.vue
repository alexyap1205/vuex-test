<template>
    <div>
        <button class="btn btn-primary" @click="incrementAsync({step: 10, delay:500})">Increment</button>
        <button class="btn btn-primary" @click="decrementAsync({step: 10, delay:500})">Decrement</button>
        <hr>
        <input type="text" v-model="value">
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
        },
        computed: {
            value: {
                get() {
                    return this.$store.getters.counterValue;
                },
                set(value) {
                    this.$store.dispatch('setCounterAsync', {value: value, delay: 500})
                }
            }
        }
    }
</script>