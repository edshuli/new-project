import Vue from 'vue'
import App from './App.vue'
import store from "./store.js";


Vue.config.productionTip = false
    /*axios.defaults.baseURL = 'http://localhost:8080'*/

new Vue({
    store,
    render: h => h(App),
}).$mount('#app')