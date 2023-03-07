import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        name: 'BookList',
        component: () => import('../views/BookList.vue')
    },
    {
        path: '/edit-book/:id',
        name: 'EditBook',
        props: true,
        component: () => import('../views/EditBook.vue')
    }]

export const router = createRouter({
    history: createWebHistory(),
    routes
})