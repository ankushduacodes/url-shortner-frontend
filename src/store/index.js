import { createStore } from 'vuex';

import mutations from '@/store/mutations';
import actions from '@/store/actions';
import getters from '@/store/getters';

export default createStore({
  state() {
    return {
      output: null,
      error: false,
    };
  },
  getters,
  mutations,
  actions,
  modules: {
  },
});
