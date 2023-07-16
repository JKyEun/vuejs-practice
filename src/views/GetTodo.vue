<template lang="">
    <div>
        <div>DoneTodo</div>
        <div :key="el.id" v-for="el in doneTodo">{{ el.text }}</div>
        <br />
        <div>HaveTodo</div>
        <div :key="el.id" v-for="el in haveTodo">{{ el.text }}</div>
    </div>
</template>

<script>
import store from '@/store'
export default {
    computed: {
        doneTodo() {
            return store.getters.doneTodo
        },
        haveTodo() {
            return store.getters.haveTodo
        }
    }
}
</script>
<style lang=""></style>
