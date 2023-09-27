import React from 'react'
import { Route,Routes } from 'react-router-dom'
import LayoutLoginPanel from '../Home/Layouts/LayoutLoginPanel'
export default function ApiRoutes() {
  return (
    <>
    <Routes>
   <Route path="/indiclinicweb" element={<LayoutLoginPanel/>} />
   
</Routes>
    
    
    </>
  )
}
