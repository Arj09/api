import React, { useState } from "react";
import {UserContext} from "./Context";

export const UserContextProvider = ({children}) => {
    
    const [id, setID] = useState()
 
    
    return(
        <UserContext.Provider value={{id, setID}}>
        {children}
        </UserContext.Provider>
    )
}

