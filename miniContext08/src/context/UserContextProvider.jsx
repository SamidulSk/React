import React from 'react'
import UserContext from './UserContext'

const UserContextProvider = ({ children }) => {
    const [user, setUser] = React.useState(null)
    return (
        // value means what data is in your context provider , some component can save data to it and some can read data from it
        <UserContext.Provider value={{ user, setUser }}> 
            {children}
        </UserContext.Provider >
    )
}

export default UserContextProvider