import { useEffect } from "react";
import Posts from "../components/Posts";
import fetchNewAccessToken from "../api/FetchNewAccessToken";
import fetchPosts from "../api/FetchPosts";
import useGlobalStates from "../hooks/use-globalStates";

function PostsPage({ refreshToken }){
    const { username, posts, setPosts } = useGlobalStates();

    useEffect(()=>{
        const handleFetchPosts = async (token, currentUsername) => {
            try {
                const request = await fetchNewAccessToken(token);
                const response = await fetchPosts(request.access_token, currentUsername);
                setPosts(response);
                return response;
            } catch (error) {
                console.log('Error fetching previous posts: ', error);
            }
        }
        if (refreshToken && username){
            handleFetchPosts(refreshToken, username);
        }
    }, [refreshToken, username, setPosts])
    
    return <Posts posts={posts}/>
};

export default PostsPage;