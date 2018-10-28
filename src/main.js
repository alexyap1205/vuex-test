import Vue from 'vue'
import App from './App.vue'
import {store} from './store/store';
import BootstrapVue from 'bootstrap-vue'

Vue.config.productionTip = false;
Vue.use(BootstrapVue);

new Vue({
    render: h => h(App),
    store: store,
}).$mount('#app')
