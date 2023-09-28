import React from 'react'
import { Route,Routes } from 'react-router-dom'
import LayoutLoginPanel from '../Home/Layouts/LayoutLoginPanel'
import LayoutUserRegistration from '../Home/Layouts/LayoutUserRegistration'
export default function ApiRoutes() {
  return (
    <>
    <Routes>
   <Route path="/Indiclinicweb" element={<LayoutLoginPanel/>} />
   <Route path="/UserRegistration" element={<LayoutUserRegistration/>} />
   
</Routes>
    
    
    </>
  )
}
