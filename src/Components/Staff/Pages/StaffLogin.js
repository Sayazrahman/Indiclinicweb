import React from 'react'
import eye from "../../../assets/Icons/eye.svg"
import { useState } from 'react';
import LoginPanel from '../../Home/Pages/LoginPanel';
const StaffLogin = () => {
 
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
  return (
    <div className='container'>
       <h1 className='mt-4 text-center '>Staff Login</h1>
     
       <div className="  ms-3">
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
   <div style={{margin: 'auto',textAlign: 'center'}}>
   <button className=' mt-4 btn btn-sucess mainLoginbutton'>Login</button>
    </div>   
   
      </div>
    </div>
  )
}

export default StaffLogin
