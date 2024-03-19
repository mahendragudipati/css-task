import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./invailed.css"

function InvailedPage() {
    const Naviagate = useNavigate()

    
    
    const NavigateToHome=()=>{
        Naviagate("/")
    }

  return (
    <div className='invaild'>
      <h1>This page invailed 404 Error</h1>
      <button onClick={NavigateToHome}>Home page</button>
    </div>
  )
}

export default InvailedPage
