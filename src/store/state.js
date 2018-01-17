const state = {
    me: {},
    feed: ["hahaha1", "hahaha2"],
    profilePage: {
        profile: {
            bio: 'I am misakar'
        },
        avatar: 'https://pic3.zhimg.com/v2-ede1b0034c587c3d4cb7d7b1d24d7985_xl.jpg',
        username: 'misakar',
        tweets: [],
        is_following: false
    },
    tweetDetail: {
        user: {},
        replies: []
    },
    openTweetDetails: null,
    followSuggestions: [],
    isLoading: false,
    appName: 'Music'
}

export default state
