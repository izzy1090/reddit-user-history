import Cookies from "js-cookie";
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
        /* This fetches the user info and logs to the console the available access tokens
        and refresh tokens as well as logs to the console the reddit user's info */
        const fetchUserInfo = async (token) => {
            try {
                setLoading(true);
                const request = await fetchAccessToken(token);
                // sets the refresh token in case we need it for immediate use after loading the profile
                handleRefreshToken(request.refresh_token);
                const response = await fetchUserProfile(request.access_token);
                // also securely stores the refresh token in a cookie and protects against cross site attacks
                Cookies.set('refreshToken', request.refresh_token, { expires: 1/24, secure: true, sameSite: true });
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
            // we then store our userData is sessionStorage as it doesn't contain any confidential information
            const userData = JSON.parse(sessionStorage.getItem('userProfile'))
            // also grabs the refresh token from our cookie
            const cachedToken = Cookies.get('refreshToken');
            if (userData && cachedToken){  
                // then sets both the userData and refreshTokens to stored values from last page render
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