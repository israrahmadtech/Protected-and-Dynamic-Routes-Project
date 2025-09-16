import React, { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import "./Header.css"

function Header() {
    const [currentUser, setCurrentUser] = useState(null)
    const location = useLocation()
    
    useEffect(() => {
        setCurrentUser(JSON.parse(localStorage.getItem('currentUser')))
    }, [location])
    
    return (
        <header id="header">
            {
                currentUser ? (<div className="header-container">
                    <nav>
                        <ul>
                            <li>
                                <NavLink to='/'>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/users">Users</NavLink>
                            </li>
                            <li>
                                <NavLink to="/landing">Landing Page</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about">About</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact" >Contact</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>) :
                    (<div className="header-container">
                        <nav>
                            <ul>
                                <li>
                                    <NavLink to="/landing">Landing Page</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/about">About</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/contact" >Contact</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/login" >Login</NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>)
            }
        </header>
    )
}

export default Header