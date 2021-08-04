import axios, { AxiosRequestConfig } from 'axios'

const BASE_URL = process.env.VUE_APP_BASE_URL ?? '/'
const service = axios.create({
  baseURL: BASE_URL,
  timeout: 1000 * 10
})

// 拦截请求数据
service.interceptors.request.use((config: AxiosRequestConfig) => {
  // do something
  return config
}, (error: any) => Promise.reject(error))

// 拦截返回数据
service.interceptors.response.use(response => {
  return new Promise((resolve, reject) => response.data.errCode === 0 ? resolve(response.data) : reject(response))
}, (error: any) => Promise.reject(error))

/**
 * get 方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params[请求携带的参数]]
 * @returns { Promise }
 */
export const get = (url: string, params: AxiosRequestConfig): Promise<any> => new Promise((resolve, reject) => service.get(url, { params: params }).then(response => resolve(response.data)).catch(error => reject(error)))

/**
 * post 方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params[请求携带的参数]]
 * @returns { Promise }
 */
export const post = (url: string, params: AxiosRequestConfig): Promise<any> => new Promise((resolve, reject) => service.post(url, params).then(response => resolve(response.data)).catch(error => reject(error)))

/**
 * delete 方法，对应delete请求
 * @param {String} url [请求的url地址]
 * @param {Object} params[请求携带的参数]]
 * @returns { Promise }
 */
export const del = (url: string, params: AxiosRequestConfig): Promise<any> => new Promise((resolve, reject) => service.delete(url, { params: params }).then(response => resolve(response.data)).catch(error => reject(error)))

/**
 * patch 方法，对应patch请求
 * @param {String} url [请求的url地址]
 * @param {Object} params[请求携带的参数]]
 * @returns { Promise }
 */
export const patch = (url: string, params: AxiosRequestConfig): Promise<any> => new Promise((resolve, reject) => service.patch(url, params).then(response => resolve(response.data)).catch(error => reject(error)))

/**
 * put 方法，对应put请求
 * @param {String} url [请求的url地址]
 * @param {Object} params[请求携带的参数]]
 * @returns { Promise }
 */
export const put = (url: string, params: AxiosRequestConfig): Promise<any> => new Promise((resolve, reject) => service.put(url, params).then(response => resolve(response.data)).catch(error => reject(error)))
