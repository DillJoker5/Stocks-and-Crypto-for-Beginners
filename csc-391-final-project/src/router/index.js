import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => 
      import("../views/Home.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => 
      import("../views/About.vue"),
  },
  {
    path: "/createThread",
    name: "Create Thread",
    component: () => 
      import("../views/CreateThread.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => 
      import("../views/Login.vue"),
  },
  {
    path: "/userProfile",
    name: "User Profile",
    component: () => 
      import("../views/UserProfile.vue"),
  },
  {
    path: "/viewStockCryptoTable",
    name: "View Stock Crypto Table",
    component: () => 
      import("../views/ViewStockCryptoTable.vue"),
  },
  {
    path: "/viewThread",
    name: "View Thread",
    component: () => 
      import("../views/ViewThread.vue"),
  },
  {
    path: "/viewThreads",
    name: "View Threads",
    component: () => 
      import("../views/ViewThreads.vue"),
  },
  {
    path: "/forgot-password",
    name: "forgot-password",
    component: () =>
      import("../components/ForgotPassword.vue")
  },
  {
    path: "/register",
    name: "register",
    component: () =>
      import("../components/Register.vue")
  }
];

const router = new VueRouter({
  routes,
});

export default router;
