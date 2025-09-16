import React, { useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [error, setError] = useState(false)
  const navigate = useNavigate()
  const handleLogin = e => {
    e.preventDefault()
    const form = e.target
    const id = form.id.value
    const username = form.username.value
    if (id && username) {
      const users = JSON.parse(localStorage.getItem("users"))
      const filterUser = users?.find(user => user.id === +id && user.username === username)
      if (filterUser) {
        const currentUser = { id, username }
        localStorage.setItem('currentUser', JSON.stringify(currentUser))
        form.reset()
        setError(false)
        navigate("/")
      } else {
        setError(true)
        setTimeout(() => {setError(false)}, 2000)
      }
    }
  }
  return (
    <div className="login-container">
      <h3>LOGIN</h3>
      <form action="" onSubmit={handleLogin} >
        <div className="input-group">
          <label htmlFor="id">ID</label>
          <input type="number" name='id' required placeholder='id' id='id' />
        </div>
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input type="text" name='username' required placeholder='username' id='username' />
        </div>
        {error && <p className="error">Invalid Credintials</p>}
        <button>SUBMIT</button>
      </form>
    </div>
  )
}

export default Login