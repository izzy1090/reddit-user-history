import { createContext, useState } from "react";

const UsernameContext = createContext();

function UsernameProvider({children}){
    const [ username, setUsername ] = useState(null);

    const handleUsername = (newUsername) => {
        setUsername(newUsername)
    }

    return <UsernameContext.Provider value={{username, handleUsername}}>
        {children}
    </UsernameContext.Provider>
};

export { UsernameProvider };
export default UsernameContext;