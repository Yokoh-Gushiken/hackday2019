import { test } from '../api';

export default {
  test: ({ commit }, word) => {
    return test.getTest(word)
      .then(({ res }) => {
      console.log(res);
        commit('test', res);
      })
      .catch();
  }
}