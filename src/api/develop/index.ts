import { get } from '@/utils/axios/index'
export const HomeConfig = (params?: any) => get('/home/config', params)
