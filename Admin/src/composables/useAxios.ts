import type { AxiosRequestConfig } from 'axios';
import { createUseAxios } from '@moomfe/small-utils/composables';
import { createAxiosInstance } from '@/modules/axios/create';

const initAxiosConfig: AxiosRequestConfig = {};
const instance = createAxiosInstance();

export const useAxios = createUseAxios(initAxiosConfig, {
  instance,
});
