import React from 'react'
import DashboardNavbar from '../Pages/DashboardNavbar'
import AdminHeader from './AdminHeader'
import DashboardSidebar from '../Pages/DashboardSidebar'
import AdminSidebar from './AdminSidebar'
import AdminPanel from './AdminPanel'


export default function AdminDashboard() {
  return (
    <div>
      <AdminHeader/>
      <AdminSidebar/>
      <AdminPanel/>
    
      
    </div>
  )
}
