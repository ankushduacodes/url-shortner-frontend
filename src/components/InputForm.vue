<template>
  <fieldset>
    <legend>Shorten The URL</legend>
    <form class="row g-3" @submit.prevent="validateUrl">
      <div class="form-floating">
        <input type="text" class="form-control" id="floatingInput" ref="inputText"
               placeholder="Enter a URL">
        <label for="floatingInput">Enter a URL</label>
        <span class="invalid-feedback">{{ invalidFeedback }}</span>
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
  data() {
    return {
      invalidFeedback: '',
    };
  },
  methods: {
    emitPostEvent() {
      this.$emit('post-request', { url: this.$refs.inputText.value });
    },
    // TODO validate if the url is already shortened by my server
    validateUrl() {
      const httpRegex = /http(s)?:\/\/(www\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\\+.~#?&//=]*)/;
      const urlRegex = /(www\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\\+.~#?&//=]*)/;
      const { inputText } = this.$refs;
      if (!inputText.value.match(httpRegex)) {
        inputText.classList.add('is-invalid');
        this.invalidFeedback = !inputText.value.match(urlRegex)
          ? 'Please enter a valid URL'
          : 'Please enter a valid URL with HTTP or HTTPS protocol specified';
        return;
      }
      inputText.classList.add('is-valid');
      this.emitPostEvent();
      this.$emit('load-loader', { component: 'the-loader' });
    },
  },
  beforeMount() {
    this.$store.dispatch('setOutputNull');
    this.$store.dispatch('setErrorFalse');
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
