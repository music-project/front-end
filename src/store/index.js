import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    me: {},
    feed: [],
    profilePage: {
      profile: {
        bio: ''
      },
      avatar: '',
      username: '',
      tweets: [],
      is_following: false
    },
    tweetDetail: {
      user: {},
      replies: {}
    },
    openTweetDetails: null,
    followSuggestions: [],
    isLoading: false,
    appName: 'Music'
  }
})

export default store
