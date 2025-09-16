import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Users.css'

function Users() {
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    const [users, setUsers] = useState(null)

    useEffect(() => {
        async function handleAPI(){
            try{
                const response = await axios.get("https://jsonplaceholder.typicode.com/users")
                setUsers(response.data)
            }
            catch(error){
                setIsError(true)
                console.log("Something went wrong...");
            }
            finally{
                setIsLoading(false)
            }
        }
        handleAPI()
    }, [])    

    if(isLoading) return <p>Loading...</p>
    if(isError) return <p>Something went wrong</p>
  return (
    <div className='users-container'>
        {users?.map(user => (
            <p key={user.id}>{user?.id}. {user?.name} <Link to={`/users/${user.id}`}>Details</Link> </p>
        ))}
    </div>
  )
}

export default Users