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

    const pageContainer = 'flex flex-col m-4 pl-[25%] pr-[25%]'
    const responsiveClasses = 
        'xs:p-0 xs:m-0 sm:p-0 md:p-0 lg:pl-[10%] lg:pr-[4%] lg:pl-[4%]'
    console.log('App level refresh token: ', refreshToken);
    return (
    <div className="bg-slate-50">
        <Route path="/">
            <div className={`${pageContainer} ${responsiveClasses}`}>
                <AuthenticateUserPage handleAuthToken={setAuthToken} />
            </div>
        </Route>
            <div className={`p-5 ${responsiveClasses}`}>
            <div className={`${pageContainer} ${responsiveClasses}`}>
                <Route path='/userprofile'>
                    <RedditUserProfilePage 
                        authToken={authToken} 
                        refreshToken={refreshToken} 
                        handleRefreshToken={setRefreshTokens}
                        handleAuthToken={setAuthToken}
                        className='flex justify-center items-center'
                        /> 
                    <Navbar/>
                    <SubredditsPage
                        refreshToken={refreshToken} 
                        handleRefreshToken={setRefreshTokens}/>
                </Route>
            </div>
            <Route path='/userprofile/posts'>
                <div className={`${pageContainer} ${responsiveClasses}`}>
                    <RedditUserProfilePage 
                        authToken={authToken} 
                        refreshToken={refreshToken} 
                        handleRefreshToken={setRefreshTokens}
                    />
                    
                    <Navbar/>
                    <PostsPage refreshToken={refreshToken}/>
                </div>
            </Route>
            <Route path='/userprofile/comments'>
                <div className={`${pageContainer} ${responsiveClasses}`}>
                    <RedditUserProfilePage 
                        authToken={authToken} 
                        refreshToken={refreshToken} 
                        handleRefreshToken={setRefreshTokens}
                    />
                    
                    <Navbar/>
                    <CommentsPage refreshToken={refreshToken}/>
                </div>
            </Route>
            <Route path='/metrics'>
                <div className={`${pageContainer} ${responsiveClasses}`}>
                    <RedditUserProfilePage 
                        authToken={authToken} 
                        refreshToken={refreshToken} 
                        handleRefreshToken={setRefreshTokens}
                    />
                    <Navbar/>
                    <D3PostsPage refreshToken={refreshToken}/>
                </div>
            </Route>
        </div>
    </div>
    )
}

export default App;
