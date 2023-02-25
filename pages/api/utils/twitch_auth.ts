import axios from 'axios';
import { TwitchParams } from './igdb';
import { scheduleJob } from 'node-schedule';
import NodeCache from 'node-cache';

interface TwitchResponse {
  access_token: string;
  expires_in: number;
  token_type: string;
}

const cache = new NodeCache();
const accessTokenUri = 'https://id.twitch.tv/oauth2/token';
let tokenExpirationTime: number;
export const getTwitchAuth = async (twitchParams: TwitchParams) => {
  const searchParams = new URLSearchParams({ ...twitchParams });
  const url = `${accessTokenUri}?${searchParams}`;

  if (tokenExpirationTime && tokenExpirationTime > Date.now()) {
    return cache.get('access_token');
  }

  try {
    const { data } = await axios.post(url);
    const expiresIn = data.expires_in;
    tokenExpirationTime = Date.now() + expiresIn * 1000;
    cache.set('access_token', data.access_token, expiresIn);
    scheduleJob(new Date(tokenExpirationTime), async () => {
      try {
        await getTwitchAuth(twitchParams);
      } catch (error) {
        console.log(`Couldn't refresh token: `, error);
      }
    });
    return (data as TwitchResponse).access_token;
  } catch (error) {
    console.log(`Couldn't get authorization: `, error);
    throw new Error('Getting Access Token Failed');
  }
};
