import { createApp } from "vue";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import "./assets/css/global.css";
import App from "./App.vue";
import Jobs from "./views/Jobs.vue";

const routes: Array<RouteRecordRaw> = [
  { path: "/", component: Jobs },
  {
    path: "/basics",
    component: () => import("./views/Basics.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);

app.use(router);
app.mount("#app");
