export default {
  setOutputToNull(state) {
    state.output = null;
  },
  setErrorToFalse(state) {
    state.error = false;
  },
  fetchOutput(state, payload) {
    state.output = payload.shortenedUrl;
  },
};
