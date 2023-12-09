import { AppError } from '@/utils/AppErros';
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.0.4:3333'
})

api.interceptors.response.use(response => response, error => {
  if (error.response && error.response.data) {
    return Promise.reject(new AppError(error.response.data.message))
  }else {
    return Promise.reject(error)
  }
})

export { api };
