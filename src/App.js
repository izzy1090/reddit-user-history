import Route from "./components/Route";
import Navbar from "./components/Navbar";
import AuthenticateUserPage from './pages/AuthenticateUserPage';
import RedditUserProfilePage from "./pages/RedditUserProfilePage";
import { useState } from "react";
import SubscribedRedditsPage from "./pages/SubscribedRedditsPage";
import CommentsPage from "./pages/CommentsPage";
import PostsPage from "./pages/PostsPage";

function App () {   
    // authentication token meant to be passed around the various components
    // to authorize a user's reddit account for use with the app
    const [ authToken, setAuthToken ] = useState(null); 
    const [ refreshToken, setRefreshTokens ] = useState(null);
    console.log(refreshToken)

    const NavbarContainer = 'm-3'

    return <div className="flex items-center flex-col">
        <Route path="/">
            <AuthenticateUserPage handleAuthorize={setAuthToken}/>
        </Route>
        <Route path='/userprofile'>
            <RedditUserProfilePage 
                authToken={authToken} 
                refreshToken={refreshToken} 
                handleRefreshToken={setRefreshTokens}
                />
            <Navbar/>
        </Route>
        <Route path='/userprofile/subs'>
            <RedditUserProfilePage 
                authToken={authToken} 
                refreshToken={refreshToken} 
                handleRefreshToken={setRefreshTokens}
            />
            <div className={NavbarContainer}>
                <Navbar/>
                <SubscribedRedditsPage/>
            </div>
        </Route>
        <Route path='/userprofile/posts'>
            <RedditUserProfilePage 
                authToken={authToken} 
                refreshToken={refreshToken} 
                handleRefreshToken={setRefreshTokens}
            />
            <div className={NavbarContainer}>
                <Navbar/>
                <PostsPage/>
            </div>
        </Route>
        <Route path='/userprofile/comments'>
            <RedditUserProfilePage 
                authToken={authToken} 
                refreshToken={refreshToken} 
                handleRefreshToken={setRefreshTokens}
            />
            <div className={NavbarContainer}>
                <Navbar/>
                <CommentsPage/>
            </div>
        </Route>
    </div>
}

export default App;