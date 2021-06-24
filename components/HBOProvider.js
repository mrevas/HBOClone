import React, { useContext, useState } from 'react';

export StateContext = React.createContext()

export function useStateContext() {
    return useContext(StateContext)
}

export function HBOProvider({ children }) {
    return (
        <StateContext.Provider
            value={{
                test: 'test'
            }}>
            {children}
        </StateContext.Provider>
    )
}