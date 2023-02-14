import { useState } from "react";
import getAccessToken from "./api/GetAccessToken";


function App () {    
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    
    const handleClick = (event) => {
        event.preventDefault()
        getAccessToken(username, password);
    }

    const handleSetUsername = (event) => {
        setUsername(event.target.value)
        console.log(username)
    }

    const handleSetPassword = (event) => {
        setPassword(event.target.value)
        console.log(password)
    }

    return <div>
        <form onSubmit={handleClick}>
            <input onChange={handleSetUsername}></input>
        </form>
        <form onSubmit={handleClick}>
            <input onChange={handleSetPassword}></input>
        </form>
        <button onClick={handleClick}>
            Generate Token!
        </button>
    </div>
}

export default App;