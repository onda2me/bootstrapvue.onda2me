import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
//import bootstrap from 'bootstrap'
//import { BootstrapVue3, NavbarPlugin } from 'bootstrap-vue-3'
import { BootstrapVue3} from 'bootstrap-vue-3'
import LayoutHeader from './components/layout/Header.vue'


// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

const Vue = createApp(App)

Vue.mount('#app')
Vue.config.productionTip = false

//Vue.use(bootstrap)
Vue.use(BootstrapVue3)
//Vue.use(NavbarPlugin)
Vue.use(router)
Vue.component(LayoutHeader.name, LayoutHeader)

/*
vue 2
import Vue from 'vue'
import App from './App.vue'

//import router from './router'


new Vue({
  //router,
  render: h => h(App),
}).$mount('#app')
*/





/*
createApp(App).mount('#app')

new Vue({
    router,
    render: h => h(App),
  }).$mount('#app')
*/
