// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
window.router = router
import store from './store'
require('./bootstrap')
require('./assets/scss/main.scss');

Vue.config.devtools = true
Vue.config.productionTip = false

Vue.component('profile-card', require('./components/ProfileCard'))
Vue.component('follow-suggestions', require('./components/FollowSuggestions'))
Vue.component('side-footer', require('./components/SideFooter'))

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
