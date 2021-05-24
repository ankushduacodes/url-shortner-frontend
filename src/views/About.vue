<template>
  <div>
    <div class="about">
      <img src="../assets/about.svg" alt="about-page-pic">
    </div>
    <base-card>
      <h1>This is my college project</h1>
    </base-card>
  </div>
</template>

<script>
import BaseCard from '@/components/BaseUI/BaseCard.vue';

export default {
  name: 'About',
  components: { BaseCard },
};
</script>

<style scoped>
img {
  height: 100%;
  width: 100%;
}

h1 {
  text-align: center;
}
</style>
