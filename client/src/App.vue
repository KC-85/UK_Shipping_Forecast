<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>UK Shipping Forecast</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
body {
  font-family: 'Roboto', sans-serif;
}
</style>
