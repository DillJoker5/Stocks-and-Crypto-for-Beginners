<template>
  <v-app>
    <app-nav />
    <v-main>
      <router-view>
      </router-view>
    </v-main>
    <v-footer absolute app color='blue darken-4' dark class='footer'>
      <p>
        If you have any questions or concerns, please contact us here:
        <a href='malito:tostdy4@gmail.com'>Dylan Chirigotis</a>
        &nbsp;
        <a href='mailto:tyler.fahney@gmail.com'>Tyler Fahney</a>
      </p>
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
}
</style>
