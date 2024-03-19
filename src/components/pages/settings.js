import React from 'react'
import Navbar from '../navbar/navbar'
import CardProduct from '../hooks/useeffect/card'

function Settings() {
  return (
    <div>
      <Navbar/>
      {/* <h1>this is a setting page</h1> */}
      {/* <img src="https://th.bing.com/th/id/OIP.r3DoLYPjOrNYQ4WQbQHaZQHaDt?rs=1&pid=ImgDetMainalt" alt='hello' style={{width:1550,height:750}}/> */}
      <CardProduct/>
    </div>
  )
}

export default Settings
