import RedditUserProfile from "../components/RedditUserProfile";
import fetchAccessToken from '../api/FetchAccessToken';
import fetchUserProfile from '../api/FetchUserProfile';
import { useEffect, useState } from "react";
import FetchSubredditsList from "../components/FetchSubredditsList";

function RedditUserProfilePage({ refreshToken, authToken, handleRefreshToken }){
    const [ userProfile, setUserProfile ] = useState({});
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
                handleRefreshToken(request.refresh_token);
                sessionStorage.setItem('refreshToken', JSON.stringify(request.refresh_token))
                const response = await fetchUserProfile(request.access_token);
                
                return response;
            } catch (error){
                console.log('Error fetching credentials: ', error);
            }
        }
        if (authToken){
            fetchUserInfo(authToken).then((returnedUserInfo)=>{
                setLoading(false);
                setUserProfile(returnedUserInfo);
                // stores the returned data in a variable called userProfile as a JSON
                sessionStorage.setItem('userProfile', JSON.stringify(returnedUserInfo));
                
            })
        } else {
            // else we want to init. userData with the stored session data associated with userProfile
            // and if the userData has a value we want to set the userProfile state to be the userData
            const userData = JSON.parse(sessionStorage.getItem('userProfile'))
            const cachedToken = JSON.parse(sessionStorage.getItem('refreshToken'))
            if (userData && cachedToken){
                setUserProfile(userData)
                handleRefreshToken(cachedToken)
            }
        }
    },[authToken, handleRefreshToken])

    return <div>
        <RedditUserProfile userProfile={userProfile} loading={isLoading}/>
        <FetchSubredditsList refreshToken={refreshToken}/>
    </div>
}

export default RedditUserProfilePage;