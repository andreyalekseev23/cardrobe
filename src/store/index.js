import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart:[],
    likes: [],
  },
  getters: {
  },
  mutations: {
    addToCart (state, some) {
      this.state.cart.push(some);
    },
    removeFromCart (state, some) {
      const ell = this.state.cart.indexOf(some);

      if (ell !== -1) {
        this.state.cart.splice(ell, 1);
      }
    },
    addToLikes (state, some) {
      state.likes.push(some)
    },
    removeFromLikes (state, some) {
      const ell = state.likes.indexOf(some);

      if (ell !== -1) {
        state.likes.splice(ell, 1);
      }
    },
  },
  actions: {
  },
  modules: {
  }
});
