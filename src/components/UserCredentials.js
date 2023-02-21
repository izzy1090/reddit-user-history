import { useEffect } from "react";
import useNavigation from "../hooks/use-navigation";

function UserCredentials ( { authorizationURL, handleAuthorize } ) {  

    const { navigate } = useNavigation();

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
            handleAuthorize(returnedToken);
            navigate('/landingpage')
        } 
    // also want to only re-render the page if navigate has been invoked and handleAuthorize has been called
    },[handleAuthorize, navigate])
    
    const authorizeApplication = <button 
        className="bg-orange-500 hover:bg-orange-400 active:bg-orange-600 text-white p-1 rounded-md" 
        onClick={()=> {
            window.location = authorizationURL;
        }
        }>
        Login To Reddit
    </button>
    
    return <div className='flex justify-center'>
        {authorizeApplication}
    </div>
}

export default UserCredentials;