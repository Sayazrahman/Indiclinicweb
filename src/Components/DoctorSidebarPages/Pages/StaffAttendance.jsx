import React  , { useState } from 'react'


export default function StaffAttendance() {
    const staffData = [
        { id: 1, name: 'John Doe', designation: 'Manager', contact: '123-456-7890' },
        { id: 2, name: 'Jane Smith', designation: 'Developer', contact: '987-654-3210' },
        { id: 3, name: 'Jane Smith', designation: 'Developer', contact: '987-654-3210' },
        { id: 4, name: 'Jane Smith', designation: 'Developer', contact: '987-654-3210' },
        { id: 5, name: 'Jane Smith', designation: 'Developer', contact: '987-654-3210' },
        { id: 6, name: 'Jane Smith', designation: 'Developer', contact: '987-654-3210' },
        { id: 7, name: 'Jane Smith', designation: 'Developer', contact: '987-654-3210' },
        { id: 8, name: 'Jane Smith', designation: 'Developer', contact: '987-654-3210' },
        { id: 9, name: 'Jane Smith', designation: 'Developer', contact: '987-654-3210' },
        // Add more staff data as needed
      ];
      const markPresent = (staffId) => {
        // Handle marking attendance logic here
        console.log(`Marking present for staff with ID: ${staffId}`);
      };
  return (
    
   <>

   <div class="col-sm-12 mb-3" style={{boxShadow: "0 9px 11px #1d499914"}}>
<h3 class="page-title">Staff Attendance</h3>
</div>

<section className="container" style={{boxShadow: "0 9px 11px #1d499914"}}>
<table className="table table-striped ">
      <thead>
        <tr>
          <th>Emp.ID</th>
          <th>Name</th>
          <th>Designation</th>
          <th>Contact</th>
          <th>Status</th>
          <th>Attendance Sheet</th>
        </tr>
      </thead>
      <tbody>
        {staffData.map((staff) => (
          <tr key={staff.id}>
            <td>{staff.id}</td>
            <td>{staff.name}</td>
            <td>{staff.designation}</td>
            <td>{staff.contact}</td>
            <td className="text-center">
            <div class="form-check form-switch">
  <input class="form-check-input attendancestatusbutton" type="checkbox" role="switch" id="flexSwitchCheckChecked" style={{width : '48px', height : '20px',cursor : 'pointer'}} onClick={() => markPresent(staff.id)}  />
  
</div>
            </td>
            <td className="text-center"><i class="bi bi-table" style={{cursor : 'pointer'}}></i> </td>
          </tr>
        ))}
      </tbody>
    </table>

</section>

   </>
 
  )
}
