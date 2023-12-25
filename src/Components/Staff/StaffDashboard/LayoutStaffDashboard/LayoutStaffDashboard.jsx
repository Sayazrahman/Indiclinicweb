import React from 'react'
import StaffHeader from '../Pages/StaffHeader'
import StaffSideBar from '../Pages/StaffSideBar'
import StaffMainContent from '../Pages/StaffMainContent'
export default function LayoutStaffDashboard() {
  return (
<>
<StaffHeader/>
<StaffSideBar/>
<div style={{width: '80vw' , marginLeft: 'auto'}}>
    <StaffMainContent/>
</div>


</>
  )
}
