import fetchComments from "../api/FetchComments";
import fetchNewAccessToken from "../api/FetchNewAccessToken";
import Comments from "../components/Comments";
import { useEffect } from "react";
import useGlobalStates from "../hooks/use-globalStates";

function CommentsPage({ refreshToken }){
    
    const { username, comments, setComments } = useGlobalStates();

    useEffect(()=>{
        const handleFetchComments = async (token, currentUsername) => {
            try {
                const request = await fetchNewAccessToken(token);
                const response = await fetchComments(request.access_token, currentUsername);
                setComments(response)
            } catch (error){
                console.log('Error fetching your subscribed Subreddits: ', error);
            }
        }
        if (refreshToken && username){
            handleFetchComments(refreshToken, username);
        }
    }, [refreshToken, username, setComments])

    return <Comments comments={comments}/>
};

export default CommentsPage;