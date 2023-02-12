import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import getAuth from './twitch_auth';

const client_id = process.env.TWITCH_ID || '';

const config: AxiosRequestConfig = {
  baseURL: 'https://api.igdb.com/v4',
  headers: {
    Accept: 'application/json',
    'Client-ID': client_id,
    'Access-Control-Allow-Origin': '*',
  },
};

const instance: AxiosInstance = axios.create(config);

instance.interceptors.request.use(
  async (config) => {
    const token = await getAuth();
    if (token && config.headers) {
      config.headers['Authorization'] = `Bearer ${token}`;
    } else {
      console.log(`Noauth`);
    }
    return config;
  },

  (error) => Promise.reject(error)
);

export default instance;
