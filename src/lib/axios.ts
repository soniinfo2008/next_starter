import axios, {
  AxiosError,
  CreateAxiosDefaults,
  InternalAxiosRequestConfig,
} from "axios";

import { getRefreshToken } from "@/services/refresh-token/api";
import { useUserStore } from "@/store/user-store";

interface CustomAxiosRequestConfig extends InternalAxiosRequestConfig {
  _retry?: boolean;
}

const publicConfig: CreateAxiosDefaults = {
  baseURL: `https://api.freeapi.app/api/v1`,
};
const privateConfig: CreateAxiosDefaults = {
  baseURL: `https://api.freeapi.app/api/v1`,
  withCredentials: true,
};

export const instanceWithoutInterceptors = axios.create(publicConfig);

export const instance = axios.create(privateConfig);

instance.interceptors.request.use(
  (config) => {
    const accessToken = useUserStore.getState().user?.accessToken;

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error: AxiosError) => {
    const originalRequest: CustomAxiosRequestConfig | undefined = error.config;

    if (
      error.response?.status === 401 &&
      originalRequest &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      try {
        const response = await getRefreshToken();

        const { payload } = response;

        useUserStore.setState({ user: { accessToken: payload.accessToken } });

        originalRequest.headers.Authorization = `Bearer ${payload.accessToken}`;

        return instance(originalRequest);
      } catch (error) {
        if (error instanceof AxiosError && error.response?.status === 403) {
          useUserStore.getState().removeCredentials();
          return;
        }
      }
    }

    return Promise.reject(error);
  }
);
