import React from 'react'
import StaffHeader from '../Pages/StaffHeader'
import StaffSideBar from '../Pages/StaffSideBar'
import Patient from '../Pages/SidebarContent/Patient'

const LayoutPatient = () => {
  return (
    <div>
      <StaffHeader/>
      <div className="d-flex ">
       <StaffSideBar/>
     <Patient/>
     </div>
    </div>
  )
}

export default LayoutPatient
