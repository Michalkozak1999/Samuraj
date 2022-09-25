import React, { createContext } from "react"


export const StoreContext = createContext()

const StoreProvider = ({ children }) => (
    <StoreContext.Provider value={new RootStore()}>

        {children}


    </StoreContext.Provider>
)