import React from 'react'
import {Routes,Route } from "react-router-dom";
import Home from '../components/Home';
import Signup from '../components/Signup';
import Login from '../components/Login';
import Product from '../components/Product';
import PrivateComponent from '../components/PrivateComponent';
import Otp from '../components/Otp';
const AllRoutes = () => {
  return (
      <>
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/signup' element={<Signup />} />
              <Route path='/login' element={<Login />} />
              <Route path='/otp' element={<Otp/>}/>
              <Route path='/product' element={   <PrivateComponent>  <Product />  </PrivateComponent> } />
              
          </Routes>
      </>
  )
}

export default AllRoutes
