// axios
import axios from 'axios'

// Create an Instance
const http = axios.create({
    baseURL: 'http://127.0.0.1:8000/api'
    // baseURL: 'http://118.25.41.147:5000/api'
});

export default http
