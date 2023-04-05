import AuthenticateUser from '../components/AuthenticateUser';
import Panel from '../components/Panel';

function AuthenticateUserPage ({handleAuthToken, authToken}) {  
    // params necessary for the authentication URL below
    const REDDIT_SCOPE = ['privatemessages',
        'identity', 
        'edit', 
        'flair', 
        'history', 
        'read', 
        'vote', 
        'wikiread', 
        'wikiedit', 
        'mysubreddits'];

    const {REACT_APP_CLIENT_ID, REACT_APP_RANDOM_STRING, REACT_APP_REDIRECT_URI} = process.env;
    const authorizationURL = `https://www.reddit.com/api/v1/authorize?client_id=${REACT_APP_CLIENT_ID}&response_type=code&state=${REACT_APP_RANDOM_STRING}&redirect_uri=${REACT_APP_REDIRECT_URI}&duration=permanent&scope=${REDDIT_SCOPE}`

    const appDescription = <Panel className='text-normal'>
        <p className='font-bold text-center mb-1'>Welcome to the Reddit History application!</p>
        <div className='text-justify p-3'>
            <p className='mb-2'>This app allows you to view your subscribed subreddits as well as posts and comments you've posted on Reddit.</p>
            <p className='mb-2'>You're also able to sort your history by new or old and view data visualized to help you examine Reddit usage trends.</p>
            <p className='mb-2'>To start, click the button below to authenticate your account for usage with the application.</p>
            <p>Planned feature list and additional information regarding functionality are coming soon...</p>
        </div>
    </Panel>
    
    return <AuthenticateUser 
        appDescription={appDescription} 
        authorizationURL={authorizationURL} 
        handleAuthToken={handleAuthToken} 
        authToken={authToken}/>
}

export default AuthenticateUserPage;