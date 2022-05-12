<template>
  <v-app>
    <app-nav />
    <v-main class = 'hero-image'>
      <router-view>
      </router-view>
    </v-main>
    <v-footer absolute app color='black' class='footer' dark>
        If you have any questions or concerns, please contact us here:
        &nbsp;
        <a href='mailto:tostdy4@gmail.com'>Dylan Chirigotis</a>
        &nbsp;
        <a href='mailto:tyler.fahney@gmail.com'>Tyler Fahney</a>
    </v-footer>
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
.footer {
  padding-top: 20px;
  justify-content: center;
}
.hero-image {
  background-image: url(./assets/penny-stocks.png);
}
</style>
