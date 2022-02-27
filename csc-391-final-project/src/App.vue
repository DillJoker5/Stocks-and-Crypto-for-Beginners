<template>
  <v-app>
    <app-nav />
    <v-main>
      <router-view>
      </router-view>
    </v-main>
  </v-app>
</template>

<script>
import AppNav from './components/AppNav.vue';

export default {
  name: 'App',
  components: {
    AppNav,
  }
};
</script>

<style>
</style>
