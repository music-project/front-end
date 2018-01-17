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
        if (res.status == 200) {
            commit('Regist_User')
        }
    })
}
