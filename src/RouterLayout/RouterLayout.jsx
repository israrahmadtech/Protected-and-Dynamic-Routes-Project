import React from 'react'
import { Outlet } from 'react-router-dom'
import "./RouterLayout.css"
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'

function RouterLayout() {
  return (
    <main id="main">
      <Header />
      <div className="layout-container">
        <Outlet />
      </div>
      <Footer />
    </main>
  )
}

export default RouterLayout