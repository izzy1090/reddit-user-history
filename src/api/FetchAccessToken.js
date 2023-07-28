const { REACT_APP_CLIENT_ID, REACT_APP_CLIENT_SECRET, REACT_APP_REDIRECT_URI } = process.env;

const tokenUrl = 'https://www.reddit.com/api/v1/access_token';

const fetchAccessToken = async (authorization_code) => {
    const response = await fetch(tokenUrl, {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + btoa(`${REACT_APP_CLIENT_ID}:${REACT_APP_CLIENT_SECRET}`).toString('base64')},
            body: `grant_type=authorization_code&code=${authorization_code}&redirect_uri=${REACT_APP_REDIRECT_URI}`,
            // 'User-Agent': 'Reddit-User-History/1.0 (React; Web; michaelisabella1@gmail.com)'
    })
    const accessToken = await response.json();
    return accessToken;
}

export default fetchAccessToken;
