import React, { useContext, useState } from 'react';

export const StateContext = React.createContext();

export function useStateContext() {
    return useContext(StateContext)
}

export function HBOProvider({ children }) {
    const [user, setUser] = useState('')
    const defaultUserImg = 'https://uifaces.co/our-content/donated/vIqzOHXj.jpg'
    const createUserAction = (e) => {
        setUser(e.target.value)
    }

    // side navigation modal
    const [sideNavOpen, setSideNavOpenAction] = useState(false)
    // account modal
    const [accountModalOpen, setAccountModalOpenAction] = useState(false)
    // search modal
    const [searchOpen, setSearchOpenAction] = useState(false)

    const thumbTypes = ['large-v', 'small-v',]


    return (
        <StateContext.Provider
            value={{
                user,
                createUserAction,
                defaultUserImg,
                sideNavOpen,
                setSideNavOpenAction,
                accountModalOpen,
                setAccountModalOpenAction,
                searchOpen,
                setSearchOpenAction,
                thumbTypes,
            }}>
            {children}
        </StateContext.Provider>
    )
}