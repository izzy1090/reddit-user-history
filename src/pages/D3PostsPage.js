import { useEffect, useState } from "react";
import useUsername from "../hooks/use-username";
import D3Posts from "../components/D3Posts";
import fetchNewAccessToken from "../api/FetchNewAccessToken";
import fetchPosts from "../api/FetchPosts";

function D3PostsPage( { refreshToken } ){

    const [ posts, setPosts ] = useState([]);
    const { username } = useUsername();

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
        
    },[refreshToken, username])

    return <D3Posts posts={posts}/>
}

export default D3PostsPage;