import React from 'react'
import StaffHeader from '../Pages/StaffHeader'
import StaffSideBar from '../Pages/StaffSideBar'
import StaffMainContent from '../Pages/StaffMainContent'
export default function LayoutStaffDashboard() {
  return (
<>
<StaffHeader/>
<div className="d-flex">
<StaffSideBar/>
    <StaffMainContent/>

</div>

</>
  )
}
