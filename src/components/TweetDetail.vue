<template>
<transition name="modal">
    <div class="modal-mask">
        <div class="modal-wrapper">
            <a class="button-close delete is-large" @click="$emit('close')"></a>

            <div class="modal-container modal-loading" style="height: 30vh" :class="{'is-loading' : loading }" v-show="loading"></div>

            <div class="modal-container" v-if="!loading">
                <div class="modal-header">
                   <div class="level">
                       <div class="level-left">
                           <article class="media">

                               <figure class="media-left">
                                   <a href="" class="has-text-dark" @click.prevent="goToProfile(tweetDetails.user.username)">
                                       <p class="image is-circle is-64x64">
                                           <img :src="tweetDetails.user.avatar">
                                       </p>
                                   </a>
                               </figure>

                               <div class="media-content">
                                   <div class="content">
                                       <p>
                                           <a href="" class="has-text-dark" @click.prevent="goToProfile(tweetDetails.user.username)">
                                                <strong>{{ tweetDetails.user.name }}</strong> <br>
                                           </a>
                                           <small class="has-text-grey">@{{ tweetDetails.user.username }}</small>
                                       </p>
                                   </div>
                               </div>

                           </article>
                       </div>
                       <div v-if="me.username != tweetDetails.user.username" class="level-right">
                           <follow-button class="is-outlined" :user="tweetDetails.user" :following="tweetDetails.user.is_following"></follow-button>
                       </div>
                   </div>
                </div>
                <!--end tweet header-->

                <div class="modal-body">

                    <div class="tweet-body is-size-4" v-html="tweetDetails.body"></div>

                    <div class="tweet-meta m-t-1 level">
                        <div class="level-left">
                            <p class="has-text-grey-light">{{ tweetDetails.updated_at }} &bullet; {{ tweetDetails.created_at }} </p>
                        </div>
                        <div class="level-right">
                            <div class="level-item has-text-grey-light">
                                <span class="icon is-small">
                                    <i class="fa fa-reply"></i>
                                </span>
                                <small> {{ tweetDetails.replies.length || 0 }}</small>
                            </div>

                            <div class="level-item has-text-grey-light">
                                <span class="icon is-small">
                                    <i class="fa fa-heart"></i>
                                </span>
                                <small> {{ tweetDetails.likes_count || 0 }}</small>
                            </div>
                        </div>
                    </div>
                </div>
                <!--end modal body-->

                <div class="modal-footer">
                    <tweet-box placeholder="Reply your thoughts..." btn-text="Reply" :user="me" :is-reply="true" class="m-b-1"></tweet-box>

                    <div class="replies">
                        <article v-for="(reply, index) in tweetDetails.replies" class="media reply p-l-1" :key='index'>
                            <figure class="media-left">
                                <p class="image is-64x64 is-circle">
                                    <img :src="reply.user.avatar">
                                </p>
                            </figure>
                            <div class="media-content">
                                <div class="content">
                                    <div class="has-text-grey reply-body" v-html="reply.body"></div>
                                    <div class="reply-meta p-x-1">
                                        <div class="level">
                                            <div class="level-left">
                                                <a class="has-text-grey" href="" @click.prevent="goToProfile(reply.user.username)">
                                                    <strong>{{ reply.user.name }}</strong> <small class="has-text-grey-light">@{{ reply.user.username }}</small>
                                                </a>
                                            </div>
                                            <div class="level-right">
                                                <small class="has-text-primary">{{ reply.created_at }}</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="media-right">
                                <button @click="remove(index)" v-if="reply.user.username === me.username" class="delete"></button>
                            </div>
                        </article>
                    </div>
                </div>
                <!--end modal footer-->

            </div>
        </div>
    </div>
</transition>
</template>

<script>
// import FollowButton from './FollowButton'
// import TweetBox from './TweetBox'
export default {
//   components: {
//     TweetBox,
//     FollowButton
//   },
  name: 'TweetDetail',
  props: ['tweetId'],
  data () {
    return {
      loading: true
    }
  },
  computed: {
    tweetDetails () {
      return this.$store.getters.tweetDetail
    },
    me () {
      return this.$store.getters.me
    }
  },
  created () {
    this.fetchTweetDetails()
    document.body.classList.add('popup-shown')
    console.log('TweetDetail Component created.')
  },
  destroyed () {
    document.body.classList.remove('popup-shown')
    console.log('TweetDetail Component destroyed.')
  },
  methods: {
    fetchTweetDetails () {
      let vm = this
      vm.loading = true
      // Reset old tweet details
      vm.$store.commit('ADD_TWEET_DETAIL', {
        user: {},
        replies: []
      })
      this.$store.dispatch('getTweetDetails', { id: this.tweetId }).then((res) => {
        vm.loading = false
      })
    },
    remove (index) {
      if (window.confirm('Are you sure want to delete this reply?')) {
        this.$store.commit('DELETE_REPLY', index)
      }
    },
    goToProfile (username) {
      this.$emit('close')
      this.$router.push({name: 'profile', params: { username: username }})
    }
  }
}
</script>
