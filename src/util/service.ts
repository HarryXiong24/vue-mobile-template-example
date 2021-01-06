import axios from 'axios'
import { decrypt } from './crypto'

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true,              // send cookies when cross-domain requests
  // baseURL: "http://localhost:8080",
  timeout: 5000                          // request timeout
})

// request interceptor
service.interceptors.request.use(
  (config) => {
    // 发送的时候添加token
    if (sessionStorage.getItem('token')) {
      // token存在headers的Authorization里面
      config.headers['Authorization'] = decrypt(sessionStorage.getItem('token'))
    }
    return config
  },
  (error) => {
    // 错误信息
    console.log(error)
    return Promise.reject(error)
  }
)

export default service