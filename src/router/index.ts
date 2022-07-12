import type { App } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
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
  history: createWebHashHistory(),
  routes,
});

export function setupRouter(app: App) {
  app.use(router);
}
