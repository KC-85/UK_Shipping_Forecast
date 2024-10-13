<template>
  <v-container>
    <!-- Original Animated Forecast Display Component -->
    <AnimatedForecastDisplay />

    <!-- Scroll Triggered Animation Component for Forecasts -->
    <ScrollForecast />

    <!-- Interactive Map Component for Region-Based Forecasts -->
    <InteractiveMap />
  </v-container>
</template>

<script>
import AnimatedForecastDisplay from '../components/AnimatedForecastDisplay.vue';
import ScrollForecast from '../components/ScrollForecast.vue';
import InteractiveMap from '../components/InteractiveMap.vue';

export default {
  components: {
    AnimatedForecastDisplay,
    ScrollForecast,
    InteractiveMap,
  },
};
</script>
