<template lang="">
  <div>
    <ul class="header-ul">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <li>Login</li>
      <li>My Home</li>
    </ul>
  </div>
</template>
<script>
export default {};
</script>
<style>
.header-ul {
  display: flex;
  list-style: none;
  width: 100%;
  justify-content: space-around;
  cursor: pointer;
}
</style>
