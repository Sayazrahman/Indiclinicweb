import React, { useState } from 'react'
import{ Modal ,Button}from 'react-bootstrap'
import OTPConfirmation from '../../OTPConfirmation'
import LoadinGif from '../../../assets/Icons/1496.gif'
import RegistrationModal from '../../RegistrationModal';
const StaffRegistration = () => {
  
  const[formValue,setFormValue]=useState({
    FirstName:'',
    LastName:'',
    Email:'',
    Password:'',
    ConfirmPassword:'',
    PhoneNo:'',
    Qualification:'',
    Adhaar:'',
    PAN:'',
    DOB:'',
    Gender:'',
    TemproryAdress:'',
    PermanentAdress:'',
    Designation:'Receptionist',
    TermCondition:false

  })
  const [loading, setLoading] = useState(false);
  const [showOTPConfirmation, setShowOTPConfirmation] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const HandleOnChange=(e)=>{
    const{name,value}=e.target;
    setFormValue({...formValue,[name]:value})
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formValue.FirstName==='') {
      document.getElementById("FirstName").style.borderColor = 'red'
    }
   else if (formValue.LastName==='') {
      document.getElementById("LastName").style.borderColor = 'red'
    }
    else if (formValue.Email==='') {
      document.getElementById("EmailAddress").style.borderColor = 'red'
    }
    else if (formValue.PhoneNo==='') {
      document.getElementById("PhoneNo").style.borderColor = 'red'
    }
    else if (formValue.PhoneNo.length > 10) {
      document.getElementById(" errphoneNo").innerHTML='Please Enter  Valid Contact no.'
    }
    
    else if (formValue.Qualification==='') {
      document.getElementById("Qualification").style.borderColor = 'red'
    }
    // else if (formValue.Adhaar==='') {
    //   document.getElementById("AadharNumber").style.borderColor = 'red'
    // }
    // else if (!/^[2-9]{1}[0-9]{3}\s{1}[0-9]{4}\s{1}[0-9]{4}$/.test(formValue.Adhaar)) {
    //   document.getElementById("errAadhar").innerHTML='Please Enter  Valid Aadhar no.'
    // }
    // else if (formValue.PAN==='') {
    //   document.getElementById("PAN").style.borderColor = 'red'
    // }
    // else if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(formValue.PAN)) {
    //   document.getElementById("errPanNo").innerHTML='Please Enter  Valid PAN no.'
    // }
    else if (formValue.DateOfJoining==='') {
      document.getElementById("DateOfJoining").style.borderColor = 'red'
    }
    else if (formValue.DOB==='') {
      document.getElementById("dateOfBirth").style.borderColor = 'red'
    }
    else if (formValue.Gender==='') {
      document.getElementById("gender").style.borderColor = 'red'
    }
    else if (formValue.PermanentAdress==='') {
      document.getElementById("permanentAddress").style.borderColor = 'red'
    }
    else if (formValue.TemproryAdress==='') {
      document.getElementById("temporaryAddress").style.borderColor = 'red'
    }
    else if (formValue.TermCondition === false) {
      document.getElementById("TermCondition").style.color = 'red'
    }
   else{
    // setSubmit(true)
    // console.log('jkhjx')
    setTimeout(() => {
      setLoading(true);
  
      // After 2 seconds, show the OTP modal
      setTimeout(() => {
        setShowOTPConfirmation(true);
        setLoading(false); // Stop loading
      }, 2000);
    }, 2000);
    window.sessionStorage.setItem('Staff RegistrationData', JSON.stringify(formValue));
   }
  };
  const HandleOnFocus=()=>{
    // document.getElementById("FirstName").style.borderColor = '#dee2e6'
    // document.getElementById("LastName").style.borderColor = '#dee2e6'  
  }
 


  return (
  <>
    <div className='container-fluid  staffForm'>
      <h1 className='  text-center '>Staff Registration</h1>
     
    <form  onSubmit={handleSubmit}>
      <div className="row mb-5">
      <div class= " col-md-4 ">
    <label for="FirstName" class="form-label">First Name</label>
    <input type="text" class="form-control"  placeholder='First Name'id='FirstName' name='FirstName'  value={formValue.FirstName} onChange={HandleOnChange} onFocus={HandleOnFocus}/>
    
  </div>
 
  <div class= " col-md-4 ">
    <label for="LastName" class="form-label">Last Name</label>
    <input type="text" class="form-control" id='LastName'name='LastName' value={formValue.LastName} onChange={HandleOnChange} onFocus={HandleOnFocus}/>
    
  </div>


  <div className="col-md-4 ">
    <label for="Designation" className="form-label">Designation</label>
    <input type="text" className="form-control" id="designation" name='designation'  placeholder="" value={formValue.Designation} onChange={HandleOnChange} disabled onFocus={HandleOnFocus}/>
   
  </div>

  <div className="col-md-4 mt-3">
    <label for="inputState" className="form-label">Gender</label>
    <select id="gender" name = "Gender"  className="form-select" value={formValue.Gender} onChange={HandleOnChange} onFocus={HandleOnFocus}>
      <option selected>Select Gender</option>
      <option>Male</option>
      <option>Female</option>
      <option>Transgender</option>
      <option>other</option>
    </select>
   
    </div>


  

  <div class= " col-md-4 mt-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="EmailAddress" aria-describedby="emailHelp" placeholder='Email Address' name='Email'value={formValue.Email} onChange={HandleOnChange} onFocus={HandleOnFocus}/>
   
  </div>
 
  <div className="col-md-4  mt-3">
    <label for="inputAddress2" className="form-label">Contact No.</label>
    <input type="number" className="form-control"name = "PhoneNo" id="PhoneNo"value={formValue.PhoneNo} onChange={HandleOnChange}  onFocus={HandleOnFocus}/>
    <small id="errphoneNo" class="form-text text-danger" ></small>
   
  </div>
  <div className="col-md-4 mt-3">
    <label for="Qualification" className="form-label">Education</label>
    <select  id="Qualification" name = "Qualification"   className="form-select" value={formValue.Qualification}  onChange={HandleOnChange} onFocus={HandleOnFocus}>
      <option selected>Select Education</option>
      <option>10th</option>
      <option>12th</option>
      <option> Diploma or certificate Course</option>
      <option>Graduate(BSc,BCA ,BCom,etc)</option>
      <option>Licensed Practical Nurse (LPN) or Licensed Vocational Nurse (LVN)</option>
      <option>Registered Nurse</option>
      <option>Medical Laboratory Technologist</option>
      <option>Radiologic Technologist</option>
      <option>Pharmacist</option>
      <option>Hospital Administrator</option>
      <option>Respiratory Therapist</option>
      <option>Dietitian / Nutritionist:</option>
      <option>Psychologist</option>
      <option>Biomedical Engineer</option>
      <option>Infection Control Practitioner</option>
      <option>Health Information Technology (HIT) Specialist</option>
      <option>Medical Office / Health Administration Staff</option>
      <option>other</option>
    </select>
   
    </div>
  <div className="col-md-4  mt-3">
    <label for="Aadhar Number" className="form-label">Aadhar Number</label>
    <input type="number" className="form-control" id="AadharNumber" name='Adhaar'  placeholder="Aadhar Number" value={formValue.Adhaar} onChange={HandleOnChange} onFocus={HandleOnFocus}/>
    <small id="errAadhar" class="form-text text-danger"></small>
  </div>
  <div className="col-md-4  mt-3">
    <label for="PAN Number" className="form-label">PAN Number</label>
    <input type="number" className="form-control" id="PAN" name='PAN'  placeholder="PAN Number" value={formValue.PAN} onChange={HandleOnChange} onFocus={HandleOnFocus}/>
    <small id="errPanNo" class="form-text text-danger" ></small>
   
  </div>
  
  <div className="col-md-4  mt-3">
    <label for="inputPassword4" className="form-label">Date of Birth</label>
    <input type="date" className="form-control" name = "DOB"  id="dateOfBirth"value={formValue.DOB} onChange={HandleOnChange}  onFocus={HandleOnFocus}/>
   
  </div>
  
  <div className="col-md-4  mt-3">
    <label for="inputAddress" className="form-label">Permanent Address</label>
    <input type="text" className="form-control" id="permanentAddress" name='PermanentAdress'  placeholder="Purana Quila, Siwan"value={formValue.PermanentAdress} onChange={HandleOnChange} onFocus={HandleOnFocus}/>
   
  </div>
  
    <div className="col-md-4  mt-3">
    <label for="inputAddress" className="form-label">Temporary Address</label>
    <input type="text" id= "temporaryAddress" name='TemproryAdress'  className="form-control" placeholder="Sarfarazganj,Lucknow"value={formValue.TemproryAdress}  onChange={HandleOnChange} onFocus={HandleOnFocus}/>
 </div>
 
  <div className="col-12 mt-3 " >
    <div className="form-check">
      <input className="form-check-input"   type="checkbox"  name='TermCondition'  for="gridCheck"  onChange={HandleOnChange}value={formValue.TermCondition}  onFocus={HandleOnFocus}/>
      <label className="form-check-label"  id="TermCondition" for="gridCheck">
      I accept terms and conditions
      </label>
    </div>
  </div>
   <div className="col-12 mt-3" style={{textAlign: 'center'}}>
    <button type="submit" className="btn btn col-md-5 me-2 signup" style={{background: 'rgb(142 249 142)', fontWeight: 'bolder',borderRadius: '2px',width:'9rem'}} onClick={handleShow}>Register</button>
    <button type="reset" className="btn btn col-md-5 me-2" style={{background: '#ff7b7b',fontWeight: 'bolder',borderRadius: '2px',width:'9rem'}}>Reset</button>
  </div>
  </div>
</form>
</div>
    {showOTPConfirmation && (
      <OTPConfirmation />
    )}
  
  
  {loading && (
      <>
        <div className="blurred-background" />
        <div className="loading-container">
          <img src={LoadinGif} alt="Loading" style={{width: '40px', height: '40px'}} />
          <h5>Please wait...!</h5>
        </div>
      </>
    )}
    {successMessage && (
        <div>
          <RegistrationModal message={successMessage}   />
        </div>
      )}
 
    </>)
}

export default StaffRegistration
