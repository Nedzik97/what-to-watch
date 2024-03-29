import axios, { AxiosInstance, AxiosRequestConfig, AxiosError } from 'axios';
import { API_URL, REQUEST_TIMEOUT } from '../utils/constants';
import { StatusCodes } from 'http-status-codes';
import { getToken } from './token';
import { toast } from 'react-toastify';

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: API_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const token = getToken();

      if (token && config.headers) {
        config.headers['x-token'] = token;
      }

      return config;
    },
  );

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<{ error: string }>) => {
      if (error.response?.status === StatusCodes.UNAUTHORIZED) {
        const token = getToken();
        if (token) {
          toast.warn('You\'re not logged in. Some features are not available', { toastId: error.code });
        }
      }
      if (error.response?.status === StatusCodes.NOT_FOUND) {
        toast.error(error.response.data.error, { toastId: error.code });
      }
      throw error;
    }
  );

  return api;
};
