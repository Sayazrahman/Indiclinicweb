import React from 'react';
import Ayaz from '../../../assets/Ayaz.jpg'

export default function Appointments() {
  return (
   <>
      <div className="container mt-5 ms-4">
      <h5>Patient Appointments</h5>
      <div className="appointments-container">
        <div className="appointmentbtn">
          <div className='mt-3'>
            <button>Today</button>
            <button className='mx-2'>Tomorrow</button>
            <button>View All</button>
          </div>
        </div>
        <div>
        <table className='striped'>
  <thead>
   
      <th>Patient Name</th>
      <th>Appointment Date</th>
      <th>Purpose</th>
      <th>Patient Type</th>
      <th>Paid Amount</th>
      <th>Action</th>
   
  </thead>
  <tbody>
    <tr className='striped'>
      <td><img src={Ayaz} style={{width: '3vw', height: '6.5vh' ,borderRadius: '100%'}} className='me-1' ></img>S Ayaz Rahman</td>
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
            <i className="bi bi-eye me-1"></i>View
          </button>
          <button className='mx-2' style={{ background: 'rgba(2, 182, 179, 0.12)', color: 'green' ,border: 'none'}}>
            <i className="bi bi-check-lg me-1"></i>Accept
          </button>
          <button style={{ background: 'rgba(242, 17, 54, 0.12)', color: 'red' ,border: 'none'}}>
            <i className="bi bi-x me-1"></i>Cancel
          </button>
        </div>
      </td>
    </tr>
  </tbody>
  <tbody>
    <tr className='striped'>
      <td><img src={Ayaz} style={{width: '3vw', height: '6.5vh' ,borderRadius: '100%'}} className='me-1' ></img>S Ayaz Rahman</td>
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
            <i className="bi bi-eye me-1"></i>View
          </button>
          <button className='mx-2' style={{ background: 'rgba(2, 182, 179, 0.12)', color: 'green' ,border: 'none'}}>
            <i className="bi bi-check-lg me-1"></i>Accept
          </button>
          <button style={{ background: 'rgba(242, 17, 54, 0.12)', color: 'red' ,border: 'none'}}>
            <i className="bi bi-x me-1"></i>Cancel
          </button>
        </div>
      </td>
    </tr>
  </tbody>
  <tbody>
    <tr className='striped'>
      <td><img src={Ayaz} style={{width: '3vw', height: '6.5vh' ,borderRadius: '100%'}} className='me-1' ></img>S Ayaz Rahman</td>
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
            <i className="bi bi-eye me-1"></i>View
          </button>
          <button className='mx-2' style={{ background: 'rgba(2, 182, 179, 0.12)', color: 'green' ,border: 'none'}}>
            <i className="bi bi-check-lg me-1"></i>Accept
          </button>
          <button style={{ background: 'rgba(242, 17, 54, 0.12)', color: 'red' ,border: 'none'}}>
            <i className="bi bi-x me-1"></i>Cancel
          </button>
        </div>
      </td>
    </tr>
  </tbody>
  <tbody>
    <tr className='striped'>
      <td><img src={Ayaz} style={{width: '3vw', height: '6.5vh' ,borderRadius: '100%'}} className='me-1' ></img>S Ayaz Rahman</td>
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
            <i className="bi bi-eye me-1"></i>View
          </button>
          <button className='mx-2' style={{ background: 'rgba(2, 182, 179, 0.12)', color: 'green' ,border: 'none'}}>
            <i className="bi bi-check-lg me-1"></i>Accept
          </button>
          <button style={{ background: 'rgba(242, 17, 54, 0.12)', color: 'red' ,border: 'none'}}>
            <i className="bi bi-x me-1"></i>Cancel
          </button>
        </div>
      </td>
    </tr>
  </tbody>
  <tbody>
    <tr className='striped'>
      <td><img src={Ayaz} style={{width: '3vw', height: '6.5vh' ,borderRadius: '100%'}} className='me-1' ></img>S Ayaz Rahman</td>
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
            <i className="bi bi-eye me-1"></i>View
          </button>
          <button className='mx-2' style={{ background: 'rgba(2, 182, 179, 0.12)', color: 'green' ,border: 'none'}}>
            <i className="bi bi-check-lg me-1"></i>Accept
          </button>
          <button style={{ background: 'rgba(242, 17, 54, 0.12)', color: 'red' ,border: 'none'}}>
            <i className="bi bi-x me-1"></i>Cancel
          </button>
        </div>
      </td>
    </tr>
  </tbody>
  <tbody>
    <tr className='striped'>
      <td><img src={Ayaz} style={{width: '3vw', height: '6.5vh' ,borderRadius: '100%'}} className='me-1' ></img>S Ayaz Rahman</td>
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
            <i className="bi bi-eye me-1"></i>View
          </button>
          <button className='mx-2' style={{ background: 'rgba(2, 182, 179, 0.12)', color: 'green' ,border: 'none'}}>
            <i className="bi bi-check-lg me-1"></i>Accept
          </button>
          <button style={{ background: 'rgba(242, 17, 54, 0.12)', color: 'red' ,border: 'none'}}>
            <i className="bi bi-x me-1"></i>Cancel
          </button>
        </div>
      </td>
    </tr>
  </tbody>
  <tbody>
    <tr className='striped'>
      <td><img src={Ayaz} style={{width: '3vw', height: '6.5vh' ,borderRadius: '100%'}} className='me-1' ></img>S Ayaz Rahman</td>
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
            <i className="bi bi-eye me-1"></i>View
          </button>
          <button className='mx-2' style={{ background: 'rgba(2, 182, 179, 0.12)', color: 'green' ,border: 'none'}}>
            <i className="bi bi-check-lg me-1"></i>Accept
          </button>
          <button style={{ background: 'rgba(242, 17, 54, 0.12)', color: 'red' ,border: 'none'}}>
            <i className="bi bi-x me-1"></i>Cancel
          </button>
        </div>
      </td>
    </tr>
  </tbody>
  <tbody>
    <tr className='striped'>
      <td><img src={Ayaz} style={{width: '3vw', height: '6.5vh' ,borderRadius: '100%'}} className='me-1' ></img>S Ayaz Rahman</td>
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
            <i className="bi bi-eye me-1"></i>View
          </button>
          <button className='mx-2' style={{ background: 'rgba(2, 182, 179, 0.12)', color: 'green' ,border: 'none'}}>
            <i className="bi bi-check-lg me-1"></i>Accept
          </button>
          <button style={{ background: 'rgba(242, 17, 54, 0.12)', color: 'red' ,border: 'none'}}>
            <i className="bi bi-x me-1"></i>Cancel
          </button>
        </div>
      </td>
    </tr>
  </tbody>
  <tbody>
    <tr className='striped'>
      <td><img src={Ayaz} style={{width: '3vw', height: '6.5vh' ,borderRadius: '100%'}} className='me-1' ></img>S Ayaz Rahman</td>
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
            <i className="bi bi-eye me-1"></i>View
          </button>
          <button className='mx-2' style={{ background: 'rgba(2, 182, 179, 0.12)', color: 'green' ,border: 'none'}}>
            <i className="bi bi-check-lg me-1"></i>Accept
          </button>
          <button style={{ background: 'rgba(242, 17, 54, 0.12)', color: 'red' ,border: 'none'}}>
            <i className="bi bi-x me-1"></i>Cancel
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
