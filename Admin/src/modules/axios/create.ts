import axios from 'axios';

/**
 * 创建一个新的 axios 实例
 */
export function createAxiosInstance() {
  const instance = axios.create({
    baseURL: '',
    method: 'GET',
  });

  // 请求拦截器
  instance.interceptors.request.use(
    (config) => {
      return config;
    },
  );

  // 响应拦截器
  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      return Promise.reject(error);
    },
  );

  return instance;
}
