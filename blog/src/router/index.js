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
            path: '/aboutme',
            name: 'aboutme',
            component: resolve => require(['@/components/aboutme'], resolve)
        },
        {
            path: '/article',
            name: 'Article',
            component: resolve => require(['@/components/article'], resolve)
        }, {
            path: '/category/:id',
            name: 'category',
            component: resolve => require(['@/components/category'], resolve)
        }, {
            path: '/links',
            name: 'Links',
            component: resolve => require(['@/components/links'], resolve)
        },
        { path: '*', component: resolve => require(['@/components/NotFoundComponent'], resolve) }
    ]
})