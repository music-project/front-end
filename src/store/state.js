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
       bio: 'I am misakar',
       avatar: 'https://pbs.twimg.com/profile_images/947471782776225793/yO6Kkg39_400x400.jpg',
       username: 'misakar',
       tweets: [
         {
           "url": "http://ws.stream.qqmusic.qq.com/C100001IAqkK0p2b7s.m4a?fromtag=38",
           "comments": [],
           "is_like": false,
           "id": 100,
           "pic": 'https://y.gtimg.cn/music/photo_new/T002R300x300M000004AVLcx2s4mVT.jpg?max_age=2592000',
           "timestamp": "2018-01-17 19.20.12345",
           "music": "Shelter",
           "artist": "Alan Walker",
           "user": {
               'id': 1,
               'avatar': 'https://pbs.twimg.com/profile_images/947471782776225793/yO6Kkg39_400x400.jpg',
               'username': 'misakar',
               'tweets': [],
               'is_following': false,
               'cover': 'https://user-images.githubusercontent.com/10671733/35020309-5ee15ae2-fb66-11e7-8f3a-8dcb44110a18.jpg',
              'bio': 'I am misakar'
           },
         },
       ],
       is_following: false,
       cover: 'https://user-images.githubusercontent.com/10671733/35020309-5ee15ae2-fb66-11e7-8f3a-8dcb44110a18.jpg',
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
