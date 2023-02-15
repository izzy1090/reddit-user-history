const authorizeCredentials = async (access_token ) => {
    const request = await fetch(`https://oauth.reddit.com/user/username/about`, {
        method: 'GET', 
        headers: {
            Authorization: `bearer ${access_token}`
        }
    })

    const response = request.json();

    return response;
}

export default authorizeCredentials;