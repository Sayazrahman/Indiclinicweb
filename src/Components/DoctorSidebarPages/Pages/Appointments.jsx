import { useState } from "react";
import React from 'react'
import Ayaz from '../../../assets/Ayaz.jpg'
import filter from '../../../assets/Icons/adjustments.png'

export default function Appointments(props) {
const [HomeappointmentSelect, setHomeappointmentSelect] = useState(true);
const [OnlineappointmentSelect, setOnlineappointmentSelect] = useState(false);
const [SateliteappointmentSelect, setSateliteappointmentSelect] = useState(false);

const handleHomeAppointmentbutton=()=>{
    setHomeappointmentSelect(true)
    setOnlineappointmentSelect(false)
    setSateliteappointmentSelect(false)
}
const handleOnline = ()=>{
    setOnlineappointmentSelect(true)
    setHomeappointmentSelect(false)
    setSateliteappointmentSelect(false)
}
const handleSatelite=()=>{
    setSateliteappointmentSelect(true)
    setOnlineappointmentSelect(false)
    setHomeappointmentSelect(false)
}

const appointments= [
    {PID : 'P232224' , Pname : "Syed Ayaz Rahman" ,Ptype : 'New' ,symptoms : 'fever/headache/Stomach Pain', seltTreatment : 'Yes' , BP : '110/50'},
    {PID : 'P232224' , Pname : "Syed Ayaz Rahman" ,Ptype : 'New' ,symptoms : 'fever/headache/Stomach Pain', seltTreatment : 'Yes' , BP : '110/50'},
    {PID : 'P232224' , Pname : "Syed Ayaz Rahman" ,Ptype : 'New' ,symptoms : 'fever/headache/Stomach Pain', seltTreatment : 'Yes' , BP : '110/50'},
    {PID : 'P232224' , Pname : "Syed Ayaz Rahman" ,Ptype : 'New' ,symptoms : 'fever/headache/Stomach Pain', seltTreatment : 'Yes' , BP : '110/50'},
    {PID : 'P232224' , Pname : "Syed Ayaz Rahman" ,Ptype : 'New' ,symptoms : 'fever/headache/Stomach Pain', seltTreatment : 'Yes' , BP : '110/50'},
    {PID : 'P232224' , Pname : "Syed Ayaz Rahman" ,Ptype : 'New' ,symptoms : 'fever/headache/Stomach Pain', seltTreatment : 'Yes' , BP : '110/50'},
    {PID : 'P232224' , Pname : "Syed Ayaz Rahman" ,Ptype : 'New' ,symptoms : 'fever/headache/Stomach Pain', seltTreatment : 'Yes' , BP : '110/50'}
]

const onlineAppointments = [
  {PID : 'P232224' , Pname : "Syed Ayaz Rahman" ,Ptype : 'New' ,symptoms : 'fever/headache/Stomach Pain', seltTreatment : 'Yes' , BP : '110/50'},
  {PID : 'P232224' , Pname : "Syed Ayaz Rahman" ,Ptype : 'New' ,symptoms : 'fever/headache/Stomach Pain', seltTreatment : 'Yes' , BP : '110/50'},
  {PID : 'P232224' , Pname : "Syed Ayaz Rahman" ,Ptype : 'New' ,symptoms : 'fever/headache/Stomach Pain', seltTreatment : 'Yes' , BP : '110/50'},
]

  return (
    <>
 <section className='px-2'>
        <div className='row ms-2'>
           <div class="col-sm-12 mb-3 " style={{ boxShadow: "0 9px 11px #1d499914"}}>
<h3 class="page-title">Appointments</h3>
</div>  
    </div>


<div className='row' style={{justifyContent: 'flex-start'}}>
    <div className='col-md-2'>
        <button selected className={`btn btn ${HomeappointmentSelect === true ? 'appointmentBtnactive' : 'appointmentBtninactive'}`} onClick={handleHomeAppointmentbutton} >Home Appointments</button>
    </div>
    <div className='col-md-2'>
        <button className={`btn btn ${OnlineappointmentSelect === true ? 'appointmentBtnactive' : 'appointmentBtninactive'}`} onClick={handleOnline} >Online Appointments</button>
    </div>
    <div className='col-md-3'>
        <button className={`btn btn ${SateliteappointmentSelect === true ? 'appointmentBtnactive' : 'appointmentBtninactive'}`} onClick={handleSatelite} >Satelite Appointments</button>
    </div>
</div>

{HomeappointmentSelect && (
  <>
  <div className="mt-5">
  <div className="appointmentbtn">
          <div className='d-flex'>
            <button>Today</button>
            <button className='mx-2'>Tomorrow</button>
            <button>View All</button>

          </div>
          <div className='filterBtn'>
          <img title='Filter Appointments' src={filter}/>
            </div>
         
        </div>
  <table className="table align-middle mb-0 bg-white">
      <thead class="bg-light">
        <tr>
          <th>#</th>
          <th>P.ID</th>
          <th>Patient Name</th>
          <th>Patient Type</th>
          <th>Symptoms</th>
          <th>Self Treatment</th>
          <th>B.P</th>
          <th className="text-center">Actions</th>
        </tr>
      </thead>
      <tbody>
        {appointments.map((val , index) => (
         
          <tr>
            <td>{index + 1}</td>
            <td>{val.PID}</td>
            <td>{val.Pname}</td>
            <td>{val.Ptype}</td>
            <td>{val.symptoms}</td>
            <td>{val.seltTreatment}</td>
            <td>{val.BP}</td>
            <td >
            <div className="action-buttons-container justify-content-center">
          <button style={{ background: 'rgba(2, 182, 179, 0.12)', color: '#1db9aa',border: 'none' }}>
            <i className="bi bi-eye me-1"></i>
          </button>
          <button className='mx-2' style={{ background: 'rgba(2, 182, 179, 0.12)', color: 'green' ,border: 'none'}}>
            <i className="bi bi-check-lg me-1"></i>
          </button>
          <button style={{ background: 'rgba(242, 17, 54, 0.12)', color: 'red' ,border: 'none'}}>
            <i className="bi bi-x me-1"></i>
          </button>
          <button className='ms-2' style={{ background: 'rgb(253 255 145 / 65%)', color: '#02490e' ,border: 'none'}}>
            <i title='Reschedule' class="bi bi-calendar-week"></i>
          </button>
        </div>
            </td>
           
          </tr>
        ))}
      </tbody>
    </table>
</div>
  </>
)}

{OnlineappointmentSelect && (
  <>
    <div className="mt-5">
    <div className="appointmentbtn">
          <div className='d-flex'>
            <button>Today</button>
            <button className='mx-2'>Tomorrow</button>
            <button>View All</button>

          </div>
          <div className='filterBtn'>
          <img title='Filter Appointments' src={filter}/>
            </div>
         
        </div>
  <table className="table table-striped">
      <thead>
        <tr>
          <th>#</th>
          <th>P.ID</th>
          <th>Patient Name</th>
          <th>Patient Type</th>
          <th>Symptoms</th>
          <th>Self Treatment</th>
          <th>B.P</th>
          <th className="text-center">Actions</th>
        </tr>
      </thead>
      <tbody>
        {onlineAppointments.map((val , index) => (
         
          <tr>
            <td>{index + 1}</td>
            <td>{val.PID}</td>
            <td>{val.Pname}</td>
            <td>{val.Ptype}</td>
            <td>{val.symptoms}</td>
            <td>{val.seltTreatment}</td>
            <td>{val.BP}</td>
            <td >
            <div className="action-buttons-container justify-content-center">
          <button style={{ background: 'rgba(2, 182, 179, 0.12)', color: '#1db9aa',border: 'none' }}>
            <i className="bi bi-eye me-1"></i>
          </button>
          <button className='mx-2' style={{ background: 'rgba(2, 182, 179, 0.12)', color: 'green' ,border: 'none'}}>
            <i className="bi bi-check-lg me-1"></i>
          </button>
          <button style={{ background: 'rgba(242, 17, 54, 0.12)', color: 'red' ,border: 'none'}}>
            <i className="bi bi-x me-1"></i>
          </button>
          <button className='ms-2' style={{ background: 'rgb(253 255 145 / 65%)', color: '#02490e' ,border: 'none'}}>
            <i title='Reschedule' class="bi bi-calendar-week"></i>
          </button>
        </div>
            </td>
           
          </tr>
        ))}
      </tbody>
    </table>
</div>
  
  </>
)}




 </section>



    </>
  )
}
