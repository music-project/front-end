const state = {
    me: {
      avatar: 'https://pbs.twimg.com/profile_images/947471782776225793/yO6Kkg39_400x400.jpg',
      username: 'misakar',
      tweets: ['this is my first tweets'],
      is_following: false,
      cover: 'https://user-images.githubusercontent.com/10671733/35020309-5ee15ae2-fb66-11e7-8f3a-8dcb44110a18.jpg',
      bio: 'I am misakar'
    },
    feed: [
        {
          id: 1,
          user: {
      avatar: 'https://pbs.twimg.com/profile_images/947471782776225793/yO6Kkg39_400x400.jpg',
      username: 'misakar',
      tweets: ['this is my first tweets'],
      is_following: false,
      cover: 'https://user-images.githubusercontent.com/10671733/35020309-5ee15ae2-fb66-11e7-8f3a-8dcb44110a18.jpg',
      bio: 'I am misakar'
    },
          body: '这首歌很好听啊啊啊啊!<div id="aplayer1" class="aplayer" style="width:30%;"><script src="https://cdn.bootcss.com/aplayer/1.6.0/APlayer.min.js"></script> <script> var ap = new APlayer({ element: document.getElementById("aplayer1"), music: { title: "我是一首歌", author: "misakar",url: "http://m10.music.126.net/20180113155031/be9cbe3b7a8cee3b1f9025b61b8ed77a/ymusic/1e9a/6fcb/fbad/ab7163310afd534e125c40729cf61910.mp3"',
          created_at: '20170117',
          replies_count: 666,
          likes_count: 2333
        },

{
          id: 2,
          user: {
      avatar: 'https://pbs.twimg.com/profile_images/948428791323308032/gNxKROtO_bigger.jpg',
      username: 'misakar',
      tweets: ['this is my first tweets'],
      is_following: false,
      cover: 'https://user-images.githubusercontent.com/10671733/35020309-5ee15ae2-fb66-11e7-8f3a-8dcb44110a18.jpg',
      bio: 'I am misakar'
    },
          body: "朱承浩你真的完蛋啦!",
          created_at: '20170117',
          replies_count: 666,
          likes_count: 2333
        },
{
          id: 3,
          user: {
      avatar: 'https://pbs.twimg.com/profile_images/917536371085950976/MIuNwAAR_bigger.png',
      username: 'misakar',
      tweets: ['this is my first tweets'],
      is_following: false,
      cover: 'https://user-images.githubusercontent.com/10671733/35020309-5ee15ae2-fb66-11e7-8f3a-8dcb44110a18.jpg',
      bio: 'I am misakar'
    },
          body: "<img src='https://user-images.githubusercontent.com/10671733/35020309-5ee15ae2-fb66-11e7-8f3a-8dcb44110a18.jpg'>",
          created_at: '20170117',
          replies_count: 666,
          likes_count: 2333
        }

    ],
    profilePage: {
       profile: {
           bio: 'I am misakar'
       },
       avatar: 'https://pbs.twimg.com/profile_images/947471782776225793/yO6Kkg39_400x400.jpg',
       username: 'misakar',
       tweets: [],
       is_following: false,
       cover: 'https://user-images.githubusercontent.com/10671733/35020309-5ee15ae2-fb66-11e7-8f3a-8dcb44110a18.jpg'
    },
    tweetDetail: {
       user: {},
       replies: []
    },
    openTweetDetails: null,
    followSuggestions: [
        {
          id: 1,
          username: 'misakar',
          name: 'misakar',
          avatar: 'https://pbs.twimg.com/profile_images/947471782776225793/yO6Kkg39_400x400.jpg'
        },
        {
          id: 2,
          username: 'misakar',
          name: 'misakar',
          avatar: 'https://pbs.twimg.com/profile_images/947471782776225793/yO6Kkg39_400x400.jpg'
        },
        {
          id: 3,
          username: 'misakar',
          name: 'misakar',
          avatar: 'https://pbs.twimg.com/profile_images/947471782776225793/yO6Kkg39_400x400.jpg'
        },
        {
          id: 4,
          username: 'misakar',
          name: 'misakar',
          avatar: 'https://pbs.twimg.com/profile_images/947471782776225793/yO6Kkg39_400x400.jpg'
        },
    ],
    isLoading: false,
    isLogin: !!!!localStorage.getItem("music_token"),
    token: '',
    appName: 'Music'
}

export default state
