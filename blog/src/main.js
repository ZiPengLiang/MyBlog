import 'babel-polyfill'
// import Vue from 'vue'
import App from './App'
import router from './router'
// import axios from 'axios'
import {
    Carousel,
    CarouselItem,
    Container,
    Main,
    Pagination,
    Backtop,
    Loading,
    Icon,
} from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import Highlight from './comment/js/highlight'
// import mountclick from './comment/js/mountclick'
import { gl_ajax } from './comment/api/server'
import store from './store/index.js'
// import './comment/js/mountclick.js'
Vue.component(Carousel.name, Carousel)
Vue.component(CarouselItem.name, CarouselItem)
Vue.component(Container.name, Container)
Vue.component(Main.name, Main)
Vue.component(Pagination.name, Pagination)
Vue.component(Backtop.name, Backtop)
Vue.component(Icon.name, Icon)
Vue.use(Loading.directive);
Vue.use(Highlight)
    // Vue.use(mountclick)
Vue.prototype.axios = axios;
Vue.prototype.gl_ajax = gl_ajax;
axios.defaults.headers.post["Content-Type"] = "application/json; charset=UTF-8";
Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})