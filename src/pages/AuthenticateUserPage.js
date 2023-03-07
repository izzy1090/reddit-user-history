import AuthenticateUser from '../components/AuthenticateUser';

function AuthenticateUserPage ({handleAuthToken, authToken}) {  
    // params necessary for the authentication URL below
    const REDDIT_SCOPE = ['privatemessages','identity', 'edit', 'flair', 'history', 'read', 'vote', 'wikiread', 'wikiedit', 'mysubreddits'];

    const {REACT_APP_CLIENT_ID, REACT_APP_RANDOM_STRING, REACT_APP_REDIRECT_URI} = process.env;
    const authorizationURL = `https://www.reddit.com/api/v1/authorize?client_id=${REACT_APP_CLIENT_ID}&response_type=code&state=${REACT_APP_RANDOM_STRING}&redirect_uri=${REACT_APP_REDIRECT_URI}&duration=permanent&scope=${REDDIT_SCOPE}`

    const appDescription = 'Insert text above for a description of the app'
    
    return <AuthenticateUser 
        appDescription={appDescription} 
        authorizationURL={authorizationURL} 
        handleAuthToken={handleAuthToken} 
        authToken={authToken}/>
}

export default AuthenticateUserPage;