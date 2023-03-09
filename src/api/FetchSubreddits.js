const fetchSubreddits = async (newToken)=> {
    const request = await fetch('https://oauth.reddit.com/subreddits/mine/?limit=100', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Bearer ${newToken}`,
            'User-Agent': 'fetch-user-history/1.0.0'
        }
    });
    const response = await request.json()
    return response;
    
}

export default fetchSubreddits;