import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        name: 'BookList',
        component: () => import('../views/BookList.vue')
    }]

export const router = createRouter({
    history: createWebHistory(),
    routes
})