import AuthenticateUser from '../components/AuthenticateUser';
import Panel from '../components/Panel';

function AuthenticateUserPage ({handleAuthToken, authToken, pageContainer}) {  
    // params necessary for the authentication URL below
    const REDDIT_SCOPE = [
        'identity', 
        'edit', 
        'flair', 
        'history', 
        'read', 
        'vote', 
        'mysubreddits'];

    const {REACT_APP_CLIENT_ID, REACT_APP_RANDOM_STRING, REACT_APP_REDIRECT_URI} = process.env;
    const authorizationURL = `https://www.reddit.com/api/v1/authorize?client_id=${REACT_APP_CLIENT_ID}&response_type=code&state=${REACT_APP_RANDOM_STRING}&redirect_uri=${REACT_APP_REDIRECT_URI}&duration=permanent&scope=${REDDIT_SCOPE}`

    const appDescription = <Panel className='text-normal'>
        <p className='font-bold text-center mb-1'>Welcome!</p>
        <div className='text-justify-left p-3'>
            <p className='mb-2'>After granting access, you're able to view all of your subscribed subreddits, posts and past comments. I designed this to be a streamlined version of reddit without all the ads!</p>
            <p className='mb-2'>Currently there is a means of visualizing your data, however that's a work in progress.</p>
            <p className='mb-2'>Planned features:</p>
            <ul style={{listStyleType: 'disc', paddingLeft: '1.5em'}}>
                <li>See past subreddits you've liked</li>
                <li>Like threads, posts, or comments on Reddit directly from the app</li>
                <li>Add additional metrics visualizations (i.e. comments, likes, etc.)</li>
                <li>Sort results for each category by new or old displaying first</li>
                <li>Lazy loading for each tab</li>
            </ul>
            
        </div>
    </Panel>
    
    return <AuthenticateUser 
        appDescription={appDescription} 
        authorizationURL={authorizationURL} 
        handleAuthToken={handleAuthToken} 
        authToken={authToken}/>
}

export default AuthenticateUserPage;
