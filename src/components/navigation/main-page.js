import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


import About from '../pages/about'
import InvailedPage from '../pages/invailed'
import Home from '../pages/home'
import Settings from '../pages/settings'
import Products from '../pages/productsDetails'
// import ProductPage from '../pages/product'
import ContactPage from '../pages/contact'
import Controlled from '../forms/controlled'
import RegistrationForm from '../pages/registerpage'
import LoginPage from '../pages/loginpage'

function MainPage() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/contact" Component={ContactPage}/>

        <Route path="/setting" Component={Settings}/>
        <Route path="/about" Component={About}/>
        <Route path="/:category/:products" Component={Products}/>
        <Route path="*" Component={InvailedPage}/>
        <Route path="/register" Component={RegistrationForm}/>
        <Route path="/login" Component={LoginPage}/>
      </Routes>
      
      </BrowserRouter>
    </div>
  )
}

export default MainPage
