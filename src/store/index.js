const state = {
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

export default state
