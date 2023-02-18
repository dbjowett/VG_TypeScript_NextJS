import axios from 'axios';
import { TwitchParams } from './igdb';

interface TwitchResponse {
  access_token: string;
  expires_in: number;
  token_type: string;
}

const accessTokenUri = 'https://id.twitch.tv/oauth2/token';

const getAuth = async (twitchParams: TwitchParams) => {
  const searchParams = new URLSearchParams({ ...twitchParams });
  const url = `${accessTokenUri}?${searchParams}`;

  try {
    const res = await axios.post(url);
    if (res.data) {
      return (res.data as TwitchResponse).access_token;
    }
    throw new Error('No data returned');
  } catch (error) {
    console.log(`Couldn't get authorization: `, error);
    throw new Error('Getting Access Token Failed');
  }
};

export default getAuth;
