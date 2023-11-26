import React from 'react';
import Ayaz from '../../../assets/Ayaz.jpg'

export default function Appointments(props) {
  return (
   <>
      <div className={`container mt-5 responsiveTable ${props.isSidebarOpen? 'appointment-sidebarclose' : ''}`}>
      <h5>Patient Appointments</h5>
      <div className={`appointments-container ${props.isSidebarOpen? 'appointment-sidebarclose-container' : ''}`}>
        <div className="appointmentbtn">
          <div className='d-flex'>
            <button>Today</button>
            <button className='mx-2'>Tomorrow</button>
            <button>View All</button>
          </div>
        </div>
        <div>
        <table className='striped'>
  <thead>
   
      <th scope="col"> Patient Name</th>
      <th scope="col">Appointment Date</th>
      <th scope="col">Purpose</th>
      <th scope="col">Patient Type</th>
      <th scope="col">Paid Amount</th>
      <th scope="col">Action</th>
   
  </thead>
  <tbody>
    <tr className='striped'>
      <div  className= "d-flex">
      <td> <img src={Ayaz} style={{width: 'auto', height: '6.5vh' ,borderRadius: '100%'}}  className='me-1' ></img><span > S Ayaz Rahman</span></td>
      </div>
      <td>
        22 Oct 2023<br />
        <span style={{ color: '#20c0f3' }}>10 AM</span>
      </td>
      <td>General</td>
      <td>Old</td>
      <td>Rs 500</td>
      <td>
        <div className="action-buttons-container">
          <button style={{ background: 'rgba(2, 182, 179, 0.12)', color: '#1db9aa',border: 'none' }}>
            <i className="bi bi-eye me-1"></i>
          </button>
          <button className='mx-2' style={{ background: 'rgba(2, 182, 179, 0.12)', color: 'green' ,border: 'none'}}>
            <i className="bi bi-check-lg me-1"></i>
          </button>
          <button style={{ background: 'rgba(242, 17, 54, 0.12)', color: 'red' ,border: 'none'}}>
            <i className="bi bi-x me-1"></i>
          </button>
        </div>
      </td>
    </tr>
  </tbody>
  <tbody>
    <tr className='striped'>
      <div className= "d-flex">
      <td><img src={Ayaz} style={{width: 'auto', height: '6.5vh' ,borderRadius: '100%'}} className='me-1' ></img>S Ayaz Rahman</td>
      </div>
     
      <td>
        22 Oct 2023<br />
        <span style={{ color: '#20c0f3' }}>10 AM</span>
      </td>
      <td>General</td>
      <td>Old</td>
      <td>Rs 500</td>
      <td>
        <div className="action-buttons-container">
          <button style={{ background: 'rgba(2, 182, 179, 0.12)', color: '#1db9aa',border: 'none' }}>
            <i className="bi bi-eye me-1"></i>
          </button>
          <button className='mx-2' style={{ background: 'rgba(2, 182, 179, 0.12)', color: 'green' ,border: 'none'}}>
            <i className="bi bi-check-lg me-1"></i>
          </button>
          <button style={{ background: 'rgba(242, 17, 54, 0.12)', color: 'red' ,border: 'none'}}>
            <i className="bi bi-x me-1"></i>
          </button>
        </div>
      </td>
    </tr>
  </tbody>


 
  
  
  <tbody>
    <tr className='striped'>
      <div className= "d-flex">
      <td><img src={Ayaz} style={{width: 'auto', height: '6.5vh' ,borderRadius: '100%'}} className='me-1' ></img>S Ayaz Rahman</td>
      </div>
      
      <td>
        22 Oct 2023<br />
        <span style={{ color: '#20c0f3' }}>10 AM</span>
      </td>
      <td>General</td>
      <td>Old</td>
      <td>Rs 500</td>
      <td>
        <div className="action-buttons-container">
          <button  style={{ background: 'rgba(2, 182, 179, 0.12)', color: '#1db9aa',border: 'none' }}>
            <i title="view" className="bi bi-eye me-1"></i>
          </button>
          <button  className='mx-2' style={{ background: 'rgba(2, 182, 179, 0.12)', color: 'green' ,border: 'none'}}>
            <i title="accept" className="bi bi-check-lg me-1"></i>
          </button>
          <button  style={{ background: 'rgba(242, 17, 54, 0.12)', color: 'red' ,border: 'none'}}>
            <i title="cancel" className="bi bi-x me-1"></i>
          </button>
        </div>
      </td>
    </tr>
  </tbody>
  
</table>

        </div>
      </div>
    </div>
   
   </>
  )
}
