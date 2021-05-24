import axios from 'axios';
import { notify } from '@kyvg/vue3-notification';

const baseURL = 'http://localhost:8001';

export default {
  setOutputNull({ commit }) {
    commit('setOutputToNull');
  },
  setErrorFalse({ commit }) {
    commit('setErrorToFalse');
  },
  async fetchOutput({ commit, state }, payload) {
    let result;
    try {
      result = await axios.post(`${baseURL}/`, {
        url: payload.url,
      }, { timeout: 3000 });
    } catch (err) {
      state.error = true;
      notify({
        title: '<b>Error</b>',
        text: 'Something went wrong on the server. Please try again',
        type: 'warn',
        duration: 5000,
        speed: 500,
      });
      return;
    }
    commit('fetchOutput', result.data);
  },
};
