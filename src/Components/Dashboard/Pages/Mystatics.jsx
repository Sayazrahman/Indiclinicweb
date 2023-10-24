import React from 'react'
import { CircularProgressbar,buildStyles  } from 'react-circular-progressbar';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import patient from '../../../assets/Icons/Patient Icon.png';
import patientbed from '../../../assets/Icons/patientbed.png'
import appointment from '../../../assets/Icons/appointment.png'
import Appointments from './Appointments';
export default function Mystatics() {
  const percentage = 66;
  return (
    <>
    <div className="container static-maincontainer col-md-12" >
      <div className="row col-md-6-d-flex">
      <div class="card col-md-4">
  <div class="card-body mt-3">
  <div className='circular-progress-container'>

  <CircularProgressbarWithChildren value={percentage}  styles={buildStyles({pathColor: '#f94b73',})}>
<img src={patient} alt="Patient Icon"/>
  </CircularProgressbarWithChildren>
</div>

<div className = "states-info mt-1 mx-4">
    <h5>Total Patient</h5>
    <h5>1500</h5>
    <h6>Till Today</h6>
  </div>
</div>
</div>
<div class="card col-md-4">
  <div class="card-body mt-3" >
  <div className='circular-progress-container'>

  <CircularProgressbarWithChildren value={percentage}  styles={buildStyles({pathColor: 'lightgreen',})}>
<img src={patientbed} alt="Patient Icon"/>
  </CircularProgressbarWithChildren>
</div>

<div className = "states-info mt-1 mx-4">
    <h5>Total Patient</h5>
    <h5>160</h5>
    <h6>20 Oct 2023</h6>
  </div>
</div>
</div>
<div class="card col-md-4" style={{borderRight: 'none'}}>
  <div class="card-body mt-3">
  <div className='circular-progress-container'>

  <CircularProgressbarWithChildren value={percentage}  styles={buildStyles({pathColor: 'skyblue',})}>
<img src={appointment} alt="Patient Icon"/>
  </CircularProgressbarWithChildren>
</div>

<div className = "states-info mt-1 mx-4">
    <h5>Appointments</h5>
    <h5>85</h5>
    <h6>20 Oct 2023</h6>
  </div>
</div>
</div>
      </div>
  
    </div>
  
    </>
  )
}
