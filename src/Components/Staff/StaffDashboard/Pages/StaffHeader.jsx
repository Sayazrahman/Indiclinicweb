import React from 'react'
import HomeLogo from '../../../../assets/HomeLogo.jpg'
import woman from '../../../../assets//Icons/woman.png'
export default function StaffHeader() {
  return (
    <nav class="navbar" style={{height: '4rem',background: '#185950',}} >
  <div class="container-fluid">
    <div>
       <img src={HomeLogo}className='HomeLogo' style={{width: '13rem'}}/>  
    </div>
 
<div className=' StaffHeaderMenu' >
    <ul className='d-flex '>
        <li className='staff-nav-list'><i class="bi bi-pc-display-horizontal me-2"></i>Dashboard</li>
        <li className='staff-nav-list'><i class="bi bi-person-wheelchair me-2"></i>Patients</li>
        <li className='staff-nav-list'><i class="bi bi-bar-chart-line-fill me-2"></i>Analytics</li>
        <li class="nav-item dropdown">
          <button class="btn btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" style={{color: 'white' , fontSize: '18px'}}>
            <img src={woman} style={{width: '2rem'}}/> Sabeeha Rahman
          </button>
          <ul class="dropdown-menu dropdown-menu-dark">
            <li style={{margin :'0px'}}><a class="dropdown-item" href="#"><i class="bi bi-person-circle me-2"></i>Manage Profile</a></li>
            <li style={{margin :'0px'}}> <a class="dropdown-item" href="#"><i class="bi bi-box-arrow-right me-2"></i>Logout</a></li>
          
          </ul>
        </li>
    </ul>
</div>
  </div>
  
</nav>
  )
}
