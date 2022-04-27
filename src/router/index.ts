import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/Main.vue"),
    },
    {
      path: "/add",
      name: "add",
      component: () => import("../views/AddPatient.vue"),
    },
    {
      path: "/add/:id",
      name: "edit",
      component: () => import("../views/AddPatient.vue"),
    },
    {
      path: "/about/:id",
      name: "about",
      component: () => import("../views/AboutPatient.vue"),
    },
    {
      path: "/createConsultation/:id",
      name: "createConsultation",
      component: () => import("../views/CreateConsultation.vue"),
    },
    {
      path: "/createConsultation/:id/:consultId",
      name: "editConsultation",
      component: () => import("../views/CreateConsultation.vue"),
    },
  ],
});

export default router;
