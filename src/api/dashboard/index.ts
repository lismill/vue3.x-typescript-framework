import { get } from '@/utils/axios/index'
export const HomeConfig = (params: any) => get('api/home-config', params)
