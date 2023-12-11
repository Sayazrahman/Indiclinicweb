import React, { useState } from 'react'

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
    PrivacyPolicy:false

  })
  const[submit,setSubmit]=useState(false)
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
    else if (formValue.Qualification==='') {
      document.getElementById("Qualification").style.borderColor = 'red'
    }
    else if (formValue.Adhaar==='') {
      document.getElementById("AadharNumber").style.borderColor = 'red'
    }
    else if (formValue.PAN==='') {
      document.getElementById("PAN").style.borderColor = 'red'
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
    else if (formValue.PrivacyPolicy===false) {
      document.getElementById("PrivacyPolicy").style.color = 'red'
    }
   else{
    setSubmit(true)
    console.log('jkhjx')
   }
  };
  const HandleOnFocus=()=>{
    // document.getElementById("FirstName").style.borderColor = '#dee2e6'
    // document.getElementById("LastName").style.borderColor = '#dee2e6'  
  }
 


  return (
    <div className='container-fluid  staffForm'>
      <h1 className='text-center '>Staff Registration</h1>
      {submit && (<p>Thankyou For SignIn</p>)}
    <form  onSubmit={handleSubmit}>
      <div className="row">
      <div class= " col-md-6 mb-3">
    <label for="FirstName" class="form-label">First Name</label>
    <input type="text" class="form-control"  placeholder='First Name'id='FirstName' name='FirstName'  value={formValue.FirstName} onChange={HandleOnChange} onFocus={HandleOnFocus}/>
    
  </div>
 
  <div class= " col-md-6 mb-3">
    <label for="LastName" class="form-label">Last Name</label>
    <input type="text" class="form-control" id='LastName'name='LastName' value={formValue.LastName} onChange={HandleOnChange} onFocus={HandleOnFocus}/>
    
  </div>
  <div class= " col-md-4 mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="EmailAddress" aria-describedby="emailHelp" placeholder='Email Address' name='Email'value={formValue.Email} onChange={HandleOnChange} onFocus={HandleOnFocus}/>
   
  </div>
 
  <div className="col-md-4">
    <label for="inputAddress2" className="form-label">Contact .</label>
    <input type="number" className="form-control"name = "PhoneNo" id="PhoneNo"value={formValue.PhoneNo} onChange={HandleOnChange}  onFocus={HandleOnFocus}/>
    <small id="errphoneNo" class="form-text text-danger" ></small>
   
  </div>
  <div className="col-md-4">
    <label for="Qualification" className="form-label">Qualification</label>
    <input type="text" className="form-control" name = "Qualification"  id="Qualification"value={formValue.Qualification} onChange={HandleOnChange} onFocus={HandleOnFocus}/>
   
  </div>
  <div className="col-md-4">
    <label for="Aadhar Number" className="form-label">Aadhar Number</label>
    <input type="number" className="form-control" id="AadharNumber" name='Adhaar'  placeholder="Aadhar Number" value={formValue.Adhaar} onChange={HandleOnChange} onFocus={HandleOnFocus}/>
    
  </div>
  <div className="col-md-4">
    <label for="PAN Number" className="form-label">PAN Number</label>
    <input type="number" className="form-control" id="PAN" name='PAN'  placeholder="PAN Number" value={formValue.PAN} onChange={HandleOnChange} onFocus={HandleOnFocus}/>
   
  </div>
  <div className="col-md-4">
    <label for="inputPassword4" className="form-label">Date of Birth</label>
    <input type="date" className="form-control" name = "DOB"  id="dateOfBirth"value={formValue.DOB} onChange={HandleOnChange}  onFocus={HandleOnFocus}/>
   
  </div>
  <div className="col-md-4">
    <label for="inputState" className="form-label">Gender</label>
    <select id="gender" name = "Gender"  className="form-select" value={formValue.Gender} onChange={HandleOnChange} onFocus={HandleOnFocus}>
      <option selected>Select Gender</option>
      <option>Male</option>
      <option>Female</option>
      <option>Transgender</option>
      <option>other</option>
    </select>
   
    </div>
  <div className="col-md-4">
    <label for="inputAddress" className="form-label">Permanent Address</label>
    <input type="text" className="form-control" id="permanentAddress" name='PermanentAdress'  placeholder="Purana Quila, Siwan"value={formValue.PermanentAdress} onChange={HandleOnChange} onFocus={HandleOnFocus}/>
   
  </div>
  
    <div className="col-md-4">
    <label for="inputAddress" className="form-label">Temporary Address</label>
    <input type="text" id= "temporaryAddress" name='TemproryAdress'  className="form-control" placeholder="Sarfarazganj,Lucknow"value={formValue.TemproryAdress}  onChange={HandleOnChange} onFocus={HandleOnFocus}/>
 </div>
 
  <div className="col-12 mt-4" >
    <div className="form-check">
      <input className="form-check-input"   type="checkbox"  name='PrivacyPolicy'  for="gridCheck"  onChange={HandleOnChange}value={formValue.PrivacyPolicy}  onFocus={HandleOnFocus}/>
      <label className="form-check-label"  id="PrivacyPolicy" for="gridCheck">
      I accept Privacy Policy
      </label>
    </div>
  </div>
   <div className="col-12 mt-4 mb-4" style={{textAlign: 'center'}}>
    <button type="submit" className="btn btn col-md-5 me-2 signup" style={{background: 'rgb(142 249 142)', fontWeight: 'bolder',borderRadius: '2px',width:'9rem'}}>Signup</button>
    <button type="reset" className="btn btn col-md-5 me-2" style={{background: '#ff7b7b',fontWeight: 'bolder',borderRadius: '2px',width:'9rem'}}>Reset</button>
  </div>
  </div>
</form>
</div>
   
  )
}

export default StaffRegistration
