<template>
    <article class="media tweet">
        <figure class="media-left">
            <p class="image is-64x64 is-circle">
                <router-link :to="{ name: 'profile', params: { username: tweetData.user.username }}">
                    <img :src="tweetData.user.avatar">
                </router-link>
            </p>
        </figure>

        <div class="media-content">
            <div class="content">
                <p class="tweet-meta">
                    <router-link class="has-text-dark" :to="{ name: 'profile', params: { username: tweetData.user.username }}">
                        <strong>{{ tweetData.user.name }}</strong>
                    </router-link>
                    <strong>@{{ tweetData.user.username }}</strong>
                    <small class="has-text-grey-light">{{ tweetData.timestamp.split('.')[0] }}</small>
                </p>
                <br>
                <div class="tweet-body has-text-grey"> <!--@click="tweetDetail"--> 
                    <aplayer :music="{
                        title: tweetData.music,
                        author: tweetData.artist,
                        url: tweetData.url,
                        pic: tweetData.pic
                    }"></aplayer>
                </div>
            </div>

            <nav class="level is-mobile">
                <div class="level-left">
                    <a class="level-item has-text-grey-light">
                        <span class="icon is-small"><i class="fa fa-comment-o"></i></span> <small> {{ tweetData.replies_count }}</small>
                    </a>

                    <a class="level-item has-text-grey-light">
                        <span class="icon is-small"><i class="fa fa-heart"></i></span> <small> {{ tweetData.likes_count }}</small>
                    </a>
                </div>
            </nav>
        </div>
        <div class="media-right" v-if="me.username === tweetData.user.username">
            <button @click="remove(tweetData.id)" class="delete"></button>
        </div>
    </article>
</template>

<script>
import TweetDetail from "./TweetDetail"
import Aplayer from 'vue-aplayer'

export default {
  components: {TweetDetail, Aplayer},
  name: 'Tweet',
  props: ['tweet'],
  data () {
    return {
      tweetData: this.tweet
    }
  },
  computed: {
    me () {
      return this.$store.getters.me
    }
  },
  methods: {
    tweetDetail() {
      this.$store.commit('OPEN_TWEET_DETAIL', this.tweet.id)
    },
    remove (tweetId) {
      if( window.confirm('对这首歌不感兴趣吗?') ) {
          this.$store.commit('DELETE_TWEET', tweetId)
      }
    }
  }
}
</script>
