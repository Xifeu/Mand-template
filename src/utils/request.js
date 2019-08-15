import axios from 'axios'
import { Toast } from 'mand-mobile'
// 创建axios实例
axios.defaults.withCredentials = true
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 60000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(config => {
  return config
}, error => {
  Promise.reject(error)
})

service.interceptors.response.use(
  response => {
    const res = response.data
    return res
  },
  error => {
    if (error.message.indexOf('timeout') !== -1) {
      Toast.info(`网络超时，请稍后再试`)
    } else if (error.message === 'Network Error') {
      Toast.info(`网络错误`)
    } else {
      Toast.info(`服务器开小差了，请稍后再试`)
    }
    return Promise.reject(error)
  }
)

export default service
