import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
Vue.prototype.$baseURL = "http://remi.net.au/gwa-app/wp-json"

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
