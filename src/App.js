import Route from "./components/Route";
import AuthenticateUserPage from './pages/AuthenticateUserPage';
import RedditUserProfilePage from "./pages/RedditUserProfilePage";
import ButtonPage from "./pages/ButtonPage";
import FetchSubredditsListPage from "./pages/FetchSubredditsListPage";
import { useState } from "react";

function App () {   
    // authentication token meant to be passed around the various components
    // to authorize a user's reddit account for use with the app
    const [ authToken, setAuthToken ] = useState(null); 
    const [ refreshToken, setRefreshTokens ] = useState(null);
    
    return <div>
        <Route path="/">
            <AuthenticateUserPage handleAuthorize={setAuthToken}/>
        </Route>
        <Route path='/userprofile'>
            <RedditUserProfilePage 
                authToken={authToken} 
                refreshToken={refreshToken} 
                handleRefreshToken={setRefreshTokens}
                />
        </Route>
        <Route path='/fetchsubreddits'>
            <FetchSubredditsListPage/>
        </Route>
        <Route path='/buttons'>
            <ButtonPage/>
        </Route>
    </div>
}

export default App;