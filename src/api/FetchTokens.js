const fetchTokens = async (authorize_token) => {
    const request = await fetch(`https://oauth.reddit.com/api/v1/me`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Bearer ${authorize_token}`,
            'User-Agent': 'fetch-user-history/1.0.0',
        },
    })
    if (!request.ok){
        throw new Error(`Failed to fetch comments: ${request.status} ${request.statusText}`)
    }
    const response = await request.json();
    return response;
}

export default fetchTokens;