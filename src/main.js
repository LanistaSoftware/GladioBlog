import Vue from 'vue'
import App from './App.vue'
import {router} from './router'
import Axios from 'axios' 
import {store} from './store/store'
export const eventBus= new Vue();



new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
