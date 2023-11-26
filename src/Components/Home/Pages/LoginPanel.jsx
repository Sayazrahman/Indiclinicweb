import React from 'react'
import eye from "../../../assets/Icons/eye.svg"
import loginPage from "../../../assets/LoginPage.jpg"
import {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import LoadinGif from '../../../assets/Icons/1496.gif'
export default function LoginPanel() {
  const navigate = useNavigate()
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const [showModal, setShowModal] = useState(false);
     const [loading, setLoading] = useState(false);

  

    const  handleOnchange=(e)=>{
        document.getElementById("emailValidation").style.display = "none";
        document.getElementById("passwordValidation").style.display = "none";
        const {name,value} = e.target
    if(name === "Email"){
        setemail(value)
    }
    else if (name === "password"){
        setpassword(value)
    }
    }

  
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      
    
      const handleLogin = () => {
        // Get the stored form data from session storage
        const storedFormDataString = window.sessionStorage.getItem('RegistrationData');
        if (!storedFormDataString) {
          // No stored data, handle this case as needed
          console.error("No stored form data found");
          return;
        }
      
        const storedFormData = JSON.parse(storedFormDataString);
      
        // Get the email and password entered by the user
        const enteredEmail = email.trim();
        const enteredPassword = password.trim();
      
        if (enteredEmail === "" || enteredEmail === undefined) {
          document.getElementById("emailValidation").innerHTML = "Please Enter Email or Phone No.";
          document.getElementById("emailValidation").style.display = "block";
        } else if (!emailRegex.test(enteredEmail)) {
          document.getElementById("emailValidation").innerHTML = "Please Enter Valid Email or Phone No.";
          document.getElementById("emailValidation").style.display = "block";
        } else if (enteredPassword === "" || enteredPassword === undefined) {
          document.getElementById("passwordValidation").innerHTML = "Please Enter Password";
          document.getElementById("passwordValidation").style.display = "block";
        } else {
          // Check if entered email and password match stored data
          if (
            enteredEmail === storedFormData.email &&
            enteredPassword === storedFormData.password
          ) {
            setLoading(true);
            setTimeout(() => {
              // Redirect to the dashboard after a delay
              navigate("/MyDashboard");
            }, 2000);
          } else {
            // Display a validation message for incorrect email or password
            alert("Invalid email or password.");
            
     
          }
        }
      };
      

      const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
      };
  return (
 <>
 <section>
    <div className='loginBody'>
        <div className='container mainContainer mt-4'>
<div className='mt-2 navlogo'>
    <img src={loginPage} ></img>
</div>

<div className='inputContainer mt-2'>
    <div className='headingContainer mt-5'><h3 className='me-2'>Login</h3><span><h3 className='me-2' style={{color: 'rgb(51 198 207)',fontWeight: 'bolder',textDecoration: 'underline'}}>Indi </h3></span><span><h3 style={{color: 'rgb(0 159 255)',fontWeight: 'bolder',textDecoration: 'underline'}}> Clinic</h3></span></div>
    <div className="col-md-4 ms-3">
    <label for="inputUser" className="form-label">Login As <span className="requireFields" >*</span></label>
    <select id="inputUser" name="user"  className="form-select" >
      <option selected>Select User</option>
      <option>Patient</option>
      <option>Doctor</option>
      <option>Staff</option>
    </select>
    </div>
    <div className='inputfield'>
   
 <input value={email} name='Email' type='text' placeholder='Email or Phone No.' onChange={handleOnchange}/><br></br>
  <span id="emailValidation" class="invalid-feedback mx-2" style={{display: 'none'}}></span>
<input value={password} name='password' className='mt-3' type={showPassword ? 'text' : 'password'} onChange={handleOnchange} placeholder='Password'/>
  <span  onClick={togglePasswordVisibility} >
            {showPassword ? (
              <img src={eye} style={{position: 'relative', top: '-35px',left: '450px'}} />// Replace with your eye icon
            ) : (
              <img src={eye} style={{position: 'relative', top: '-35px',left: '450px'}} /> // Replace with your eye icon
            )}
          </span>
  <span id="passwordValidation" class="invalid-feedback mx-4" style={{display: 'none'}}></span>
    </div>
    <div className='mt-1 me-4 forgetPswd' style={{display: 'flex',flexDirection: 'row-reverse',}}><h6 style={{color: '#284c81',fontWeight: 'bolder',cursor: 'pointer',fontFamily: 'monospace'}}>Forget Password?</h6></div>
    <div style={{margin: 'auto',textAlign: 'center'}}>
         <button className='btn btn-sucess mainLoginbutton'  onClick={handleLogin}>Login</button>
<hr/>
<button className='btn btn OtpmainBtn'>Login through OTP</button>  
    </div>

<div className='mt-5' style={{display: 'flex',justifyContent: 'center'}}>
    <h6 style={{fontWeight: 'bold'}}>Don't have an account ?</h6><span><h6 className='ms-1' style={{color: 'green',fontWeight: 'bolder',cursor: 'pointer',textDecoration: 'underline'}}> Register Now</h6></span>
</div>
</div>
        </div>
    </div>
 </section>

 {loading && (
        <>
          <div className="blurred-background" />
          <div className="loading-container">
            <img src={LoadinGif} alt="Loading" />
            <h5>Logging you in...!!</h5>
          </div>
        </>
      )}
 
 </>
  )
}
