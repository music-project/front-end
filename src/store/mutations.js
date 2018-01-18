// register user
// import containV from '../utils'
//
export const Regist_User = state => {

}

export const Login_User = (state, user) => {
    state.isLogin = localStorage.getItem("music_token")
    state.me = user
}

export const Logout_User = state => {
    localStorage.removeItem("music_token")
    localStorage.removeItem("me")
    state.isLogin = localStorage.getItem("music_token")
}

export const Update_Feed = (state, musics) => {
    state.feed = musics
}

export const Update_Tweets_Cnt = (state, cnt) => {
    state.me.tweets_count = cnt
}



export const Suggest_User = (state, users) => {
    state.followSuggestions = users
}

/* ---------------------------------------------------- */

// Add me user
export const ADD_ME = (state, user) => {
    state.me = user
}

// Toggle loading
export const TOGGLE_LOADING = state => {
    state.isLoading = !state.isLoading
}

// Add a tweet details
export const ADD_TWEET_DETAIL = (state, tweet) => {
    state.tweetDetail = tweet;
}

// Open Tweet Details
export const OPEN_TWEET_DETAIL = (state, id) => {
    state.openTweetDetails = id;
}

// Add profilePage
export const PROFILE_PAGE = (state, data) => {
    state.profilePage = data;
}

// Add follow suggestions
export const ADD_FOLLOW_SUGGESTIONS = (state, data) => {
    state.followSuggestions = data;
}

// Increment follow user
export const INCREMENT_FOLLOW_USER_COUNT = (state) => {
    state.me.following_count++;
}

// Decrement follow user
export const DECREMENT_FOLLOW_USER_COUNT = (state) => {
    state.me.following_count--;
}

// Add follow suggestions
export const REMOVE_FROM_FOLLOW_SUGGESTION = (state, user) => {
    let index = state.followSuggestions.indexOf(user);

    // remove after 1 second
    setTimeout(function () {
        state.followSuggestions.splice(index, 1);
    }, 1000);
}

// Add Tweets to feed
export const ADD_TWEETS_IN_FEED = (state, tweets) => {
    state.feed = tweets;
}

// Append Tweets to feed
export const APPEND_TWEETS_IN_FEED = (state, tweets) => {
    tweets.forEach((tweet) => {
        state.feed.push(tweet);
    })
}

// Prepend Tweets to feed
export const PREPEND_TWEET_IN_FEED = (state, tweet) => {
    state.feed.unshift(tweet);
    state.me.tweets_count++;
}

// Prepend Reply in a Tweet
export const PREPEND_REPLY_IN_TWEET = (state, reply) => {
    state.tweetDetail.replies.unshift(reply);
    state.tweetDetail.replies_count++;
}

// Delete a tweet by id
export const DELETE_TWEET = (state, tweetId) => {
    // find tweet
    let index = state.feed.findIndex( (tweet) => {
        return tweet.id == tweetId
    });

    if( index !== -1 ) {
        state.feed.splice(index, 1);
    }
}

// Delete reply
export const DELETE_REPLY = (state, index) => {
    state.tweetDetail.replies.splice(index, 1);
}
