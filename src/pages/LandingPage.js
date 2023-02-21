import Landing from "../components/Landing";
import GenAccessToken from '../api/GenAccessToken';
import AuthorizeCredentials from '../api/AuthorizeCredentials';

function LandingPage({authToken}){
    const fetchCredentials = async (token) => {
        try {
            const access_token = await GenAccessToken(token);
            const response = await AuthorizeCredentials(access_token);
            console.log('Response from api request: ', response);
        } catch (error){
            console.log('Error fetching credentials: ', error);
        }
    }
    
    return <Landing authToken={authToken} fetchCredentials={fetchCredentials}/>
}

export default LandingPage;