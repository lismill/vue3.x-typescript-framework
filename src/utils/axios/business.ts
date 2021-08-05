import { AxiosRequestConfig, AxiosResponse } from 'axios'
/**
 * 拦截请求和相应处理相应的业务逻辑
 */
export default {
  request(config: AxiosRequestConfig): AxiosRequestConfig {
    console.log('请求拦截器处理业务逻辑', config)
    return config
  },
  response(response: AxiosResponse): AxiosResponse {
    console.log('返回拦截器处理业务逻辑', response)
    return response
  }
}
