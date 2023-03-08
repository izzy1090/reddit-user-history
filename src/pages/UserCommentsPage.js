import fetchUserComments from "../api/FetchUserComments";
import fetchNewAccessToken from "../api/FetchNewAccessToken";
import UserComments from "../components/UserComments";
import { useEffect, useState } from "react";
import useUsername from "../hooks/use-username";

function UserCommentsPage({refreshToken}){
    const [ userComments, setUserComments ] = useState([]);
    const { username } = useUsername();

    useEffect(()=>{
        const handleFetchUserComments = async (token, currentUsername) => {
            try {
                const request = await fetchNewAccessToken(token);
                const response = await fetchUserComments(request.access_token, currentUsername);
                setUserComments(response)
            } catch (error){
                console.log('Error fetching your subscribed Subreddits: ', error);
            }
        }
        if (refreshToken){
            handleFetchUserComments(refreshToken, username);
        }
    }, [refreshToken, username])

    return <UserComments userComments={userComments}/>
};

export default UserCommentsPage;