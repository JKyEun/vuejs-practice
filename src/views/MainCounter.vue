<template lang="">
    <div>
        <h1>Counter</h1>
        <div>{{ count }}</div>
        <button @click="up">UP</button>
        <button @click="down">DOWN</button>
    </div>
</template>

<script>
import store from '../store/index'

export default {
    computed: {
        count() {
            return store.state.count
        }
    },
    methods: {
        up() {
            store.commit('increment')
        },
        down() {
            store.commit('decrement')
        }
    }
}
</script>
<style lang=""></style>
