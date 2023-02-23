import Route from "./components/Route";
import UserCredentialsPage from "./pages/UserCredentialsPage";
import LandingPage from "./pages/LandingPage";
import { useState } from "react";
import ButtonPage from "./pages/ButtonPage";

function App () {   
    // authentication token meant to be passed around the various components
    const [ authToken, setAuthToken ] = useState(null); 

    return <div>
        <Route path="/">
            <UserCredentialsPage handleAuthorize={setAuthToken}/>
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