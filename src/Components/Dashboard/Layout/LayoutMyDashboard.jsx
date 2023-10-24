import React from 'react'
import MyDashboard from '../Pages/MyDashboard'
import DashboardNavbar from  '../Pages/DashboardNavbar'
import DashboardSidebar from '../Pages/DashboardSidebar';
import Footer from '../../../Components/Home/Pages/Footer'
export default function LayoutMyDashboard() {
  return (
   <>
  
       <DashboardNavbar/>
   <div style={{ display: 'flex',}}>
   <DashboardSidebar/>
   <MyDashboard/>
   </div>

 
  
   </>
  )
}
