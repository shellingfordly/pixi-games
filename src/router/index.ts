import type { App } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/parkour",
  },
  {
    path: "/parkour",
    component: () => import("@/app/parkour/Main.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export function setupRouter(app: App) {
  app.use(router);
}
