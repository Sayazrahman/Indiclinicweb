import React, { useState } from 'react';
import { NavLink , Link} from 'react-router-dom';
import HomeLogo from '../../../assets/HomeLogo.jpg'
import chevrondown from "../../../assets/Icons/chevron-down.svg"
import LoginLogo from '../../../assets/Icons/lock-solid.svg'
import userregular from '../../../assets/Icons/user-regular.svg'
export default function Sidebar({ isOpen, onClose }) {
  const body = document.querySelector('body');
  
  const handleSidebarToggle = () => {
    if (isOpen) {
      body.classList.remove('sidebar-open');
      document.getElementById("root").style.overflow = "hidden"
    } else {
      body.classList.add('sidebar-open');
    }
    onClose();
  };
  return (
    <>
     <div className={`sidebar ${isOpen ? 'open' : ''}`}>
 
      <ul className='sideUl'>
                <li>
                  <Link  to= "/Indiclinicweb">
                  <i class="bi bi-house"></i> Home
                  <i class="bi bi-chevron-double-right" style={{fontSize: '15px',fontWeight : 'bolder'}}></i>
                    </Link>
                  </li>
                <li>
                  
                <Link activeClassName="active" to= "/Indiclinic"><i class="bi bi-person-add"></i> Doctors <i class="bi bi-chevron-double-right" style={{fontSize: '15px',fontWeight : 'bolder'}}></i></Link></li>
                <li>  <Link  to= "/"><i class="bi bi-capsule"></i> Pharmacy <i class="bi bi-chevron-double-right" style={{fontSize: '15px',fontWeight : 'bolder'}}></i></Link></li>
                <li>  <Link  to= "/"><i class="bi bi-person-workspace"></i> Admin <i class="bi bi-chevron-double-right" style={{fontSize: '15px',fontWeight : 'bolder'}}></i></Link></li>
                <li>  <Link  type = 'button' to= "/UserRegistration"><i class="bi bi-person"></i> Register<i class="bi bi-chevron-double-right" style={{fontSize: '15px',fontWeight : 'bolder'}}></i></Link></li>
                <li>  <Link  type = 'button' to= "/Login"><i class="bi bi-box-arrow-in-right"></i> Login<i class="bi bi-chevron-double-right" style={{fontSize: '15px',fontWeight : 'bolder'}}></i></Link></li>
               
      
            </ul>
      <button onClick={handleSidebarToggle}>Close</button>
    </div>
    {isOpen && <div className="overlay" onClick={handleSidebarToggle}></div>}
    </>
   
  );
}
