import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'index',
        component: () => import('../views/screen/index.vue')
    }, {
        path: '/demo',
        name: 'demo/index',
        component: () => import('../views/demo/index.vue')
    }
]
const router = new VueRouter({
    mode: "history",
    routes
})

export default router
