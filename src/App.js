import Route from "./components/Route";
import Navbar from "./components/Navbar";
import AuthenticateUserPage from './pages/AuthenticateUserPage';
import RedditUserProfilePage from "./pages/RedditUserProfilePage";
import SubredditsPage from "./pages/SubredditsPage";
import CommentsPage from "./pages/CommentsPage";
import PostsPage from "./pages/PostsPage";
import { useState } from "react";
import D3PostsPage from "./pages/D3PostsPage";

function App () {   
    // authentication token meant to be passed around the various components
    // to authorize a user's reddit account for use with the app
    const [ authToken, setAuthToken ] = useState(null); 
    const [ refreshToken, setRefreshTokens ] = useState(null);

    const pageContainer = 'flex flex-col m-4'
    console.log('App level refresh token: ', refreshToken);
    return (
    <div className="bg-slate-50">
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
                    className='flex justify-center items-center'
                    /> 
                <div className={pageContainer}>
                    <Navbar/>
                    <SubredditsPage
                        refreshToken={refreshToken} 
                        handleRefreshToken={setRefreshTokens}/>
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
                    <PostsPage refreshToken={refreshToken}/>
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
                    <CommentsPage refreshToken={refreshToken}/>
                </div>
            </Route>
            <Route path='/postsgraph'>
                <RedditUserProfilePage 
                    authToken={authToken} 
                    refreshToken={refreshToken} 
                    handleRefreshToken={setRefreshTokens}
                />
                <div className={pageContainer}>
                    <Navbar/>
                    <D3PostsPage refreshToken={refreshToken}/>
                </div>
            </Route>
        </div>
    </div>
    )
}

export default App;