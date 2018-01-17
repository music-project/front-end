import Vue from 'vue'
import Router from 'vue-router'
/* Page Components */
import Dashboard from '../pages/Dashboard'
import Profile from '../pages/Profile'
import Followers from '../pages/Followers'
import Following from '../pages/Following'
import Login from '../pages/Login'
import Register from '../pages/Register'

Vue.use(Router)

export default new Router({

  // All router active link
  linkActiveClass: 'is-active',
  mode: 'history',

  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/@:username',
      name: 'profile',
      component: Profile,
      props: true
    },
    {
      path: '/@:username/followers',
      name: 'followers',
      component: Followers,
      props: true
    },
    {
      path: '/@:username/following',
      name: 'following',
      component: Following,
      props: true
    },
    {
      path: '/Login',
      name: 'login',
      component: Login,
      props: true
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      props: true
    }
  ],

  scrollBehavior (to, from) {
    return {x: 0, y: 0}
  }
})
