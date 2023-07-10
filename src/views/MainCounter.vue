<template lang="">
  <div>
    <h1>Counter</h1>
    <div>{{ count }}</div>
    <button @click="up">UP</button>
    <button @click="down">DOWN</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    up() {
      this.count++;
    },
    down() {
      this.count--;
    },
  },
};
</script>
<style lang=""></style>
