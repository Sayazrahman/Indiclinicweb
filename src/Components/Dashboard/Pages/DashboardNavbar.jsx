import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Ayaz from '../../../assets/Ayaz.jpg'
import { useNavigate } from 'react-router-dom';
import HomeLogo from '../../../assets/HomeLogo.jpg';
import LoadinGif from '../../../assets/Icons/1496.gif';

export default function DashboardNavbar(props) {

  // const [isSidebarOpen, setIsSidebarOpen] = useState(false);

 
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    setLoading(true);
    setTimeout(() => {
      navigate('/Indiclinicweb');
    }, 2000);
  };
  // const toggleSidebar = () => {
  //   setIsSidebarOpen(!isSidebarOpen);
  // };
  return (
    <>
      <div className="MainNav" >
        <header className="header header-custom header-fixed header-one header-space" style={{  background: "rgb(9 0 81)", zIndex: 1, position: 'fixed' }}>
          <div className={`Navcontainer dashboardNav ${props.isSidebarOpen ? 'dashboardNav-expand' : ''}` } >
            <nav className={`navbar navbar-expand-lg navbar ${props.isSidebarOpen? 'Navcontainer-sidebarclose' : ''}`}>
              <i className="bi bi-filter-right sidebartoggleicon  mt-1"  onClick={props.toggleSidebar}></i>

              <div className="logo mt-0 ms-4">
                <img className="HomeNavLogo mt-2" src={HomeLogo} alt="Logo" />
              </div>

              <div className="mt-1 me-2 dashboardnavdropdown">
                <div className="dropdown">
                  <button
                    className=" doctorprofilebtn dropdown-toggle"
               
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span></span>
                    <img src={Ayaz} style={{width: '2rem', height: '2rem' , borderRadius: '50%'}} /> Dr.Maroof Jilani
                  </button>
                  <ul className="dropdown-menu">
                    <li>Profile Settings</li>
                    <li onClick={handleLogout}>Logout</li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </header>
      </div>
      {loading && (
        <div className="loading-overlay">
          <div className="blurred-background" />
          <div className="loading-container">
            <img src={LoadinGif} alt="Loading" />
            <h5>Logging Out..!</h5>
          </div>
        </div>
      )}
    </>
  );
}
