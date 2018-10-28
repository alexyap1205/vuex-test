import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        counter: 0
    },
    getters: {
        doubleCounter: state => {
            return state.counter * 2;
        }
    },
    mutations: {
        increment: (state, payload) => {
            state.counter+=payload;
        },
        decrement: (state, payload) => {
            state.counter-=payload;
        }
    },
    actions: {
        incrementAsync: (context, payload) => {
            setTimeout(() => {
                context.commit('increment', payload.step);
            },payload.delay);
        },
        decrementAsync: (context, payload) => {
            setTimeout(() => {
                context.commit('decrement', payload.step);
            },payload.delay);
        }
    }
});