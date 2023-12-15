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
  const interceptTokenManager = api.interceptors.response.use(response => response, error => {
    if (error.response && error.response.data) {
      return Promise.reject(new AppError(error.response.data.message))
    }else {
      return Promise.reject(error)
    }
  })

  return () => {
    api.interceptors.response.eject(interceptTokenManager)
  }
    
}

export { api };
