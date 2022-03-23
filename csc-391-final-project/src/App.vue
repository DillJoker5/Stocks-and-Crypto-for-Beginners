<template>
  <v-app>
    <app-nav />
    <v-main>
      <router-view>
      </router-view>
    </v-main>
    <v-footer absolute app color='blue darken-4' class='footer' dark>
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
</style>
