import { useEffect } from "react";

function UserCredentials ( { onAuthorization } ) {  
    // params necessary for the authentication URL below
    const SCOPE = ['identity', 'edit', 'flair', 'history', 'read', 'vote', 'wikiread', 'wikiedit'];
    const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
    const RANDOM_STRING = process.env.REACT_APP_RANDOM_STRING;
    const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;
    const authorizationURL = `https://www.reddit.com/api/v1/authorize?client_id=${CLIENT_ID}&response_type=code&state=${RANDOM_STRING}&redirect_uri=${REDIRECT_URI}&duration=temporary&scope=${SCOPE}`
    
    useEffect(()=>{
        // extract the window path of the browser as a query sting
        const queryString = window.location.search;
        // pass the queryString as a param to create a new URLSearchParams class 
        const urlParams = new URLSearchParams(queryString);  
        // We can then use urlParams to parse through the returned path to find the generated authorization token
        const authorization_token = urlParams.get("code");
        // good to check in case the authorization_token is undefined
        if (authorization_token){
            onAuthorization(authorization_token); 
        } 
    },[onAuthorization])
    
    const authorizeApplication = <button onClick={()=> window.location = authorizationURL }>
        Authorize Application
    </button>
    
    return <div>
        {authorizeApplication}
    </div>
}

export default UserCredentials;