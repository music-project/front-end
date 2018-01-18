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

export const searchMusic = ({ commit }, data) => {
    // alert(data.music+ ' ' + data.artist)
    var music = data.music
    var artist = data.artist
    // http.post('/music/search/?' + 'music=' + music + '&' + 'artist=' + artist).then(res)
}
