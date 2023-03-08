import fetchNewAccessToken from "../api/FetchNewAccessToken";
import fetchSubreddits from "../api/FetchSubreddits";
import SubscribedReddits from "../components/SubscribedReddits";
import { useEffect, useState } from "react";

function SubscribedRedditsPage({ refreshToken }){
    const [ subscribedSubreddits, setSubscribedSubreddits ] = useState([]);

    useEffect(()=>{
        const handleFetchSubreddits = async (token) => {
            try {
                const request = await fetchNewAccessToken(token);
                const response = await fetchSubreddits(request.access_token);
                setSubscribedSubreddits(response)
            } catch (error){
                console.log('Error fetching your subscribed Subreddits: ', error);
            }
        }
        if (refreshToken){
            handleFetchSubreddits(refreshToken);
        }
    }, [refreshToken])
    
    return <SubscribedReddits subscribedSubreddits={subscribedSubreddits}/>
};

export default SubscribedRedditsPage;