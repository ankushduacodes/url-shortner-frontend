<template>
  <base-card>
    <div class="container">
      <transition @enter="enter" @leave="leave" mode="out-in">
        <component
          @shorten-more="switchComponent"
          @load-loader="switchComponent"
          @post-request="fetchOutput"
          :is="componentToBeShown"></component>
      </transition>
    </div>
  </base-card>
</template>

<script>
import BaseCard from '@/components/BaseUI/BaseCard.vue';
import InputForm from '@/components/InputForm.vue';
import TheOutput from '@/components/TheOutput.vue';
import TheLoader from '@/components/TheLoader.vue';
import {
  componentEnter as enterHandler,
  componentLeave as leaveHandler,
} from '@/animations/componentTransitionHandler';
import { mapState } from 'vuex';

export default {
  name: 'Home',
  components: {
    TheLoader,
    TheOutput,
    InputForm,
    BaseCard,
  },
  data() {
    return {
      componentToBeShown: 'input-form',
    };
  },
  methods: {
    switchComponent(payload) {
      this.componentToBeShown = payload.component;
    },
    enter(el, done) {
      enterHandler(el, done);
    },
    leave(el, done) {
      leaveHandler(el, done);
    },
    async fetchOutput(data) {
      await this.$store.dispatch('fetchOutput', data);
    },
  },
  computed: {
    ...mapState(['output', 'error']),
  },
  watch: {
    output() {
      if (this.output) {
        this.switchComponent({ component: 'the-output' });
      }
    },
    error() {
      if (this.error) {
        this.switchComponent({ component: 'input-form' });
      }
    },
  },
};
</script>

<style scoped>
.container {
  margin-top: 4rem;
  margin-bottom: 4rem;
}
</style>
