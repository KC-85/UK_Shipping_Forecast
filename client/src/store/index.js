import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    forecast: null,
  },
  mutations: {
    setForecast(state, forecast) {
      state.forecast = forecast;
    },
  },
  actions: {
    async fetchForecast({ commit }) {
      const response = await axios.get('http://localhost:5000/api/forecast');
      commit('setForecast', response.data[0]); // Assuming a single forecast item for simplicity.
    },
  },
});
