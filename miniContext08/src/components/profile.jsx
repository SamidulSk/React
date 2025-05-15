import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    //using data of UserContext
    const {user} = useContext(UserContext)
    
    if (!user) return <div>please login</div>

    return <div>Welcome {user.username} your password is {user.password}</div>
}

export default Profile