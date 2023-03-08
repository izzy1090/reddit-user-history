import { useContext } from "react";
import UsernameContext from "../context/username";

function useUsername(){
    return useContext(UsernameContext)
}

export default useUsername;