import React , {useState} from 'react'
import reception from '../../../assets/Icons/reception.png'
import assistant from '../../../assets/Icons/assistant.png'
import pharmacist from '../../../assets/Icons/pharmacist.png';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Button, Modal, Form ,Alert  } from 'react-bootstrap';


export default function ManageStaffs() {

    const [showModal, setShowModal] = useState(false);
    const [selectedDesignation, setSelectedDesignation] = useState('');
    const [staffName, setStaffName] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [token, setToken] = useState('');
    const [message, setMessage] = useState('');
    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);


    const handleAddStaff = async () => {
        // Simulate generating a unique token (you might replace this with an API call)
        const generatedToken = generateUniqueToken();
    
        // Simulate sending a message with the token to the entered mobile number
        // You might replace this with an actual API call to send an SMS
        sendTokenViaSMS(generatedToken, mobileNumber);
    
        // Set the token and show the alert
        setToken(generatedToken);
        setShowAlert(true);
        setMessage(`Token ${generatedToken} has been sent to ${mobileNumber}.`);
    
        // You can perform other staff addition logic here if needed
    
        // Close the modal after some delay (simulating an asynchronous operation)
        setTimeout(() => {
          handleClose();
          // Reset the state for the next use
          setToken('');
          setShowAlert(false);
          setStaffName('');
          setMobileNumber('');
          setSelectedDesignation('');
        }, 3000); // Adjust the delay as needed
      };
      const handleDesignationChange = (event) => {
        setSelectedDesignation(event.target.value);
      };

  const generateUniqueToken = () => {
    // Simulate generating a unique token (you might replace this with an API call)
    return Math.random().toString(36).substr(2, 8).toUpperCase();
  };

  const sendTokenViaSMS = (token, mobileNumber) => {
    // Simulate sending a message with the token to the entered mobile number
    console.log(`Token ${token} sent to ${mobileNumber}`);
    // You might replace this with an actual API call to send an SMS
  };
     
  

  return (
    <>
<section className='px-2'>

    <div className='row ms-2'>
    <div class="col-xxl-1 col-md-4">
<div class="card card-admin" style={{width: '20rem'}}>
<div class="card-body cardBody-admin" >
<div class="dash-widget-header">
<span class="dash-widget-icon text-primary">
<img src={reception} alt="receptionist" style={{width: '40px',height: '35px'}}/>
</span>
<div class="dash-count">
<h3>03</h3>
</div>
</div>
<div class="dash-widget-info">
<h6 class="text-muted">Receptionist</h6>
<div class="progress progress-sm">
<div class="progress-bar bg-primary w-75"></div>
</div>
</div>
</div>
</div>
</div>



<div class="col-xxl-1 col-md-4">
<div class="card card-admin" style={{width: '20rem'}}>
<div class="card-body cardBody-admin">
<div class="dash-widget-header">
<span class="dash-widget-icon text-success">
<img src={assistant} alt="receptionist" style={{width: '45px',height: '45px'}}/>
</span>
<div class="dash-count">
<h3>07</h3>
</div>
</div>
<div class="dash-widget-info">
<h6 class="text-muted">Doctor Assistants</h6>
<div class="progress progress-sm">
<div class="progress-bar bg-success w-25"></div>
</div>
</div>
</div>
</div>
</div>



<div class="col-xxl-1 col-md-4">
<div class="card card-admin" style={{width: '20rem'}}>
<div class="card-body cardBody-admin">
<div class="dash-widget-header">
<span class="dash-widget-icon text-danger border-warning">

<img src={pharmacist} alt="receptionist" style={{width: '45px',height: '35px'}}/>
</span>
<div class="dash-count">
<h3>05</h3>
</div>
</div>
<div class="dash-widget-info">
<h6 class="text-muted">Pharmacists</h6>
<div class="progress progress-sm">
<div class="progress-bar bg-warning w-25"></div>
</div>
</div>
</div>
</div>
</div>

    </div>
 <div className="row col-md-12 addStaff d-flex justify-content-end mb-3">
    <div className="col-md-2 d-flex justify-content-end">
          <button class="btn btn-success rounded-start border border-3" onClick={handleShow}><i class="bi bi-person-plus-fill me-2"></i>Add Staff</button>
    </div>
  
 </div>
 <div className="">
 <Tabs
      defaultActiveKey="profile"
      id="fill-tab-example"
      className="mb-3"
      
    >
      <Tab eventKey="profile"  title="All Staffs" >
      <table class="table table-striped">
      <thead>
          <tr>
            
            <th>Full Name</th>
            <th>Contact</th>
            <th>Designation</th>
            <th>Status</th>
           
          </tr>
        </thead>
        <tbody>
          <tr>
        
            <td>Riya</td>
            <td>8798989898</td>
            <td>Receptionist</td>
            <td className="text-success">Present</td>
            
          </tr>
          <tr>
        
            <td>Ayaz</td>
            <td>9989898998</td>
            <td>Pharmacist</td>
            <td className="text-danger">Absent</td>
           
          </tr>
          <tr>
        
            <td>Rahul</td>
            <td>7898899890</td>
            <td>Doctor Assistant</td>
            <td className="text-success">Present</td>
            
          </tr>
          <tr>
        
            <td>Saquib</td>
            <td>6878978989</td>
            <td>Receptionist</td>
            <td className="text-danger">Present</td>
           
          </tr>
         
        </tbody>
 
</table>
      </Tab>
      <Tab eventKey="presentStaffs" title="Present Staffs">
        Tab content for Profile
      </Tab>
      <Tab eventKey="AbsentStaff" title="Absent Staff">
        Tab content for Loooonger Tab
      </Tab>
      <Tab eventKey="NewJoinee" title="New Joinee">
        Tab content for Contact
      </Tab>
    </Tabs>
 </div>
 
</section>

<Modal show={showModal} onHide={handleClose} size="lg">
<Modal.Header closeButton>
  <Modal.Title>Add Staff</Modal.Title>
</Modal.Header>
<Modal.Body>
{message && <Alert variant="success">{message}</Alert>}
  <Form>
    {/* Example: Add input fields for staff name, designation, contact, etc. */}
    <Form.Group controlId="staffName">
      
      <div className="row col-md-12">
      
        <div className="col-md-6">
        <Form.Label>First Name</Form.Label>
                 <Form.Control type="text" placeholder="First name" />
        </div>
      <div className="col-md-6">
      <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Last name" />
      </div>
      <div className="col-md-6 mt-3">
      <Form.Label>Designation</Form.Label>
    
             
             <Form.Control
               as="select"
               value={selectedDesignation}
               onChange={handleDesignationChange}
             >
               <option value="">Select Designation</option>
               <option value="Manager">Receptionist</option>
               <option value="Supervisor">Doctor Assistant</option>
               <option value="Staff">Pharmacist</option>
               {/* Add more designations as needed */}
             </Form.Control>
         
        
      </div>
   
      <div className="col-md-6 mt-3">
      <Form.Label>Manged By</Form.Label>
    
             
             <Form.Control
               as="select"
               value={selectedDesignation}
               onChange={handleDesignationChange}
             >
               <option value="">Select</option>
               <option value="Manager">Dr Jilani</option>
               <option value="Supervisor">Dr. Maroof</option>
               <option value="Staff">Dr Rahul</option>
               {/* Add more designations as needed */}
             </Form.Control>
         
        
      </div>

      <div className="col-md-6 mt-3">
      <Form.Label>Phone No.</Form.Label>
          <Form.Control type="number" placeholder="Enter Phone No." />
      </div>

      <div className="col-md-6 mt-3">
      <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter Email" />
      </div>
      </div>
   
    </Form.Group>
    {/* Add more form fields as needed */}
  </Form>
</Modal.Body>
<Modal.Footer>
  <Button variant="secondary" onClick={handleClose}>
    Close
  </Button>
  <Button variant="success" onClick={handleAddStaff}>
    Add Staff
  </Button>
</Modal.Footer>
</Modal>


</>

  )
}
