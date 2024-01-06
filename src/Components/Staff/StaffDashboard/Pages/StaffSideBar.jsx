import React, { useState } from "react";
import { Link } from "react-router-dom";
import woman from "../../../../assets//Icons/woman.png";
export default function StaffSideBar() {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const currentDate = new Date().toLocaleDateString(undefined, options);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };
  

  return (
    <>
     
        <div
          class="d-flex flex-column flex-shrink-0 p-3 "
          style={{
            height: "100vh",
            width: "290px",
            
            backgroundColor: "rgb(24, 89, 80)",
            color: "white",
            overflowY: "auto",
            marginLeft: isSidebarOpen ? "0" : "-220px",
            transition: "margin-left 0.3s ease",
          }}
        >
         {isSidebarOpen? <div className="d-flex mt-5">
           <img src={woman} style={{ width: "2rem" }} />
            <h6 className="mt-1 ms-2 text-light">Sabeeha Rahman</h6>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              class=" mx-3 bi bi-list text-light"
              viewBox="0 0 16 16"
              onClick={toggleSidebar}
              style={{ cursor: "pointer" }}
            >
              <path
                fill-rule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
              />
            </svg>
          </div>: <div className=" mt-5 " style={{marginLeft:'13rem' }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              class=" mx-3 bi bi-list text-light "
              viewBox="0 0 16 16"
              onClick={toggleSidebar}
              style={{ cursor: "pointer" }}
            >
              <path
                fill-rule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
              />
            </svg>
          </div>}
           <hr/>
         {isSidebarOpen &&(<> <p className="text-light fs-6 fst-italic">{currentDate}</p> <hr /></>)}
          
          <ul class="nav nav-pills flex-column mb-auto mt-4 ">
        
          {isSidebarOpen?<li class="nav-item mt-2">
             <Link  to='/StaffDashboard' class="nav-link text-light " aria-current="page">
               <i class="bi bi-house-door mx-2"></i>
          Home
        </Link>
         </li>: <li class="nav-item mt-2">
             <Link  to='/StaffDashboard' class="nav-link text-light " aria-current="page">
               <i class="bi bi-house-door" style={{marginLeft:'13rem'}}></i>
        </Link>
         </li>}

           {isSidebarOpen? <li class="nav-item mt-2">
              <Link
                to="/LayoutPatient"
                class="nav-link text-light "
                aria-current="page"
              >
                <i class="bi bi-person-wheelchair mx-2"></i>
                Patients
              </Link>
            </li>:<li class="nav-item mt-2">
              <Link
                to="/LayoutPatient"
                class="nav-link text-light "
                aria-current="page"
              >
                <i class="bi bi-person-wheelchair " style={{marginLeft:'13rem'}}></i>
              </Link>
            </li>}

           {isSidebarOpen?<li class="nav-item mt-2">
              <Link to='/AppointmentSchedule' class="nav-link text-light ">
                <i class="bi bi-table  mx-2"></i>
                Schedule Appointment
              </Link>
            </li>:<li class="nav-item mt-2">
              <a href="#" class="nav-link text-light ">
                <i class="bi bi-table " style={{marginLeft:'13rem'}}></i>
           
              </a>
            </li>}
            {isSidebarOpen?<li class="nav-item mt-2 ">
              <a href="#" class="nav-link  text-light">
                <i class="bi bi-chat-dots-fill mx-2"></i>
                Chat (Coming soon)
              </a>
            </li>:<li class="nav-item mt-2 ">
              <a href="#" class="nav-link  text-light">
                <i class="bi bi-chat-dots-fill "style={{marginLeft:'13rem'}}></i>
          
              </a>
            </li>}
           { isSidebarOpen?<li class="nav-item mt-2">
              <a href="#" class="nav-link  text-light">
                <i class="bi bi-card-heading mx-2"></i>
                Records
              </a>
            </li>:<li class="nav-item mt-2">
              <a href="#" class="nav-link  text-light">
                <i class="bi bi-card-heading " style={{marginLeft:'13rem'}}></i>
               
              </a>
            </li>}
           {isSidebarOpen?<li class="nav-item mt-2">
              <a href="#" class="nav-link  text-light">
                <i class="bi bi-bar-chart-fill mx-2"></i>
                Anylytics
              </a>
            </li>:<li class="nav-item mt-2">
              <a href="#" class="nav-link  text-light">
                <i class="bi bi-bar-chart-fill "style={{marginLeft:'13rem'}}></i>
               
              </a>
            </li>}
            <hr />
           { isSidebarOpen?<li class="nav-item mt-2">
              <a href="#" class="nav-link  text-light">
                <i class="bi bi-file-earmark-ruled mx-2"></i>
                Attendance
              </a>
            </li>:<li class="nav-item mt-2">
              <a href="#" class="nav-link  text-light">
                <i class="bi bi-file-earmark-ruled "style={{marginLeft:'13rem'}}></i>
               
              </a>
            </li>}
           { isSidebarOpen?<li class="nav-item mt-2">
              <a href="#" class="nav-link  text-light">
                <i class="bi bi-x-diamond-fill mx-2"></i>
                Leaves
              </a>
            </li>:<li class="nav-item mt-2">
              <a href="#" class="nav-link  text-light">
                <i class="bi bi-x-diamond-fill "style={{marginLeft:'13rem'}} ></i>
              
              </a>
            </li>}
            {isSidebarOpen?<li class="nav-item mt-2">
              <a href="#" class="nav-link  text-light">
                <i class="bi bi-currency-rupee mx-2"></i>
                Finance
              </a>
            </li>:<li class="nav-item mt-2">
              <a href="#" class="nav-link  text-light">
                <i class="bi bi-currency-rupee "style={{marginLeft:'13rem'}} ></i>
               
              </a>
            </li>}
            {isSidebarOpen?<li class="nav-item mt-2">
              <a href="#" class="nav-link  text-light">
                <i class="bi bi-person-circle mx-2"></i>
                Manage Profile
              </a>
            </li>:<li class="nav-item mt-2">
              <a href="#" class="nav-link  text-light">
                <i class="bi bi-person-circle "style={{marginLeft:'13rem'}}></i>
                
              </a>
            </li>}
            {isSidebarOpen?<li class="nav-item mt-2 mb-5">
              <a href="#" class="nav-link  text-light">
                <i class="bi bi-box-arrow-right mx-2"></i>
                Logout
              </a>
            </li>:<li class="nav-item mt-2 mb-5">
              <a href="#" class="nav-link  text-light">
                <i class="bi bi-box-arrow-right "style={{marginLeft:'13rem'}}></i>
               
              </a>
            </li>}
          </ul>
          <hr />
        </div>
      
    </>
  );
}
