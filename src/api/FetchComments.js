const fetchComments = async (newToken, username)=> {
    const request = await fetch(`https://oauth.reddit.com/user/${username}/comments/?limit=100`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Bearer ${newToken}`        }
    });
    const response = await request.json();
    return response;
}

export default fetchComments;
