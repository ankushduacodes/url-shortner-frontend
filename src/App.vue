<template>
  <p></p>
  <nav-bar></nav-bar>
  <div class="container-md">
    <router-view v-slot="{ Component }">
      <transition @enter="enterRouteHandler" @leave="leaveRouteHandler" mode="out-in">
        <keep-alive>
          <component :is="Component"></component>
        </keep-alive>
      </transition>
    </router-view>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';

const { enterHandler, leaveHandler } = require('@/animations/routeAnimationHandler');

export default {
  components: { NavBar },
  data() {
    return {
      requestId: null,
      show: false,
    };
  },
  methods: {
    enterRouteHandler(el, done) {
      enterHandler(el, done);
    },
    leaveRouteHandler(el, done) {
      leaveHandler(el, done);
    },
  },
  mounted() {
    console.log(navigator.platform);
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  height: 100%;
}
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}
</style>
