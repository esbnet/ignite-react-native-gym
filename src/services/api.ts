import { storageAuthTokenGet } from '@/storage/storageAuthToken';
import { AppError } from '@/utils/AppErros';
import axios, { AxiosError, AxiosInstance } from 'axios';

type SignOut = () => void;

type PromiseType = {
  onSuccess: (token: string) => void
  onFailure: (error: AxiosError) => void
}

type AIPInstanceProps = AxiosInstance & {
  registerInterceptTokenManager: ( signOut: SignOut) => () => void
};

const api = axios.create({
  baseURL: 'http://192.168.0.4:3333'
}) as AIPInstanceProps;

let failedQueue: Array<PromiseType> = [];
let isRefreshing = false;

api.registerInterceptTokenManager = (signOut) => {
  const interceptTokenManager = api.interceptors.response.use(response => response, async (requestError) => {

    if (requestError.response?.status === 401) {

      if (requestError.response.data?.message === 'token.expired' || requestError.response.data?.message === 'token.invalid') {
        const { refreshToken } = await storageAuthTokenGet()

        if (!refreshToken) {
          signOut()
          return Promise.reject(requestError)
        }

        const originalConfig = requestError.config

        if (isRefreshing) {
          return new Promise((resolve, reject) => {
            failedQueue.push({
              onSuccess: (token: string) => {
                originalConfig.headers['Authorization'] = `Bearer ${token}`
                resolve(api(originalConfig))
              },
              onFailure: (error: AxiosError) => {
                reject(error)
              }
            })
          })
          
        }

        isRefreshing = true
        

      }
      signOut()
    }

    
    if (requestError.response && requestError.response.data) {
      return Promise.reject(new AppError(requestError.response.data.message))
    }else {
      return Promise.reject(requestError)
    }
  })

  return () => {
    api.interceptors.response.eject(interceptTokenManager)
  }
}

export { api };
