import axios from 'axios';

const getAuth = async () => {
  const url = `https://id.twitch.tv/oauth2/token?client_id=${process.env.TWITCH_ID}&client_secret=${process.env.TWITCH_SECRET}&grant_type=client_credentials`;

  try {
    const response = await axios(url, { method: 'POST' });
    return response.data.access_token;
  } catch (error) {
    console.log(`Couldn't get authorization: `, error);
  }
};

module.exports = getAuth;
