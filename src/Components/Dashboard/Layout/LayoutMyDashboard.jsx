import React ,  { useState } from 'react'
import MyDashboard from '../Pages/MyDashboard'
import DashboardNavbar from  '../Pages/DashboardNavbar'
import DashboardSidebar from '../Pages/DashboardSidebar';
import Footer from '../../../Components/Home/Pages/Footer'
export default function LayoutMyDashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    console.log("Hi")
  };
  return (
   <>
  
       <DashboardNavbar toggleSidebar= {toggleSidebar} isSidebarOpen={isSidebarOpen} />
   <div style={{ display: 'flex'}}>
    <div style={{width : "auto"}}>
    <DashboardSidebar isSidebarOpen={isSidebarOpen}/>
    </div>
   <MyDashboard isSidebarOpen={isSidebarOpen}/>
   </div>

 
  
   </>
  )
}
