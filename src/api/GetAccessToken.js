const CLIENT_ID = process.env.REACT_APP_CLIENT_ID
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET

const getAccessToken = async (username, password) => {
    const response = await fetch('https://www.reddit.com/api/v1/access_token', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + btoa(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')},
            body: `grant_type=password&username=${username}&password=${password}`
    })
    const json = await response.json()

    console.log(json)
    return json;
}

export default getAccessToken;