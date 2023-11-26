import React, { useState } from 'react';
import { NavLink , Link} from 'react-router-dom';
import HomeLogo from '../../../assets/HomeLogo.jpg'
import chevrondown from "../../../assets/Icons/chevron-down.svg"
import Ayaz from '../../../assets/Ayaz.jpg'


export default function DashboardSidebar(props) {
  const [isSubMenuVisible, setSubMenuVisible] = useState(false);

  const handleSubMenuToggle = () => {
    setSubMenuVisible(!isSubMenuVisible);
  };
  return (
    <>
  
     <div className= {`Dashboardsidebar ${props.isSidebarOpen?'dashboardsidebar-open ' : ''}`} >
     <div className='doctorprofilesidebar'>
  <div className='drProfile'>
<img src={Ayaz} />
<div className='mt-1'><h6 style={{color: 'white'}}>Dr. Maroof Jilani</h6></div>
<div className='mt-1'><p>MBBS, MD - </p></div>
  </div>
</div>

               <ul className='sideUl'>
                <li className='nav-item'> <Link  to= "/MyDashboard"   activeclassname='active' className='active'> <i class="bi bi-layout-text-window-reverse"></i><span className='ms-2'>Dashboard</span></Link></li>
                <li  className='nav-item'> <Link activeClassName="active" to= "/MyDashboard"  className='active'><i class="bi bi-calendar2-check-fill"></i><span className='ms-2'>Appointments</span></Link></li>
                <li className='nav-item'> <Link  to= "/MyDashboard"className='active'> <i class="bi bi-heart-pulse-fill"></i><span className='ms-2'>My Patients</span></Link></li>
                <li className='nav-item'> <Link  to= "/ManageClinic"className='active'> <i class="bi bi-heart-pulse-fill"></i><span className='ms-2'>My Clinic</span></Link></li>
                {/* <li className='nav-item'>  <Link  to= "/ManageStaffs" className='active'><i class="bi bi-people-fill"></i><span className='ms-2'>Manage Staffs</span></Link></li> 
                */}
          <li className="nav-item">
          <div className="" onClick={handleSubMenuToggle}>
            <i className="bi bi-people-fill" style={{color: 'black'}}></i>
            <span className="ms-2">Manage Staffs</span>
            {isSubMenuVisible ? (
              <i className="bi bi-caret-up-fill ms-auto ms-3" style={{color: 'black',fontSize: '15px'}}></i>
            ) : (
              <i className="bi bi-caret-down-fill ms-auto ms-3" style={{color: 'black',fontSize: '15px'}}></i>
            )}
          </div>
          {/* Dropdown content */}
          {isSubMenuVisible && (
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link to="/ManageStaffs/subpage1" className="nav-link">
                  Subpage 1
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/ManageStaffs/subpage2" className="nav-link">
                  Subpage 2
                </Link>
              </li>
              {/* Add more submenu items as needed */}
            </ul>
          )}
        </li>
                <li className='nav-item'>  <Link  to= "/MyDashboard" className='active'><i class="bi bi-receipt"></i><span className='ms-2'>Invoices</span></Link></li>
                <li className='nav-item'>  <Link  to= "/MyDashboard" className='active'><i class="bi bi-cash-coin"></i><span className='ms-2'>Accounts</span></Link></li>
                <li className='nav-item'>  <Link  to= "/MyDashboard" className='active'><i class="bi bi-star-fill"></i><span className='ms-2'>Reviews</span></Link></li>
                <li className='nav-item'>  <Link  to= "/MyDashboard" className='active'><i class="bi bi-chat-fill"></i><span className='ms-2'>Messages</span></Link></li>
                <li className='nav-item'>  <Link  to= "/MyDashboard" className='active'><i class="bi bi-share-fill"></i><span className='ms-2'>Social Media</span></Link></li>
                <li className='nav-item'>  <Link  to= "/MyDashboard" className='active'><i class="bi bi-person-lines-fill"></i><span className='ms-2'>Manage Profile</span></Link></li>
                <li className='nav-item'>  <Link  to= "/MyDashboard" className='active'><i class="bi bi-box-arrow-right"></i><span className='ms-2'>Logout</span></Link></li>

               
      
            </ul>
   
    </div>
    </>
   
  );
}
