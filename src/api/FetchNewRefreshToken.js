const { REACT_APP_CLIENT_ID, REACT_APP_CLIENT_SECRET } = process.env;

const fetchNewRefreshToken = async (refresh_token) => {
    const authenticate = await fetch ('https://www.reddit.com/api/v1/access_token',{
        method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' + btoa(`${REACT_APP_CLIENT_ID}:${REACT_APP_CLIENT_SECRET}`).toString('base64')},
                body: `grant_type=refresh_token&refresh_token=${refresh_token}`
            })
        const response = await authenticate.json();
        console.log('Newly returned authorization creds: ',response);
        return response.refresh_token;
};

export default fetchNewRefreshToken;