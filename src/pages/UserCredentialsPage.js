import GenAccessToken from "../api/GenAccessToken";
import AuthorizeCredentials from "../api/AuthorizeCredentials";
import UserCredentials from "../components/UserCredentials";
import { useState } from "react";

function UserCredentialsPage () {    
    const [ authorizationCode, setAuthorizationCode ] = useState();
    
    const handleClick = async () => {
        try {
            const access_token = await GenAccessToken(authorizationCode)
            const response = await AuthorizeCredentials(access_token)
            console.log('Response from api request: ', response)
        } catch (error) {
            console.error(error)
        }
    }
    return <div>
        <UserCredentials onAuthorization={setAuthorizationCode}/>
        <button onClick={handleClick}>Here!</button>
    </div>
}

export default UserCredentialsPage;