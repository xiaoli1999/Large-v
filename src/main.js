import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ViewUI from 'view-design'
import './less/common.less'
ViewUI.Notice.config({
    top: 60
})
Vue.use(ViewUI)
Vue.config.productionTip = false

Vue.prototype.$APP_VERSION = process.env.VUE_APP_VERSION
Vue.prototype.$VUE_APP_DTU_API_URL = process.env.VUE_APP_DTU_API_URL
Vue.prototype.$IS_PROD = process.env.NODE_ENV === 'production'

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')