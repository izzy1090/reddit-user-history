const { REACT_APP_CLIENT_ID, REACT_APP_CLIENT_SECRET } = process.env;

const fetchSubreddits = async (refresh_token)=> {
    const authenticate = await fetch ('https://www.reddit.com/api/v1/access_token',{
    method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + btoa(`${REACT_APP_CLIENT_ID}:${REACT_APP_CLIENT_SECRET}`).toString('base64')},
            body: `grant_type=refresh_token&refresh_token=${refresh_token}`
        })
    const response = await authenticate.json()
    const requestSubreddits = await fetch('https://oauth.reddit.com/subreddits/mine/', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Bearer ${response.access_token}`,
            'User-Agent': 'fetch-user-history/1.0.0'
        }
    });
    const returnedSubreddits = await requestSubreddits.json()
    return returnedSubreddits;
    
}

export default fetchSubreddits;