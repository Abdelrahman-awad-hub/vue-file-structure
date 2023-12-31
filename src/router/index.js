import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: () => import("../Pages/HomeView.vue"),
        },
        {
            path: "/about",
            name: "about",
            component: () => import("../Pages/AboutUs.vue"),
        },
    ],
});

export default router;
