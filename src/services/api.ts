import { storageAuthTokenGet } from '@/storage/storageAuthToken';
import { AppError } from '@/utils/AppErros';
import axios, { AxiosInstance } from 'axios';

type SignOut = () => void;

type AIPInstanceProps = AxiosInstance & {
  registerInterceptTokenManager: ( signOut: SignOut) => () => void
};

const api = axios.create({
  baseURL: 'http://192.168.0.4:3333'
}) as AIPInstanceProps;

api.registerInterceptTokenManager = (signOut) => {
  const interceptTokenManager = api.interceptors.response.use(response => response, async (requestError) => {

    if (requestError.response?.status === 401) {

      if (requestError.response.data?.message === 'token.expired' || requestError.response.data?.message === 'token.invalid') {
        const { refreshToken } = await storageAuthTokenGet()

        if (!refreshToken) {
          signOut()
          return Promise.reject(requestError)
        }
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
