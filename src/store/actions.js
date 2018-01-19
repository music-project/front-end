import { http, str } from '../utils'

export const registUser = ({ commit }, data) => {
    var headers = {
        'Content-Type': 'application/json'
    }
    var data = {
        username: data.username,
        password: data.password
    }
    http.post('/user/', data, headers).then((res) => {
        if (res.data.state == 200) {
            commit('Regist_User')
            window.router.push('login')
        }
        else if (res.data.state == 502) {
            alert("用户已经注册")
        }
    })
}

export const loginUser = ({ commit }, data) => {
    var headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + btoa(data.username + ':' + data.password)
    }
    http.post('/token/', data, {headers:headers}, {withCredentials: true})
    .then((res) => {
        if (res.data.state == 200) {
            var token = res.data.token
            localStorage.setItem('music_token', token)
            var uid = atob(token).split(':')[1]
            return http.get('/user/'+uid+'/', {headers:headers}, {withCredentials: true})
        } // error
    })
    .then((res) => {
        if (res.data.state == 200) {
            var user = res.data.user
            commit('Login_User', user)
            window.router.push('/')
        } // error
    })
}

export const loginCurrentUser = ({ commit }, data) => {
    var token = data.token
    var headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + token
    }
    if (!token) {
        window.router.push('login')
    } else {
        var uid = atob(token).split(':')[1]
        http.get('/user/'+uid+'/', {headers:headers}, {withCredentials: true})
        .then((res) => {
            if (res.data.state == 200) {
                var user = res.data.user
                commit('Login_User', user)
                if (data.from == 'profile') {
                    window.router.push('/@' + user.username)
                }
            }
        })
    }
}

export const upMusic = ({ commit }, data) => {
    var headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + localStorage.getItem('music_token')
    }
    var music = data.music
    var artist = data.artist
    var me = data.me
    var api_url = '/' + me.id + '/music/?music=' + music + '&' + 'artist=' + artist
    http.post(api_url, data, {headers: headers}, {withCredentials: true})
    /*
    .then((res) => {
        if (res.data.state == 200) {
            // var body = '<div id="music_' + res.data.id + '" class="aplayer"></div>'
            var music_data = {
                id: res.data.id,
                url: res.data.url,
                created_at: res.data.timestamp,
                replies_count: res.data.comments.length,
                is_like: res.data.is_like,
                pic: res.data.pic,
                timestamp: res.data.timestamp,
                user: me,
                // body: body,
                music: music,
                artist: artist
            }
            commit('Insert_Feed', music_data)
        }
    })
    */
    getFollowUserSuggestions({commit}, me)
    return getDashboardFeed({ commit }, me)
}

export const getFollowUserSuggestions = ({ commit }, me) => {
    var headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + localStorage.getItem('music_token')
    }
    var api_url = '/' + me.id + '/suggest_users/'
    http.get(api_url, {headers:headers}, {withCredentials: true})
    .then((res) => {
        if (res.data.state == 200) {
            commit('Suggest_User', res.data.users)
        }
    })
}

export const getDashboardFeed = ({ commit }, me) => {
    var headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + localStorage.getItem('music_token')
    }
    var api_url = '/' + me.id + '/music/'
    http.get(api_url, {headers: headers}, {withCredentials: true})
    .then((res) => {
        if (res.data.state == 200) {
            commit('Update_Feed', res.data.musics)
            commit('Update_Tweets_Cnt', res.data.tweets_cnt)
        }
    })
}

export const followUser = ({ commit }, data) => {
    var headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + localStorage.getItem('music_token')
    }
    // alert(data.uname + " " + data.cname)
    var data = {
        cname: data.cname,
        uname: data.uname
    }
    http.post('/follow/', data, {headers:headers}, {withCredentials: true})
    .then((res) => {
        if (res.data.state == 200) {
            /* update state */
        }
    })
}

export const getTweetsByUsername = ({ commit }, data) => { 
    
}
