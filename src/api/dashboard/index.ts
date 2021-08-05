import httpRequest from '@/utils/axios/index'
import { AxiosRequestConfig } from 'axios'

export const homeConfig = async (params: AxiosRequestConfig): Promise<any> => httpRequest.get('api/home-config', params)
export const setConfig = async (params: AxiosRequestConfig): Promise<any> => httpRequest.post('api/set-config', params)
