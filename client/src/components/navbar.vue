<template>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>UK Shipping Forecast</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn to="/" text>Home</v-btn>
      <v-btn to="/about" text>About</v-btn>
    </v-app-bar>
  </template>
  
  <script>
  export default {
    name: 'Navbar',
  };
  </script>
  
  <style scoped>
  .v-btn {
    margin: 0 10px;
  }
  </style>
  