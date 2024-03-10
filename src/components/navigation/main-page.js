import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import home from './home'
import products from './products'
import settings from './settings'
import About from './about'

function MainPage() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" Component={home}/>
        <Route path="/setting" Component={settings}/>
        <Route path="/about" Component={About}/>
        <Route path="/Nellore/:products" Component={products}/>
      </Routes>
      
      </BrowserRouter>
    </div>
  )
}

export default MainPage
