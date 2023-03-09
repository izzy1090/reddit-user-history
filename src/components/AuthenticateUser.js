import { useEffect } from "react";
import useNavigation from "../hooks/use-navigation";
import Button from "./Button";

function AuthenticateUser ( { appDescription, authorizationURL, handleAuthToken } ) {  
   
    const { navigate } = useNavigation();
    const container = 'flex flex-col items-center justify-center h-screen'

    function parseAuthorization(){
        // extract the window path of the browser as a query sting
        const queryString = window.location.search;
        // pass the queryString as a param to create a new URLSearchParams class 
        const urlParams = new URLSearchParams(queryString);  
        // We can then use urlParams to parse through the returned path to find the generated authorization token
        return urlParams.get("code");
    }
    
    useEffect(()=>{
        const returnedToken = parseAuthorization();
        // good to check if the returned token is undefined before setting the state to the returnedToken
        if (returnedToken){
            handleAuthToken(returnedToken);
            navigate('/userprofile');
        } 
    // also want to only re-render the page if navigate has been invoked and handleAuthorize has been called
    },[handleAuthToken, navigate])
    
    const authorizeApplication = <Button 
        rounded
        active 
        hover
        onClick={()=> {
            window.location = authorizationURL;
        }
        }>
        Login To Reddit
    </Button>
    
    return <div className={container}>
        <div>
            {appDescription}
        </div>
            {authorizeApplication}
    </div>
}

export default AuthenticateUser;