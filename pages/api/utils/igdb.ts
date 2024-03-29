import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { getTwitchAuth } from './twitch_auth';

export interface TwitchParams {
  client_id: string;
  client_secret: string;
  grant_type: string;
}

const twitchParams: TwitchParams = {
  client_id: process.env.TWITCH_ID || '',
  client_secret: process.env.TWITCH_SECRET || '',
  grant_type: process.env.GRANT_TYPE || '',
};

const defaultHeaders = {
  Accept: 'application/json',
  'Client-ID': twitchParams.client_id,
  'Access-Control-Allow-Origin': '*',
};

const defaultConfig: AxiosRequestConfig = {
  baseURL: 'https://api.igdb.com/v4',
  headers: defaultHeaders,
};

const instance: AxiosInstance = axios.create(defaultConfig);

instance.interceptors.request.use(
  async (config) => {
    const token = await getTwitchAuth(twitchParams);
    if (token && config.headers) {
      config.headers['Authorization'] = `Bearer ${token}`;
    } else {
      console.log(`No Authorization`);
    }
    return config;
  },

  (error) => Promise.reject(error)
);

export default instance;
