import Landing from "../components/Landing";
import fetchAccessToken from '../api/FetchAccessToken';
import fetchTokens from '../api/FetchTokens';
import { useEffect, useState } from "react";

function LandingPage({ authToken }){
    const [ refreshToken, setRefreshTokens ] = useState(null);

    // this fetches the user info and logs to the console the available access tokens
    // and refresh tokens as well as logs to the console the reddit user's info
    const fetchUserInfo = async (token) => {
        try {
            const request = await fetchAccessToken(token);
            console.log(request)
            const response = await fetchTokens(request.access_token)
            setRefreshTokens(request.refresh_token)
            console.log('Response from api request: ', response);
        } catch (error){
            console.log('Error fetching credentials: ', error);
        }
    }

    const fetchRefreshToken = async (token) => {
        try{
            console.log('Your refresh token is: ', refreshToken)
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
    
    return <Landing authToken={authToken} fetchUserInfo={fetchUserInfo} fetchRefreshToken={fetchRefreshToken}/>
}

export default LandingPage;