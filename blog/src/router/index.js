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
            path: '/introduction',
            name: 'Introduction',
            component: resolve => require(['@/components/introduction'], resolve)
        },
        {
            path: '/diary',
            name: 'Diary',
            component: resolve => require(['@/components/diary'], resolve)
        }, {
            path: '/article',
            name: 'Article',
            component: resolve => require(['@/components/article'], resolve)
        }
    ]
})