import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Highlight from './comment/js/highlight'
import { gl_ajax } from './comment/api/server'
import store from './store/index.js'
Vue.use(ElementUI);
Vue.use(Highlight)

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