import React, { useContext, useState } from 'react';
import ls from 'local-storage';

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

    const [watchList, setWatchList] = useState(ls.get('myList'))


    const addToList = (video) => {
        let myList;
        if (ls('myList') !== null) {
            myList = ls.get('myList');
            myList.push(video)
            ls.set('myList', myList)
            setWatchList(myList)
        } else {
            ls.set('myList', [video])
        }
    }

    const removeFromList = (videoId) => {
        let myList = ls('myList')
        myList = myList.filter((video) => video.mediaId !== videoId)
        ls.set('myList', myList)
        setWatchList(myList)
    }

    
    

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
                addToList,
                removeFromList,
                watchList,
            }}>
            {children}
        </StateContext.Provider>
    )
}