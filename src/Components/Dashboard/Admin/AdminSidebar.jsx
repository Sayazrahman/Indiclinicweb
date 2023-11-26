import React from 'react'
import { Link } from 'react-router-dom';

export default function AdminSidebar() {
  return (
   <>
   
   <div className='admin-sidebar-main'>
<div className="sidebar-menu">
  <ul className='sidebar-ul'>
    <li className='sidebar-ul-title'>Menu</li>
    <li><Link className='active'><i class="bi bi-house-fill me-2"></i>Dashbboard</Link></li>
    <li><Link className=''><i class="bi bi-card-checklist me-2"></i>Appointments</Link></li>
    <li><Link className=''><i class="bi bi-person-fill-gear me-2"></i>Specialities</Link></li>
    <li><Link className=''><i class="bi bi-person-fill-add me-2"></i>Doctors</Link></li>
    <li><Link className=''><i class="bi bi-hospital-fill me-2"></i>Patients</Link></li>
    <li><Link className=''><i class="bi bi-star-fill me-2"></i>Reviews</Link></li>
    <li><Link className=''><i class="bi bi-coin me-2"></i>Transactions</Link></li>
    <li><Link className=''><i class="bi bi-gear-fill me-2"></i>Settings</Link></li>
    <li><Link className=''><i class="bi bi-person-lines-fill me-2"></i>Profile</Link></li>
    <li><Link to="/Login" className=''><i class="bi bi-box-arrow-right me-2"></i>Log out</Link></li>
  </ul>
</div>

   </div>
   </>
  )
}
