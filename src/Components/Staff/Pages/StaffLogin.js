import React from 'react'
import eye from "../../../assets/Icons/eye.svg"
import { useState, } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginPanel from '../../Home/Pages/LoginPanel';
import StaffLoginImage from "../../../assets/StaffLoginImage.jpg"
const StaffLogin = () => {
  const navigate = useNavigate();
 
  const [showPassword, setShowPassword] = useState(false);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [userType, setUserType] = useState('Select User');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const  handleOnchange=(e)=>{ 
    const {name,value} = e.target 
    if(name === "Email"){
    setemail(value)
}
else if (name === "Password"){
    setpassword(value)
}
}
if (userType === 'Doctor') {
  return <LoginPanel/>;
}
const LinkToStaffDashbord=()=>{
  navigate('/StaffDashboard')
}
  return (
    <div className='  loginBody'>
        <div className='container mainContainer mt-4'>
        <div className='mt-2 navlogo'>
    <img src={StaffLoginImage} ></img>
</div>
<div className='inputContainer mt-2'>
<div className='headingContainer mt-5'>
      <h3 className='me-2'>Staff Login</h3><span><h3 className='me-2' style={{color: 'rgb(51 198 207)',fontWeight: 'bolder'}}>Indi </h3></span><span><h3 style={{color: 'rgb(0 159 255)',fontWeight: 'bolder'}}> Clinic</h3></span> 
</div>
     
       <div className=" col-md-4 ms-3">
    <label for="inputUser" className="form-label">Login As <span className="requireFields" >*</span></label>
    <select id="inputUser" name="user" value={userType} className="form-select"  onChange={(e) => setUserType(e.target.value)}>
      <option selected>Select User</option>
      <option>Doctor</option>
      <option>Staff</option>
    </select>
    </div>
      <div className='inputfield'>
   <input  value={email}  className='mt-3' name='Email' type='text' placeholder='Email ' onChange={handleOnchange}/>
   <input  value={password} className='mt-3' name='Password'  type={showPassword ? 'text' : 'password'} onChange={handleOnchange} placeholder='Password' />
      <span onClick={togglePasswordVisibility} >
      {showPassword ? (
                         <img src={eye} style={{position: 'relative', top: '-35px',left: '65rem'}} />// Replace with your eye icon
                       ) : (
                         <img src={eye} style={{position: 'relative', top: '-35px',left: '65rem'}} /> // Replace with your eye icon
                       )}
       </span>
       <div className='me-4 forgetPswd' style={{display: 'flex',flexDirection: 'row-reverse',}}><h6 style={{color: '#284c81',fontWeight: 'bolder',cursor: 'pointer',fontFamily: 'monospace'}}>Forget Password?</h6></div>
   <div style={{margin: 'auto',textAlign: 'center'}}>
   <button className=' mt-4 mainLoginbutton' onClick={LinkToStaffDashbord}>Login</button>
    </div>   
    <div className='mt-5' style={{display: 'flex',justifyContent: 'center'}}>
    <h6 style={{fontWeight: 'bold'}}>Don't have an account ?</h6><span><h6 className='ms-1' style={{color: 'green',fontWeight: 'bolder',cursor: 'pointer',textDecoration: 'underline'}}> Register Now</h6></span>
</div>
      </div>
      </div>
      </div>
    </div>
  )
}

export default StaffLogin
