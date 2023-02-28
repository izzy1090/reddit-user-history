import Landing from "../components/Landing";
import fetchAccessToken from '../api/FetchAccessToken';
import fetchUserProfile from '../api/FetchUserProfile';
import { useEffect, useState } from "react";

function LandingPage({ authToken, handleRefreshToken }){
    const [userProfile, setUserProfile ] = useState({});
    const [ isLoading, setLoading ] = useState(false);

    // this render the landingPage only after the user has authorized the application
    // to have access to their Reddit account
    useEffect(()=>{
        // this fetches the user info and logs to the console the available access tokens
        // and refresh tokens as well as logs to the console the reddit user's info
        const fetchUserInfo = async (token) => {
            try {
                setLoading(true);
                const request = await fetchAccessToken(token);
                const response = await fetchUserProfile(request.access_token);
                handleRefreshToken(request.refresh_token);
                return response;
            } catch (error){
                console.log('Error fetching credentials: ', error);
            }
        }
        if (authToken){
            fetchUserInfo(authToken).then((data)=>{
                setLoading(false);
                setUserProfile(data)
            })
        } 
    },[authToken, handleRefreshToken])
    
    return <Landing userProfile={userProfile} loading={isLoading}/>
}

export default LandingPage;