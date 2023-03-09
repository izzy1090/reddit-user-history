import fetchNewAccessToken from "../api/FetchNewAccessToken";
import fetchSubreddits from "../api/FetchSubreddits";
import Subreddits from "../components/Subreddits";
import { useEffect, useState } from "react";

function SubredditsPage({ refreshToken }){
    const [ subreddits, setSubreddits ] = useState([]);

    useEffect(()=>{
        const handleFetchSubreddits = async (token) => {
            try {
                const request = await fetchNewAccessToken(token);
                const response = await fetchSubreddits(request.access_token);
                setSubreddits(response)
            } catch (error){
                console.log('Error fetching your subscribed Subreddits: ', error);
            }
        }
        if (refreshToken){
            handleFetchSubreddits(refreshToken);
        }
    }, [refreshToken])
    
    return <Subreddits subreddits={subreddits}/>
};

export default SubredditsPage;