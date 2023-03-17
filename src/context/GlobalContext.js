import { createContext, useState } from "react";

export const GlobalContext = createContext()

export const GlobalContextProvider = ({children}) => {
    const [user, setUser] = useState({});
    //Vai receber um objeto contendo id, email, name, password, token
    const [progress, setProgress] = useState(0);

    return(
        <GlobalContext.Provider value={ {user, setUser, progress, setProgress} }>
            {children}
        </GlobalContext.Provider>
    )
}