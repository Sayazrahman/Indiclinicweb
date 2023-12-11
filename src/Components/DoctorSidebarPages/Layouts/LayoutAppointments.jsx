import React ,{useState} from 'react'
import Appointments from '../Pages/Appointments';
import DashboardNavbar from '../../Dashboard/Pages/DashboardNavbar';
import DashboardSidebar from '../../Dashboard/Pages/DashboardSidebar';

export default function LayoutAppointments() {

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
    <Appointments isSidebarOpen={isSidebarOpen}/>
</div>

    </div>
  
  
  </>
  )
}
