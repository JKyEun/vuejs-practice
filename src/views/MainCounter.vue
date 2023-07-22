<template lang="">
    <div>
        <h1>Counter</h1>
        <div>{{ count }}</div>
        <button @click="up">UP</button>
        <button @click="down">DOWN</button>
        <button @click="go">GO HOME</button>
    </div>
</template>

<script>
export default {
    computed: {
        count() {
            return this.$store.state.count;
        }
    },
    methods: {
        up() {
            this.$store.commit('increment', { amount: 10 });
        },
        down() {
            this.$store.commit('decrement', { amount: 10 });
        },
        push() {
            this.$router.push('/');
        }
    }
};
</script>
<style lang=""></style>
