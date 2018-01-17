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
        }
        else if (res.data.state == 502) {
            alert("用户已经注册")
        }
    })
}

export const searchMusic = ({ commit }, data) => {
    alert(data.music+ ' ' + data.artist)
}
