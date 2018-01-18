<template>
<div id="app-wrap">
    <nav class="navbar ">
        <div class="container" :class="{'is-loading': isLoading}">
            <div class="navbar-brand">
                <a href="/" class="navbar-item">
                    <img src="./assets/logo.png" alt="Music" height="38">
                    Music
                </a>
                <div data-target="navMenubd-example" class="navbar-burger burger">
                    <span></span> <span></span> <span></span>
                </div>
            </div>
            <div id="navMenubd-example" class="navbar-menu">
                <div class="navbar-start"></div>
                <div class="navbar-end" v-if="isLogin">
                    <div class="navbar-item has-dropdown is-hoverable">
                        <a href="#" class="navbar-link  is-active"><img :src="me.avatar" alt="" class="is-circle">
                        </a>
                        <div class="navbar-dropdown is-boxed is-right">
                            <div class="navbar-item">{{ me.username }}</div>

                            <router-link class="navbar-item" to="/">
                                <strong>Home</strong>
                            </router-link>
                            <router-link class="navbar-item" :to="{ name: 'profile', params: { username: me.username }}">
                                <strong>Profile</strong>
                            </router-link>

                            <hr class="navbar-divider"> 
                            <a href="" v-on:click="Logout" class="navbar-item">
                                <strong>Logout</strong>
                            </a>
                            <form id="logout-form" action="http://localhost:8000/logout" method="POST" style="display: none;">
                                <input type="hidden" name="_token" value="c91zxFt0PHQZyqHkOIorF2iEgBtwW5qpDc3Nbc12">
                            </form>
                        </div>
                    </div>
                <!--div class="navbar-end" v-else>
                    登录
                </div-->
                </div>
            </div>
        </div>
    </nav>

    <!--Tweet details popup-->
    <tweet-detail
            @close="closePopup"
            v-if="openTweetDetail != null"
            :tweet-id="openTweetDetail"></tweet-detail>

    <transition name="content">
        <router-view></router-view>
    </transition>

    <!-- main router view outlet -->
</div>
<!-- end app wrap -->
</template>

<script>
import TweetDetail from './components/TweetDetail'
export default {
  components: {TweetDetail},
  computed: {
    isLoading () {
      return this.$store.getters.isLoading
    },
    me () {
      return this.$store.getters.me
    },
    openTweetDetail () {
      return this.$store.getters.openTweetDetails
    },
    isLogin () {
      return this.$store.getters.isLogin 
    }
  },
  created () {
      // alert('app vue')
      this.$store.dispatch('loginCurrentUser', {token: localStorage.getItem("music_token")})
  },
  methods: {
    closePopup () {
      this.$store.commit('OPEN_TWEET_DETAIL', null)
    },
    Logout () {
      this.$store.commit('Logout_User')
      this.$router.push('login')
    }
  }
}
</script>
