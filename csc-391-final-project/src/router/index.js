import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => {
      import('../views/Home.vue')
    }
  },
  {
    path: "/about",
    name: "About",
    component: () => {
      import('../views/About.vue')
    }
  },
  {
    path: '/create-thread',
    name: 'Create Thread',
    component: () => {
      import('../views/CreateThread.vue')
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => {
      import('../views/Login.vue')
    }
  },
  {
    path: '/user-profile',
    name: 'User Profile',
    component: () => {
      import('../views/UserProfile.vue')
    }
  },
  {
    path: '/view-stock-crypto-table',
    name: 'View Stock Crypto Table',
    component: () => {
      import('../views/ViewStockCryptoTable.vue')
    }
  },
  {
    path: '/view-thread',
    name: 'View Thread',
    component: () => {
      import('../views/ViewThread.vue')
    }
  },
  {
    path: '/view-threads',
    name: 'View Threads',
    component: () => {
      import('../views/ViewThreads.vue')
    }
  }
];

const router = new VueRouter({
  routes,
});

export default router;
