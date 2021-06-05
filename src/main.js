import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import  VueScrollTo from 'vue-scrollto';

Vue.config.productionTip = false


import '@/assets/styles/main.scss';
import '@mdi/font/css/materialdesignicons.css'

Vue.use(VueScrollTo, {
  container: "body",
  duration: 200,
  offset: -100,
  easing: 'linear',
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
