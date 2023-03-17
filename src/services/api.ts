import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const apiUrl: string = import.meta.env.VITE_APP_API_URL;

const config: AxiosRequestConfig = {
  baseURL: apiUrl,
  headers: {
    "Content-Type": "application/json",
  },
};
const apiInstance: AxiosInstance = axios.create(config);

apiInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { apiInstance };
