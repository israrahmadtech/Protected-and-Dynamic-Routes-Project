import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import ProtectedRoutes from './ProtectedRoutes/ProtectedRoutes'
import Home from './Components/Home/Home'
import RedirectIfAuthenticated from './RedirectIfAuthenticated/RedirectIfAuthenticated'
import Login from './Components/Login/Login'
import Users from './Components/Users/Users'
import UserDetails from './Components/UserDetail/UserDetails'
import RouterLayout from './RouterLayout/RouterLayout'
import NotFound from './NotFound'
import Landing from './Components/Landing/Landing'
import Contact from './Components/Contact/Contact'
import About from './Components/About/About'
import axios from 'axios'

function App() {
  const [users, setUsers] = useState(null)
  useEffect(() => {
    async function getUsers(){
      try{
        const response = await axios.get("https://jsonplaceholder.typicode.com/users")
        setUsers(response.data)
      }
      catch(error){
        console.log("Something went wrong!");
      }
    }
    getUsers()
  }, [])
  useEffect(() => {
    if(users) localStorage.setItem("users", JSON.stringify(users))
  }, [users])
  
  return (
    <>
      <Routes>
        <Route path='/' element={<RouterLayout />}>
          <Route element={<ProtectedRoutes />}>
            <Route index element={<Home />} />
            <Route path='/users' element={<Users />} />
            <Route path='users/:userId' element={<UserDetails />} />
          </Route>
          <Route element={<RedirectIfAuthenticated />}>
            <Route path='/login' element={<Login />} />
          </Route>
          <Route path='/landing' element={<Landing/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}

export default App