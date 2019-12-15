import { text } from '../api';

export default {
  postText: ({ commit }, word) => {
    return text.postText(word)
      .then(({ res }) => {
      console.log(res);
        commit('text', res);
      })
      .catch();
  }
}