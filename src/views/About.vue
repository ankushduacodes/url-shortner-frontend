<template>
  <div>
    <div class="about">
      <img src="../assets/about.svg" alt="about-page-pic">
    </div>
    <base-card>
      <h1>This is my college project <br> - Ankush Dua</h1>
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
  width: 600px;
  height: 400px;
  max-width: 100%;
}

h1 {
  text-align: center;
}
</style>
