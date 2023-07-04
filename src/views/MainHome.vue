<template lang="">
  <div>
    <h1>Welcome to {{ title }}!</h1>
    <input type="text" v-model="inputValue" />
    <button @click="getData">Get</button>
    <button @click="setData">Set</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: 'HOME',
      inputValue: 'Hi',
    };
  },
  methods: {
    getData() {
      alert(this.inputValue);
    },
    setData() {
      this.inputValue = 'Changed';
    },
  },
};
</script>
<style lang=""></style>
