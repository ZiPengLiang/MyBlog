import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'Home',
            component: resolve => require(['@/components/Home'], resolve)
        },
        {
            path: '/home',
            name: 'Home',
            component: resolve => require(['@/components/Home'], resolve)
        },
        {
            path: '/login',
            name: 'login',
            component: resolve => require(['@/components/login'], resolve)
        }
    ]
})