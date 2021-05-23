<template>
  <div class="container">
    <div class="spinner-grow text-primary spinner" style="width: 3rem; height: 3rem;" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
    <p>Loading...</p>
  </div>
</template>

<script>
export default {
  name: 'TheLoader',
};
</script>

<style scoped>
.container {
  text-align: center;
  height: 230px;
  margin-top: 90px;
}

.spinner {
  margin-top: 67px;
  margin-bottom: 5px;
}
</style>
