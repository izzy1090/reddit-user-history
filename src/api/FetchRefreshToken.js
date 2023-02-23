const { REACT_APP_CLIENT_ID, REACT_APP_CLIENT_SECRET } = process.env;

const fetchRefreshToken = async (refresh_token)=> {
    const request = await fetch ('https://www.reddit.com/api/v1/access_token',{
    method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + btoa(`${REACT_APP_CLIENT_ID}:${REACT_APP_CLIENT_SECRET}`).toString('base64')},
            body: `grant_type=refresh_token&code=${refresh_token}`
        })
    const response = await request.json()
    console.log(response)
    return response;
}

export default fetchRefreshToken;