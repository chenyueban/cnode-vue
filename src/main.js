import Vue from 'vue';
// import iView from 'iview';
import 'iview/dist/styles/iview.css';
import App from './App.vue';
import router from './router';
import store from './store';
import service from './service';

Vue.prototype.$api = service;

Vue.config.productionTip = false;

// Vue.use(iView);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
