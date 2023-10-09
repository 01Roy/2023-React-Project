import React, { useContext } from 'react'
import UserContext from '../Context/UserContext'

function Profile() {
    const { user } = useContext(UserContext)
    return (
        <>
            {!user ? <div>Please login</div> : <div>Welcome {user.username}</div>}
        </>
    )
}

export default Profile