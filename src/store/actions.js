import axios from 'axios';
import { useToast } from 'vue-toastification';

const baseURL = 'https://url-shortnr-api.herokuapp.com';

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
      result = await axios.post(`${baseURL}`, {
        url: payload.url,
      }, { timeout: 3000 });
    } catch (err) {
      state.error = true;
      const toast = useToast();
      toast.error('Something went wrong on the server. Please try again');
      return;
    }
    commit('fetchOutput', result.data);
  },
};
