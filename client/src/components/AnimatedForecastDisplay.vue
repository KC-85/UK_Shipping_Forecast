<template>
    <v-container>
      <v-card ref="forecastCard" class="forecast-card">
        <v-card-title>Shipping Forecast</v-card-title>
        <v-card-text>
          <div v-if="forecast">
            <p><strong>Region:</strong> {{ forecast.region }}</p>
            <p><strong>Wind:</strong> {{ forecast.wind }}</p>
            <p><strong>Visibility:</strong> {{ forecast.visibility }}</p>
            <p><strong>Sea State:</strong> {{ forecast.sea_state }}</p>
            <p><strong>Weather:</strong> {{ forecast.weather }}</p>
          </div>
          <v-alert v-else type="error">No forecast data available</v-alert>
        </v-card-text>
      </v-card>
    </v-container>
  </template>
  
  <script>
  import { mapState, mapActions } from 'vuex';
  import gsap from 'gsap';
  
  export default {
    computed: mapState(['forecast']),
    created() {
      this.fetchForecast();
    },
    mounted() {
      gsap.from(this.$refs.forecastCard, {
        opacity: 0,
        y: -50,
        duration: 1.2,
        ease: 'power3.out',
      });
    },
    methods: mapActions(['fetchForecast']),
  };
  </script>
  
  <style scoped>
  .forecast-card {
    transition: transform 0.3s ease-in-out;
  }
  .forecast-card:hover {
    transform: scale(1.02);
  }
  </style>
  