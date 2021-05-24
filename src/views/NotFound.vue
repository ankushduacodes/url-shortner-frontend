<template>
  <div class="container">
    <img src="../assets/404.png" alt="404 Image"/>
    <h1>Not Found</h1>
    <h4>Go to <router-link to="/">Home</router-link></h4>
  </div>
</template>

<script>

export default {
  name: 'NotFound',
};
</script>

<style scoped>
.container {
  text-align: center;
}

img {
  height: 500px;
  width: 500px;
}
</style>
