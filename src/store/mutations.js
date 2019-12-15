export default {
  text (state, payload) {
    state.text = payload.text;
    state.negative = payload.negative;
    state.positive = payload.positive;
  }
}