<template>
  <fieldset>
    <legend>Output URL</legend>
    <form class="row g-3" @submit.prevent>
      <div class="input-group mb-3">
        <input type="text" class="form-control" :value="output" readonly
               id="outputUrl"
               aria-label="output-url" aria-describedby="copy-btn">
        <button class="btn btn-outline-primary copyBtn"
                data-clipboard-target="#outputUrl"
                @click="copyOutput" type="button"
                id="copy-btn">
          {{ copyBtnText }}
        </button>
      </div>
      <div class="btn">
        <button type="submit" class="btn btn-primary mb-3"
                @click="shortenMore">Shorten More...</button>
      </div>
    </form>
  </fieldset>
</template>

<script>
import ClipboardJS from 'clipboard';

export default {
  name: 'TheOutput',
  data() {
    return {
      copyBtnText: 'Copy',
    };
  },
  computed: {
    output() {
      return this.$store.getters.getOutput;
    },
  },
  methods: {
    copyOutput() {
      const clipboard = new ClipboardJS('.copyBtn');
      const copyBtn = document.querySelector('.copyBtn');
      clipboard.on('success', () => {
        this.copyBtnText = 'Done';
        copyBtn.disabled = true;
        setTimeout(() => {
          this.copyBtnText = 'Copy';
          copyBtn.disabled = false;
        }, 2000);
      });
    },
    shortenMore() {
      this.$emit('shorten-more', { component: 'input-form' });
    },
  },
};
</script>

<style scoped>
.btn {
  font-size: 20px;
  padding: 10px
}

.container {
  height: 223px;
}
</style>
