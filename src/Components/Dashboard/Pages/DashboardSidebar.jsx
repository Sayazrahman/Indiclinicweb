import React, { useState } from 'react';
import { NavLink , Link} from 'react-router-dom';
import HomeLogo from '../../../assets/HomeLogo.jpg'
import chevrondown from "../../../assets/Icons/chevron-down.svg"
import Ayaz from '../../../assets/Ayaz.jpg'
export default function DashboardSidebar({ isOpen, onClose }) {
  return (
    <>
  
     <div className= "Dashboardsidebar" >
     <div className='doctorprofilesidebar'>
  <div className='drProfile'>
<img src={Ayaz}  style={{width : '7vw', height: '15vh', borderRadius : '50px'}}/>
<div className='mt-1'><h6 style={{color: 'white'}}>Dr. S.Ayaz Rahman</h6></div>
<div className='mt-1'><p>BDS, MDS - Surgeon</p></div>
  </div>
</div>

      <ul className='sideUl'>
                <li className='nav-item'><Link  to= "/"   activeclassname='active' className='active'> <i class="bi bi-layout-text-window-reverse"></i><span className='ms-2'>Dashboard</span></Link></li>
                <li  className='nav-item'><Link activeClassName="active" to= "/"  className='active'><i class="bi bi-calendar2-check-fill"></i><span className='ms-2'>Appointments</span></Link></li>
                <li className='nav-item'> <Link  to= "/"className='active'> <i class="bi bi-heart-pulse-fill"></i><span className='ms-2'>My Patients</span></Link></li>
                <li className='nav-item'>  <Link  to= "/" className='active'><i class="bi bi-hourglass-bottom"></i><span className='ms-2'>Schedule Timing</span></Link></li>
                <li className='nav-item'>  <Link  to= "/" className='active'><i class="bi bi-alarm-fill"></i><span className='ms-2'>Available Timings</span></Link></li>
                <li className='nav-item'>  <Link  to= "/" className='active'><i class="bi bi-people-fill"></i><span className='ms-2'>Manage Staffs</span></Link></li>
                <li className='nav-item'>  <Link  to= "/" className='active'><i class="bi bi-receipt"></i><span className='ms-2'>Invoices</span></Link></li>
                <li className='nav-item'>  <Link  to= "/" className='active'><i class="bi bi-cash-coin"></i><span className='ms-2'>Accounts</span></Link></li>
                <li className='nav-item'>  <Link  to= "/" className='active'><i class="bi bi-star-fill"></i><span className='ms-2'>Reviews</span></Link></li>
                <li className='nav-item'>  <Link  to= "/" className='active'><i class="bi bi-chat-fill"></i><span className='ms-2'>Messages</span></Link></li>
                <li className='nav-item'>  <Link  to= "/" className='active'><i class="bi bi-share-fill"></i><span className='ms-2'>Social Media</span></Link></li>
                <li className='nav-item'>  <Link  to= "/" className='active'><i class="bi bi-person-lines-fill"></i><span className='ms-2'>Manage Profile</span></Link></li>
                <li className='nav-item'>  <Link  to= "/" className='active'><i class="bi bi-box-arrow-right"></i><span className='ms-2'>Logout</span></Link></li>

               
      
            </ul>
   
    </div>
    </>
   
  );
}
