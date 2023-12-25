import React from 'react';
import {
    CDBSidebar,
    CDBSidebarHeader,
    CDBSidebarMenuItem,
    CDBSidebarContent,
    CDBSidebarMenu,
    CDBSidebarSubMenu,
    CDBSidebarFooter,
  } from 'cdbreact';
  import woman from '../../../../assets//Icons/woman.png'
export default function StaffSideBar() {
  return (
    <div style={{height: '100vh', position : 'fixed'}}>
       <CDBSidebar className='custom-sidebar' textColor="white" backgroundColor="rgb(24, 89, 80)">
        <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>
            <div className='d-flex'>
            <img src={woman} style={{width: '2rem'}}/>
            <h6 className='mt-1 ms-2'>Sabeeha Rahman</h6>
            </div>
          
          
        </CDBSidebarHeader>
        <CDBSidebarContent>
          <CDBSidebarMenu>
            <CDBSidebarMenuItem><i class="bi bi-person-wheelchair me-2"></i> Patients</CDBSidebarMenuItem>
            <CDBSidebarMenuItem ><i class="bi bi-calendar-week me-2"></i> Schedule Appointment</CDBSidebarMenuItem>
            <CDBSidebarMenuItem ><i class="bi bi-chat-dots-fill me-2"></i> Chat (Coming soon)</CDBSidebarMenuItem>
            <CDBSidebarMenuItem><i class="bi bi-card-text me-2"></i> Records</CDBSidebarMenuItem>
            <CDBSidebarMenuItem><i class="bi bi-bar-chart me-2"></i> Anylytics</CDBSidebarMenuItem>
            <hr/>
            <CDBSidebarMenuItem > <i class="bi bi-calendar3-week me-2"></i> Attendance</CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="th-large">Leaves</CDBSidebarMenuItem>
            <CDBSidebarMenuItem ><i class="bi bi-currency-rupee me-2"></i> Finance</CDBSidebarMenuItem>
            <CDBSidebarMenuItem > <i class="bi bi-person-circle me-2"></i> Manage Profile</CDBSidebarMenuItem>
            <CDBSidebarMenuItem> <i class="bi bi-box-arrow-right me-2"></i> Logout</CDBSidebarMenuItem>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            className="sidebar-btn-wrapper"
            style={{padding: '20px 5px'}}
          >
            Sidebar Footer
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  )
}
