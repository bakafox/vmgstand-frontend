import { createRouter, createWebHistory } from 'vue-router'

import PanelLayout from '@/layouts/PanelLayout.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/login',
            name: 'login',
            component: () => import('../views/LoginView.vue'),
        },
        {
            path: '/',
            component: PanelLayout,
            children: [
                {
                    path: '',
                    name: 'home',
                    component: () => import('../views/HomeView.vue'),
                },
                {
                    path: 'testing',
                    name: 'testing',
                    component: () => import('../views/TestingView.vue'),
                },
                {
                    path: 'analysis',
                    name: 'analysis',
                    component: () => import('../views/AnalysisView.vue'),
                },
                {
                    path: 'docs',
                    name: 'docs',
                    component: () => import('../views/DocsView.vue'),
                },
            ]
        },
    ],
})

export default router
