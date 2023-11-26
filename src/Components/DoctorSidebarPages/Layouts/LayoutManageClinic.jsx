import React , {useState } from 'react'
import DashboardNavbar from '../../Dashboard/Pages/DashboardNavbar'
import DashboardSidebar from '../../Dashboard/Pages/DashboardSidebar'
import ManageClinic from '../Pages/ManageClinic';

export default function LayoutManageClinic() {
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
    <ManageClinic isSidebarOpen={isSidebarOpen}/>
</div>

    </div>
   
   </>
  )
}
