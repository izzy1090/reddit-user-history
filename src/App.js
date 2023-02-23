import Route from "./components/Route";
import AuthenticateUserPage from './pages/AuthenticateUserPage';
import LandingPage from "./pages/LandingPage";
import { useState } from "react";
import ButtonPage from "./pages/ButtonPage";

function App () {   
    // authentication token meant to be passed around the various components
    // to authorize a user's reddit account for use with the app
    const [ authToken, setAuthToken ] = useState(null); 

    return <div>
        <Route path="/">
            <AuthenticateUserPage handleAuthorize={setAuthToken}/>
        </Route>
        <Route path='/landingpage'>
            <LandingPage authToken={authToken}/>
        </Route>
        <Route path='/buttons'>
            <ButtonPage/>
        </Route>
    </div>
}

export default App;