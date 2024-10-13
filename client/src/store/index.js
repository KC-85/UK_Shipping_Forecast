// client/src/store/index.js
import { createStore } from 'vuex';
import axios from 'axios';

// Create a new store instance for Vuex (Vue 3 syntax)
const store = createStore({
  state: {
    forecast: null,  // State for storing forecast data
  },
  mutations: {
    setForecast(state, forecast) {
      state.forecast = forecast;  // Mutate state when the forecast is set
    },
  },
  actions: {
    async fetchForecast({ commit }) {
      try {
        const response = await axios.get('http://localhost:5000/api/forecast');
        commit('setForecast', response.data[0]);  // Assuming a single forecast item
      } catch (error) {
        console.error("Error fetching forecast:", error);
      }
    },
  },
});

export default store;
