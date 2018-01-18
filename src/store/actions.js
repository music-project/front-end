import { http, str } from '../utils'
import router from '../router'

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
            window.location.href = '/login/'
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
    http.post('/token/', data, {headers:headers}, {withCredentials: true}).then((res) => {
        if (res.data.state == 200) {
            // user token login
            var token = res.data.token
            alert('token: ' + token)
            localStorage.setItem('music_token', token)
            // login state mutation
            commit('Login_User')
            // redirect to home
            window.location.href = '/'
        }
        // else: error handle
    })
}

export const searchMusic = ({ commit }, data) => {
    alert(data.music+ ' ' + data.artist)
}
