import Vue from 'vue'

import VueFire from 'vuefire'

import App from './App.vue'

Vue.use(VueFire)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
