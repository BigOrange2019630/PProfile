import Vue from 'vue';
import App from './App.vue';
// import Loading from "./views/Loading.vue";
import router from './router';
import './registerServiceWorker';

Vue.config.productionTip = false;

new Vue({
    router,
    render: (h) => h(App),
    mounted() {
      document.dispatchEvent(new Event('render-event'))
    },
}).$mount('#app');
