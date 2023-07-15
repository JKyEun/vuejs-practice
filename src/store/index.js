import Vuex from 'vuex'

const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        increment: (state, payload) => {
            state.count += payload.amount
        },
        decrement: (state, payload) => {
            state.count -= payload.amount
        }
    }
})

export default store
