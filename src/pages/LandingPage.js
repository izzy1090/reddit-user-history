import Landing from "../components/Landing";
import fetchAccessToken from '../api/FetchAccessToken';
import fetchUserProfile from '../api/FetchUserProfile';
import { useEffect, useState } from "react";

function LandingPage({ authToken, handleRefreshToken }){
    const [userProfile, setUserProfile ] = useState({});

    // this fetches the user info and logs to the console the available access tokens
    // and refresh tokens as well as logs to the console the reddit user's info
    const fetchUserInfo = async (token) => {
        try {
            const request = await fetchAccessToken(token);
            const response = await fetchUserProfile(request.access_token);
            handleRefreshToken(request.refresh_token);
            console.log('Authorized User Profile: ', response);
            return response;
        } catch (error){
            console.log('Error fetching credentials: ', error);
        }
    }
    // this render the landingPage only after the user has authorized the application
    // to have access to their Reddit account
    useEffect(()=>{
        if (authToken){
            fetchUserInfo(authToken).then((data)=>{
                setUserProfile(data)
            })
        }
    },[authToken])

    return <Landing userProfile={userProfile}/>
}

export default LandingPage;