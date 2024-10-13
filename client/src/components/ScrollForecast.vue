<!-- client/src/components/ScrollForecast.vue -->
<template>
    <v-container>
      <h2 class="section-title">UK Shipping Forecast</h2>
      <div class="forecast-wrapper">
        <div v-for="(region, index) in forecasts" :key="index" class="forecast-item" ref="forecastItems">
          <h3>{{ region.region }}</h3>
          <p><strong>Wind:</strong> {{ region.wind }}</p>
          <p><strong>Visibility:</strong> {{ region.visibility }}</p>
          <p><strong>Sea State:</strong> {{ region.sea_state }}</p>
          <p><strong>Weather:</strong> {{ region.weather }}</p>
        </div>
      </div>
    </v-container>
  </template>
  
  <script>
  import gsap from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';
  
  export default {
    name: 'ScrollForecast',
    data() {
      return {
        forecasts: [
          // Sample forecast data. Replace this with actual API data or Vuex store data.
          { region: 'Southwest', wind: '15mph', visibility: 'Good', sea_state: 'Moderate', weather: 'Sunny' },
          { region: 'Northwest', wind: '20mph', visibility: 'Poor', sea_state: 'Rough', weather: 'Cloudy' },
          { region: 'Northeast', wind: '25mph', visibility: 'Good', sea_state: 'Calm', weather: 'Rainy' },
        ],
      };
    },
    mounted() {
      // Register ScrollTrigger
      gsap.registerPlugin(ScrollTrigger);
  
      // Animation for each forecast item
      gsap.from(this.$refs.forecastItems, {
        scrollTrigger: {
          trigger: this.$refs.forecastItems,
          start: 'top 80%', // Trigger animation when the item enters the viewport
          end: 'bottom 60%',
          scrub: 1,
        },
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 1.5,
        ease: 'power2.out',
      });
    },
  };
  </script>
  
  <style scoped>
  .forecast-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  
  .forecast-item {
    width: 30%;
    padding: 20px;
    margin: 10px;
    border: 1px solid #ddd;
    background-color: #f9f9f9;
    border-radius: 8px;
  }
  
  .section-title {
    text-align: center;
    margin: 30px 0;
  }
  </style>
  