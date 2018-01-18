<template>
    <div class="bg-light is-fullheight p-t-2">
        <div class="container">
            <div class="columns">
                <div class="column is-3" style="position:fix">
                    <div class="is-sticky" style="top: 5rem;">
                        <profile-card :user="me"></profile-card>
                    </div>
                    <!-- end profile card -->
                </div>
                <!--end sidebar-->

                <div class="column is-6">
                    <div class="card">
                        <tweet-box :user="me"></tweet-box>
                        <tweet-list :tweets="tweets"></tweet-list>
                    </div>
                </div>
                <!--end main content area-->

                <div class="column is-3">
                    <div class="is-sticky" style="top: 5rem;">
                        <follow-suggestions></follow-suggestions>
                        <side-footer></side-footer>
                    </div>
                </div>
                <!--end right sidebar-->
            </div>
        </div>
    </div>
</template>

<script>
import ProfileCard from '../components/ProfileCard'
import TweetBox from '../components/TweetBox'
import TweetList from '../components/TweetList'
import FollowSuggestions from '../components/FollowSuggestions'
import SideFooter from '../components/SideFooter'

export default {
  components: {
      ProfileCard,
      TweetBox,
      TweetList,
      FollowSuggestions,
      SideFooter
  },
  data () {
    return {
      loading: false,
      nextOffset: 26,
      perPage: 26,
      noMoreTweets: false
    }
  },
  computed: {
    me () {
      return this.$store.getters.me
    },
    tweets () {
      return this.$store.getters.feed
    }
  },
  created () {
    this.fetchFeed()
    console.log('Get user feed')
  },
  methods: {
    fetchFeed () {
      // alert('dashboard vue')
      this.noMoreTweets = false
      // alert(this.$store.getters.me.id)
      this.$store.dispatch('getDashboardFeed', this.$store.getters.me)
    },
    /*
    loadMore () {
      let vm = this
      vm.loading = true
      this.$store.dispatch('getDashboardFeed', {offset: this.nextOffset}).then(function (res) {
        vm.loading = false

        if (res.data.tweets.length === vm.perPage) {
          vm.nextOffset = vm.nextOffset + vm.perPage
        } else {
          vm.noMoreTweets = true
        }
      })
    }
    */
  },
  watch: {
    '$route' () {
      this.fetchFeed()
    }
  }
}
</script>
