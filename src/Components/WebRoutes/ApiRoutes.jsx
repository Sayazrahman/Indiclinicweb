import React from 'react'
import { Route,Routes } from 'react-router-dom'
import LayoutLoginPanel from '../Home/Layouts/LayoutLoginPanel'
import LayoutUserRegistration from '../Home/Layouts/LayoutUserRegistration'
import LayoutHome from '../Home/Layouts/LayoutHome'
import LayoutMyDashboard from '../Dashboard/Layout/LayoutMyDashboard'
import AdminDashboard from '../Dashboard/Admin/AdminDashboard'
import LayoutManageStaffs from '../DoctorSidebarPages/Layouts/LayoutManageStaffs'
import LayoutManageClinic from '../DoctorSidebarPages/Layouts/LayoutManageClinic'
import LayoutStaffAttendance from '../DoctorSidebarPages/Layouts/LayoutStaffAttendance'
import LayoutStaffRegistration from '../Staff/Layout/LayoutStaffRegistration'
import LayoutAppointments from '../DoctorSidebarPages/Layouts/LayoutAppointments'
import Billing from '../Home/Pages/Billing'
import  StaffLogin from '../Staff/Pages/StaffLogin'
import LayoutStaffDashboard from '../Staff/StaffDashboard/LayoutStaffDashboard/LayoutStaffDashboard'

// import BillingPractice from '../Home/Pages/BillingPractice'



export default function ApiRoutes() {
  return (
    <>
    <Routes>
   <Route path="/Indiclinicweb" element={<LayoutHome/>}/>
   <Route path="/Login" element={<LayoutLoginPanel/>}/>
   <Route path="/UserRegistration" element={<LayoutUserRegistration/>} />
   <Route path="/MyDashboard" element={<LayoutMyDashboard/>} />
   <Route path="/Admin" element={<AdminDashboard/>} />
   <Route path="/ManageStaffs" element={<LayoutManageStaffs/>} />
   <Route path="/StaffAttendance" element={<LayoutStaffAttendance/>} />
   <Route path="/ManageClinic" element={<LayoutManageClinic/>} />
   <Route path="/StaffRegistration" element={<LayoutStaffRegistration/>} />
   <Route path="/Appointments" element={<LayoutAppointments/>} />
   <Route path="/Billing" element={<Billing/>} />
   <Route path="/StaffLogin" element={<StaffLogin/>} />
   <Route path="/StaffDashbard" element={<LayoutStaffDashboard/>} />
   

  
   
</Routes>
    
    
    </>
  )
}
