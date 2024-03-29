const fetchUserProfile = async (authorize_token) => {
    const request = await fetch(`https://oauth.reddit.com/api/v1/me`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Bearer ${authorize_token}`        },
    })
    if (!request.ok){
        throw new Error(`Failed to fetch user profile: ${request.status} ${request.statusText}`)
    }
    const response = await request.json();
    return response;
}

export default fetchUserProfile;
