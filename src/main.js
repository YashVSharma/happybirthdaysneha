import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import {routes} from './routes'

Vue.use(VueRouter);

const router=new VueRouter({
  routes
})
export const eventBus=new Vue();

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
