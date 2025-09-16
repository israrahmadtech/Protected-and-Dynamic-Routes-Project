import React from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()
  return (
    <section id='home'>
      <h1 style={{ fontSize: "2em", margin: "0" }}>Home Page</h1>
      <button onClick={() => {
        localStorage.removeItem('currentUser')
        navigate('/login')
      }}>Logout</button>
    </section>
  )
}

export default Home