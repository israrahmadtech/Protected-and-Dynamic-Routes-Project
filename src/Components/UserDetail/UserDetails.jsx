import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './UserDetails.css'

function UserDetails() {
    const {userId} = useParams()

    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    const [user, setUser] = useState(null)

    useEffect(() => {
        const handleAPI2 = async () => {
            try{
                const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
                setUser(response.data)
            }
            catch(error){
                setIsError(true)
                console.log("Something went wrong :(");
            }
            finally{
                setIsLoading(false)
            }
        }
        handleAPI2()
    }, [userId])
    
    if(isLoading) return <p>Loading...</p>
    if(isError) return <p>Something went wrong!</p>
  return (
    <div className="user-card">
        <h5>ID: {user?.id}</h5>
        <h5>Name: {user?.name}</h5>
        <h5>Email: {user?.email}</h5>
        <h5>Username: {user?.username}</h5>
        <h5>Company: {user?.company?.name}</h5>
        <button><Link to='/users'>Users</Link></button>
    </div>
  )
}

export default UserDetails