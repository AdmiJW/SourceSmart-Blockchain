// ? Author: AdmiJW
// ?
// ? This context holds data that most components need to access, like wallet account.


import React, { useState, createContext } from "react";


const AppContext = createContext(null);



function AppContextProvider({ children }) {
    const [ account, setAccount ] = useState(null);


    // Put exposed states here
    const state = {
        account, 
        setAccount,
    };



    return (
        <AppContext.Provider value={ state } >
            {children}
        </AppContext.Provider>
    );
}


export { AppContextProvider }
export default AppContext;