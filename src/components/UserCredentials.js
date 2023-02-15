import { useEffect, useState } from "react";

function UserCredentials () {  
    // params necessary for the authentication URL below
    const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
    const randomString = 'randomstring';
    const SCOPE = 'read,livemanage';
    const redirectUri = 'http://localhost:3000/';
    const authorizationUrl = `https://www.reddit.com/api/v1/authorize?client_id=${CLIENT_ID}&response_type=code&state=${randomString}&redirect_uri=${redirectUri}&duration=permanent&scope=${SCOPE}`
   
    const [ authorizationCode, setAuthorizationCode ] = useState();

    // this is a good example where we want to use useEffect
    // because it allows us to rerender the app when the page 
    // rerenders after being redirected after the authorization page
    useEffect(()=>{
        // extract the window path of the browser as a query sting
        const queryString = window.location.search;
        // then pass that queryString as a param to create a new class
        // using the URLSearchParams
        const urlParams = new URLSearchParams(queryString);  
        // after that you want to parse through the URL params 
        // and extract the authorization code from there
        const code = urlParams.get("code");
        // if code is present or not undefined
        if (code){
            // we want to set our authorizationCode piece of state to the
            // authorization code we extracted from our URLSearchParams class method
            setAuthorizationCode(code);
        }
    },[])
    
    // button component with an onClick event handler that when the element is clicked
    // the window.location is set to the authorization url which redirects the user
    // to the authorization page recommended by reddit
    const generateTokens = <button onClick={()=>window.location = authorizationUrl}>Generate Token!</button>

    return <div>
        {authorizationCode ? authorizationCode : generateTokens}
    </div>
}

export default UserCredentials;