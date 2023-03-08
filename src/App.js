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
    console.log('refresh token: ', refreshToken)

    const pageContainer = 'flex flex-col m-4'

    return (
    <div>
        <Route path="/">
            <AuthenticateUserPage handleAuthToken={setAuthToken}/>
        </Route>
            <div className="p-5">
            <Route path='/userprofile'>
                <RedditUserProfilePage 
                    authToken={authToken} 
                    refreshToken={refreshToken} 
                    handleRefreshToken={setRefreshTokens}
                    handleAuthToken={setAuthToken}
                    /> 
                <div className={pageContainer}>
                    <Navbar/>
                    <div className="mt-5">
                        <SubscribedRedditsPage/>
                    </div>
                </div>
            </Route>
            <Route path='/userprofile/posts'>
                <RedditUserProfilePage 
                    authToken={authToken} 
                    refreshToken={refreshToken} 
                    handleRefreshToken={setRefreshTokens}
                />
                <div className={pageContainer}>
                    <Navbar/>
                    <div className="mt-5">
                        <PostsPage/>
                    </div>
                </div>
            </Route>
            <Route path='/userprofile/comments'>
                <RedditUserProfilePage 
                    authToken={authToken} 
                    refreshToken={refreshToken} 
                    handleRefreshToken={setRefreshTokens}
                />
                <div className={pageContainer}>
                    <Navbar/>
                    <div className="mt-5">
                        <CommentsPage/>
                    </div>
                </div>
            </Route>
        </div>
    </div>
    )
}

export default App;