<template>
  <fieldset>
    <legend>Shorten The URL</legend>
    <form class="row g-3" @submit.prevent="validateUrl">
      <div class="form-floating">
        <input type="url" class="form-control" id="floatingInput" ref="inputText"
               placeholder="Enter a URL" required>
        <label for="floatingInput">Enter a URL</label>
      </div>
      <div class="btn">
        <button type="submit" class="btn btn-primary mb-3">ShortenIt</button>
      </div>
    </form>
  </fieldset>
</template>
<script>

export default {
  name: 'InputForm',
  methods: {
    emitPostEvent() {
      this.$emit('post-request', { url: this.$refs.inputText.value });
    },
    // TODO validate if the url is already shortened by my server
    validateUrl() {
      this.emitPostEvent();
      this.$emit('load-loader', { component: 'the-loader' });
    },
  },
  beforeMount() {
    this.$store.dispatch('setOutputNull');
  },
};
</script>

<style scoped>
.btn {
  font-size: 20px;
  padding: 10px
}
.form-floating {
  margin-bottom: 10px;
}
</style>
