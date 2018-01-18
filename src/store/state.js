const state = {
    me: {
      id: 0,
      avatar: '',
      username: '',
      tweets: [],
      is_following: false,
      cover: '',
      bio: '',
      following: [],
      followers: [],
      tweets_count: 0
    },
    feed: [],
    profilePage: {
       profile: {
           bio: 'I am misakar'
       },
       avatar: 'https://pbs.twimg.com/profile_images/947471782776225793/yO6Kkg39_400x400.jpg',
       username: 'misakar',
       tweets: [],
       is_following: false,
       cover: 'https://user-images.githubusercontent.com/10671733/35020309-5ee15ae2-fb66-11e7-8f3a-8dcb44110a18.jpg',
       created_at: ''
    },
    tweetDetail: {
       user: {},
       replies: []
    },
    openTweetDetails: null,
    followSuggestions: [],
    isLoading: false,
    isLogin: !!!!localStorage.getItem("music_token"),
    token: localStorage.getItem("music_token"),
    appName: 'Music'
}

export default state
