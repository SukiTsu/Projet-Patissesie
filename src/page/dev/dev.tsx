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
getLongLivedToken("EAAMxJHI6qfABO7ZCQjXfaJ1OcAaDCxe5FZC4qQtZAwkgAdCZAJwZAZBTZCesZBlFvrGZBqWcqZAH8GN0wbnhy2AcrkaC3Jy2pVZCCCjO63acUtrJR8nd3k3LB8uSwNM9FPTitYrc7jbLuveTlhaQcvpK0DrHcu52wka09XnZBCqiEX5XSK0yF2TekVEbXhzYKJzMZARfFCMvZB5ey35Elixz2l5VTgk7BpbAZDZD","898457535162864","389a97304ada4edbf79998b6e72ee952")