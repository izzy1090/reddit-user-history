const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;
const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;
const tokenUrl = 'https://www.reddit.com/api/v1/access_token';

const GenAccessToken = async (authorization_code) => {
    const response = await fetch(tokenUrl, {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + btoa(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')},
            body: `grant_type=authorization_code&code=${authorization_code}&redirect_uri=${REDIRECT_URI}`
    })
    const accessToken = await response.json();
    console.log(accessToken)
    return accessToken.access_token;
}

export default GenAccessToken;