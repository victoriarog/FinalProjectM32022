import { createRouter, createWebHistory } from "vue-router";

// Async loading of Views
const Landing = () => import("@/views/Landing.vue");
const About = () => import("@/views/About.vue");
const WowSearch = () => import("@/views/Directors.vue");

const routes = [
  {
    path: "/",
    name: "Landing",
    component: Landing,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/wowsearch",
    name: "WowSearch",
    component: WowSearch,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
