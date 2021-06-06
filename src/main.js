import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import 'bootstrap'

import Exercise1 from '@/exercise1/Exercise1';
import Exercise2 from '@/exercise2/Exercise2';

Vue.use(VueRouter)

Vue.config.productionTip = false

const routes = [
  { path: '/', component: Exercise1 },
  { path: '/exercise2', component: Exercise2 }
];

const router = new VueRouter({
  routes,
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
