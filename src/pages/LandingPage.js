import Landing from "../components/Landing";
import fetchAccessToken from '../api/FetchAccessToken';
import fetchUserProfile from '../api/FetchUserProfile';
import { useEffect, useState } from "react";
import fetchSubreddits from "../api/FetchSubreddits";
import fetchNewToken from "../api/FetchNewToken";

function LandingPage({ authToken }){
    const [ refreshToken, setRefreshTokens ] = useState(null);

    // this fetches the user info and logs to the console the available access tokens
    // and refresh tokens as well as logs to the console the reddit user's info
    const fetchUserInfo = async (token) => {
        try {
            const request = await fetchAccessToken(token);
            const response = await fetchUserProfile(request.access_token)
            setRefreshTokens(request.refresh_token)
            console.log('Authorized User Profile: ', response);
        } catch (error){
            console.log('Error fetching credentials: ', error);
        }
    }

    const handleRequest = async (token) => {
        try{
            const request = await fetchNewToken(token);
            const response = await fetchSubreddits(request);
            console.log(response);
        } catch (err){
            console.log('Error fetching refresh token: ', err)
        }
    }

    // this render the landingPage only after the user has authorized the application
    // to have access to their Reddit account
    useEffect(()=>{
        if (authToken){
            fetchUserInfo(authToken)
        }
    },[authToken])
    
    return <Landing fetchUserInfo={fetchUserInfo} handleRequest={handleRequest} refreshToken={refreshToken}/>
}

export default LandingPage;