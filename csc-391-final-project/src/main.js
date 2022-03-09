import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import axios from 'axios';
import mdiVue from 'mdi-vue/v2';
import * as mdijs from '@mdi/js';

Vue.prototype.$http = axios;

Vue.config.productionTip = false;

Vue.use(mdiVue, {
  icons: mdijs
});

new Vue({
  router,
  store,
  vuetify,
  axios,
  render: (h) => h(App),
}).$mount("#app");
