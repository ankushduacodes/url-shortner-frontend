import { createStore } from 'vuex';
// eslint-disable-next-line no-unused-vars
import axios from 'axios';

async function setResult() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ url: 'https://example.com' });
    }, 4000);
  });
}

export default createStore({
  state() {
    return {
      output: null,
    };
  },
  getters: {
    getOutput(state) {
      return state.output;
    },
  },
  mutations: {
    setOutputToNull(state) {
      state.output = null;
    },
    fetchOutput(state, payload) {
      state.output = payload.url;
      console.log(state.output);
    },
  },
  actions: {
    setOutputNull({ commit }) {
      commit('setOutputToNull');
    },
    // eslint-disable-next-line no-unused-vars
    async fetchOutput({ commit, state }, payload = undefined) {
      // const result = await axios.post('', {
      //   url: payload.url,
      // });
      // eslint-disable-next-line
      const result = await setResult();
      commit('fetchOutput', result);
    },
  },
  modules: {
  },
});
