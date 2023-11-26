import React from 'react'
import HomeLogo from '../../../assets/HomeLogo.jpg'

import LoginLogo from '../../../assets/Icons/lock-solid.svg'
import userregular from '../../../assets/Icons/user-regular.svg'

import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import chevron from '../../../assets/Icons/chevron-down.svg'
import Sidebar from './Sidebar';


export default function HomeNavbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
   <div className={`MainNav ${isSidebarOpen ? 'sidebar-open' : ''}`}>
  <header className='header header-custom header-fixed header-one header-space'>
    <div className='container Navcontainer'>
      <nav className='navbar navbar-expand-lg navbar '>
    
          <span className= "sidebarOpenmenuAlign" onClick={toggleSidebar}><i class="bi bi-list" style={{fontSize: '35px' , color : 'white'}}></i></span>
      

        <div className='logo mt-0' style={{margin: 'auto'}}>
          <img className='HomeNavLogo mt-4' src={HomeLogo} alt='Logo' />
        </div>

        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav ml-auto ms-5'>
            <li className='nav-item'>
              <Link
              
                className='nav-link'
                to='/Indiclinicweb'
              >
                
                <i class="bi bi-house"></i>  Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                activeclassname='active'
                className='nav-link'
                to='/doctors'
              >
               <i class="bi bi-person-add"></i> Doctors
              </Link>
            </li>
  
            <li className='nav-item'>
              <Link
                activeclassname='active'
                className='nav-link'
                to='/pharmacy'
              >
               <i class="bi bi-capsule"></i> Pharmacy
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                activeclassname='active'
                className='nav-link'
                to='/Admin'
              >
              <i class="bi bi-person-workspace"></i>  Admin 
              </Link>
            </li>
          </ul>
        </div>

        <div className='HomeBtn mt-4'>
          <button className='btn btn registerbtn mx-2 mt-1'>
         
            <img
              className='me-2'
              src={userregular}
              alt='User Icon'
              style={{width: '1vw', height : '1vw'}}
            />
            
            <Link className='nav-item' to= "/UserRegistration">Signup</Link> 
          </button>
          <button className='btn btn-success navbtn mt-1'> <img className='me-2'src={LoginLogo} alt='Login Icon' style={{width: '1vw', height : '1vw'}}/>  <Link className='nav-item' to= "/Login">Login</Link></button>
        </div>
      </nav>
    </div>
  </header>
</div>


      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />


    </>
  )
}
