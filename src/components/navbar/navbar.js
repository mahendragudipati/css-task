import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css"

function Navbar() {
    const style={
        textDecoration:"none",
        // color:"red",
        // margin:"50px"
        // padding:"20px"
    }
  return (
    <div>
      <ul className="nav">
  <li className="nav-item">
    {/* <a>Active</a> */}
    <Link to={"/"} style={style}><h3 className='head'>Home</h3></Link>
  </li>
  <li className="nav-item">
    {/* <a class="nav-link" href="#">Link</a> */}
    <Link to={"/products"} style={style}><h3 className='head'>Products</h3></Link>
  </li>
  <li className="nav-item">
    {/* <a class="nav-link" href="#">Link</a> */}
    <Link to={"/setting"} style={style}><h3 className='head'>Setting</h3></Link>
  </li>
  <li className="nav-item">
    {/* <a class="nav-link disabled" href="#">Disabled</a> */}
    <Link to={"/about"} style={style}><h3 className='head'>About</h3></Link>
  </li>
</ul>
    </div>
  )
}

export default Navbar
