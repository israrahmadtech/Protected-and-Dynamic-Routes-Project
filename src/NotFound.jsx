import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function NotFound() {
    // const location = useLocation()
    const [currentUser, setCurrentUser] = useState(null)
    useEffect(() => {
        setCurrentUser(JSON.parse(localStorage.getItem("currentUser")))
    }, [])
    
    return (
        <div style={{textAlign: "center"}}>
            <p>Not Found...</p>
            Go to {
                currentUser ? (<Link to="/" style={{color: 'yellow', fontWeight: '600'}}>Home</Link>)
            : (<Link to="/login" style={{color: 'yellow', fontWeight: '600'}}>Login</Link>) }
        </div>
    )
}

export default NotFound