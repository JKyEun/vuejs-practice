<template lang="">
    <div>
        <h1>Welcome to {{ title }}!</h1>
        <input type="text" v-model="inputValue" />
        <button @click="getData">Get</button>
        <button @click="setData">Set</button>
        <div :key="el" v-for="el in divArr">{{ el }}</div>
        <div v-if="isDivShowed">Div1</div>
        <div v-show="isDivShowed">Div2</div>
        <h2>Child Data</h2>
        <div>{{ childData }}</div>
        <HomeChild :child-data="childData" @fromChild="setChildData" />
    </div>
</template>

<script>
import HomeChild from '../components/layout/HomeChild.vue';
export default {
    name: 'MainHome',
    components: { HomeChild },
    data() {
        return {
            title: 'HOME',
            inputValue: 'Hi',
            divArr: ['1', '2', '3', '4', '5'],
            isDivShowed: false,
            childData: 'Empty'
        };
    },
    watch: {
        inputValue() {
            console.log('watch', this.inputValue);
        }
    },
    methods: {
        getData() {
            alert(this.inputValue);
        },
        setData() {
            this.inputValue = 'Changed';
        },
        setChildData(data) {
            this.childData = data;
        }
    },
    beforeMount() {
        console.log('beforeMount');
    },
    mounted() {
        console.log('mounted');
    },
    beforeUpdate() {
        console.log('beforeUpdate');
    },
    updated() {
        console.log('updated');
        console.log('inputValue', this.inputValue);
    }
};
</script>
<style lang=""></style>
