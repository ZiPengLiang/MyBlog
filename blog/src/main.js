import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Highlight from './comment/js/highlight'
Vue.use(ElementUI);
Vue.use(Highlight)

Vue.prototype.axios = axios;
axios.defaults.headers.post["Content-Type"] = "application/json; charset=UTF-8";
Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})