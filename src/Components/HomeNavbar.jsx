import React from 'react'
import HomeLogo from '../assets/HomeLogo.jpg'
import menu from "../assets/Icons/bars-solid.svg"
import LoginLogo from '../assets/Icons/lock-solid.svg'
import userregular from '../assets/Icons/user-regular.svg'
import chevrondown from "../assets/Icons/chevron-down.svg"
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import Sidebar from './Home/Sidebar'

export default function HomeNavbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
   <div className={`MainNav ${isSidebarOpen ? 'sidebar-open' : ''}`}>
  <header className='header header-custom header-fixed header-one header-space'>
    <div className='container'>
      <nav className='navbar navbar-expand-lg navbar '>
        <button
          className='navbar-toggler'
          type='button'
          onClick={toggleSidebar}
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='logo' style={{margin: 'auto'}}>
          <img className='HomeNavLogo mt-4' src={HomeLogo} alt='Logo' />
        </div>

        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item'>
              <NavLink
                activeClassName='active'
                className='nav-link'
                to='/indiclinicweb'
              >
                Home
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                activeClassName='active'
                className='nav-link'
                to='/patients'
              >
                Patients
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                activeClassName='active'
                className='nav-link'
                to='/doctors'
              >
                Doctors
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                activeClassName='active'
                className='nav-link'
                to='/pharmacy'
              >
                Pharmacy
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                activeClassName='active'
                className='nav-link'
                to='/admin'
              >
                Admin
              </NavLink>
            </li>
          </ul>
        </div>

        <div className='HomeBtn mt-4'>
          <button className='btn btn-primary registerbtn mx-2 mt-1'>
            <img
              className='me-2'
              src={userregular}
              alt='User Icon'
              style={{width: '1vw', height : '1vw'}}
            />
            Register
          </button>
          <button className='btn btn-success navbtn mt-1'>  <img
              className='me-2'
              src={LoginLogo}
              alt='Login Icon'
              style={{width: '1vw', height : '1vw'}}
            />Login
           
        
          </button>
        </div>
      </nav>
    </div>
  </header>
</div>


      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />


    </>
  )
}
