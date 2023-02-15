const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;
const tokenUrl = 'https://www.reddit.com/api/v1/access_token';
const redirect_uri = 'http://localhost:3000/';

const getAccessToken = async (authorization_code) => {
    const response = await fetch(tokenUrl, {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + btoa(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')},
            body: `grant_type=authorization_code&code=CODE&redirect_uri=${redirect_uri}`
    })
    const access_token = await response.json()
    return access_token.access_token;
}

export default getAccessToken;