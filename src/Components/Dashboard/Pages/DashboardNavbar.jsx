import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
      <div className="MainNav">
        <header className="header header-custom header-fixed header-one header-space" style={{ backgroundImage: 'linear-gradient(160deg, rgb(0 0 0) 0%, rgb(16 119 151))', zIndex: 1, position: 'fixed' }}>
          <div className={`Navcontainer dashboardNav ${props.isSidebarOpen ? 'dashboardNav-expand' : ''}` } >
            <nav className={`navbar navbar-expand-lg navbar ${props.isSidebarOpen? 'Navcontainer-sidebarclose' : ''}`}>
              <i className="bi bi-filter-right sidebartoggleicon  mt-1"  onClick={props.toggleSidebar}></i>

              <div className="logo mt-0 ms-4">
                <img className="HomeNavLogo mt-2" src={HomeLogo} alt="Logo" />
              </div>

              <div className="mt-1 me-5 dashboardnavdropdown">
                <div className="dropdown">
                  <button
                    className="btn btn doctorprofilebtn dropdown-toggle"
                    style={{ borderRadius: '5x' }}
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="bi bi-person-fill"></i> Dr.Maroof Jilani
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
