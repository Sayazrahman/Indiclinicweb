import React from 'react'
import { Route,Routes } from 'react-router-dom'
import LayoutLoginPanel from '../Home/Layouts/LayoutLoginPanel'
import LayoutUserRegistration from '../Home/Layouts/LayoutUserRegistration'
import LayoutHome from '../Home/Layouts/LayoutHome'
import LayoutMyDashboard from '../Dashboard/Layout/LayoutMyDashboard'
import AdminDashboard from '../Dashboard/Admin/AdminDashboard'



export default function ApiRoutes() {
  return (
    <>
    <Routes>
   <Route path="/Indiclinicweb" element={<LayoutHome/>} />
   <Route path="/Login" element={<LayoutLoginPanel/>} />
   <Route path="/UserRegistration" element={<LayoutUserRegistration/>} />
   <Route path="/MyDashboard" element={<LayoutMyDashboard/>} />
   <Route path="/Admin" element={<AdminDashboard/>} />
  
   
</Routes>
    
    
    </>
  )
}
