import axios from 'axios';

async function getLongLivedToken(shortLivedToken: string, appId: string, appSecret: string) {
    const url = `https://graph.facebook.com/oauth/access_token?grant_type=fb_exchange_token&client_id=${appId}&client_secret=${appSecret}&fb_exchange_token=${shortLivedToken}`;

    try {
        const response = await axios.get(url);
        const longLivedToken = response.data.access_token;
        console.log('Long-lived token:', longLivedToken);
        return longLivedToken;
    } catch (error) {
        console.error('Error fetching long-lived token:', error);
        return null;
    }
}                 
export default getLongLivedToken;