// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import * as FastClick from 'fastclick'
import App from './App'
import router from './router'
import store from './store'

import 'reset.css'
import 'normalize.css'
import './styles/global.scss'

import mandMobile from 'mand-mobile'
import 'mand-mobile/lib/mand-mobile.css'
Vue.use(mandMobile)

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
