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
          body: "朱承浩你完蛋啦!",
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
    followSuggestions: ['neo1218', 'zxc0328'],
    isLoading: false,
    appName: 'Music'
}

export default state
