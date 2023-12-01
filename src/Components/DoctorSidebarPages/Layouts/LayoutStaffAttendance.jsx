import React  , { useState } from 'react'
import DashboardNavbar from '../../Dashboard/Pages/DashboardNavbar'
import DashboardSidebar from '../../Dashboard/Pages/DashboardSidebar'
import StaffAttendance from '../Pages/StaffAttendance'

export default function LayoutStaffAttendance() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
        console.log("Hi")
      };
  return (
    <>
   
    <div style={{display: 'flex'}}> 
<DashboardNavbar toggleSidebar= {toggleSidebar} isSidebarOpen={isSidebarOpen}/>
<DashboardSidebar isSidebarOpen={isSidebarOpen}/>
<div style={{paddingTop: '100px',width: '68rem'}}>
    <StaffAttendance isSidebarOpen={isSidebarOpen}/>
</div>

    </div>
    
    </>
  )
}
