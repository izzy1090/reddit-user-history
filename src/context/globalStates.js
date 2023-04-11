import { createContext, useState } from "react";

const GlobalStatesContext = createContext();

function GlobalStatesProvider({children}){
    const [ username, setUsername ] = useState(null);
    const [ posts, setPosts ] = useState([]);
    const [ comments, setComments ] = useState([]);

    return <GlobalStatesContext.Provider value={{
            username, 
            setUsername, 
            posts, 
            setPosts, 
            comments, 
            setComments}}>
        {children}
    </GlobalStatesContext.Provider>
};

export { GlobalStatesProvider };
export default GlobalStatesContext;