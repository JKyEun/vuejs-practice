import Vuex from 'vuex'

const store = new Vuex.Store({
    state: {
        count: 0,
        todos: [
            { id: 1, text: '1번', done: true },
            { id: 2, text: '2번', done: false },
            { id: 3, text: '3번', done: true },
            { id: 4, text: '4번', done: false },
            { id: 5, text: '5번', done: true },
            { id: 6, text: '6번', done: false }
        ]
    },
    getters: {
        doneTodo: state => state.todos.filter(el => el.done === true),
        haveTodo: state => state.todos.filter(el => el.done === false)
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
