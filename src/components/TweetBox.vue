<template>
    <div class="card-content bg-light">
        <div class="media">
            <div class="media-content">
                <form action="">
                    <div class="field">
                        <div class="control">
                            <div class='title is-5 is-info'
                                style="text-align:center;color:grey">
                                分享今日最爱的音乐吧
                            </div>
                            <div class="field is-grouped">
                            <p class="control is-expanded">
                              <input id="search" v-model="search" class="input" type="text" :placeholder=placeholder>
                            </p>
                            <p class="control">
                              <button class="button is-outlined is-primary"
                                  @click.prevent="upMusic" :class="{'is-loading': loading}">分享</button>
                            </p>
                            </div>
                        </div>
                        <div class="tags" v-if="search">
                            <!--p>
                            歌曲名: {{ search.split(';')[0] }} &nbsp
                            歌手名: {{ search.split(';')[1] }}
                            </p-->
                        </div>
                        <p v-if="errorMsg" class="help-block help is-danger">{{ errorMsg }}</p>
                    </div>

                    <div class="level">
                        <div class="level-left">
                            <a class="has-text-grey-light">
                                <span class="icon">
                                  <i class="fa fa-image"></i>
                                </span>
                            </a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <!--tweet box end-->
    </div>
</template>

<script>
export default {
  name: 'TweetBox',
  props: {
    user: Object,
    maxLength: {default: 200, type: Number},
    isReply: false,
    btnText: {default: '上传音乐'},
    placeholder: {default: '搜索格式:歌曲名;歌手名'}
  },
  computed: {
    tweetId () {
      return this.$store.getters.tweetDetail.id
    }
  },
  data () {
    return {
      body: '',
      errorMsg: '',
      loading: false,
      search: ''
    }
  },
  created () {
    console.log('TweetBox Component created.')
  },
  methods: {
    displayError (res) {
      if (res.errors) {
        this.errorMsg = res.errors[0].validation.body[0]
      } else {
        this.body = this.errorMsg = ''
      }
    },
    upMusic () {
      this.loading = true
      var music = this.search.split(';')[0]
      var artist = this.search.split(';')[1]
      var me = this.$store.getters.me
      this.$store.dispatch('upMusic', {music: music, artist: artist, me: me})
      .then((res) => {
          this.loading = false
      })
    },
    submit () {
      this.loading = true

      if (this.isReply) {
        this.$store.dispatch('postReply', {body: this.body, id: this.tweetId}).then((res) => {
          this.loading = false
          this.displayError(res)
        })
      } else {
        this.$store.dispatch('postTweet', this.body).then((res) => {
          this.loading = false
          this.displayError(res)
        })
      }
    }
  }
}
</script>
