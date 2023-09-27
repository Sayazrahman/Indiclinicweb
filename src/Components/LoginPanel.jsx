import React from 'react'
import HomeLogo from '../assets/HomeLogo.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import LoginLogo from '../assets/Icons/lock-solid.svg'
import userregular from '../assets/Icons/user-regular.svg'
import loginPage from "../assets/LoginPage.jpg"
import chevrondown from "../assets/Icons/chevron-down.svg"
import menu from "../assets/Icons/bars-solid.svg"
import {useState} from 'react'
export default function LoginPanel() {
    const [loginProfile , setLoginProfile] = useState("Login as Patient")
    const [profileSwitch, setprofileSwitch] = useState("Are you a Doctor ?")
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
  

  

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

    const handleProfileSwitch = () => {
        if (loginProfile === "Login as Doctor") {
          setLoginProfile("Login as Patient");
          setprofileSwitch("Are you a Doctor ?");
        } else {
          setLoginProfile("Login as Doctor");
          setprofileSwitch("Are you a Patient ?");
        }
      }
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/;
    
      const handleLoginAsPateint=()=>{
   if(email.trim()=== "" || undefined){
document.getElementById("emailValidation").innerHTML = "Please Enter Email or Phone No."
document.getElementById("emailValidation").style.display = "block";
   }
   else if (!emailRegex.test(email)){
    document.getElementById("emailValidation").innerHTML = "Please  Enter Valid Email or Phone No."
document.getElementById("emailValidation").style.display = "block";
   }
   else if (password.trim()=== "" || undefined){
    document.getElementById("passwordValidation").innerHTML = "Please Enter Password"
    document.getElementById("passwordValidation").style.display = "block";
   }
   else if (!passwordRegex.test(password)){
    document.getElementById("passwordValidation").innerHTML = "Please Enter valid Password"
    document.getElementById("passwordValidation").style.display = "block";
   }
   else{
    alert("Logged In successfully")
   }
      }
  return (
 <>
 <section>
    <div className='loginBody'>
        <div className='container mainContainer mt-4'>
<div className='mt-2 navlogo'>
    <img src={loginPage} style={{width: "36vw", height: '82vh'}}></img>
</div>

<div className='inputContainer mt-2'>
    <div className='headingContainer mt-5'><h3 className='me-2'>Login</h3><span><h3 className='me-2' style={{color: 'rgb(51 198 207)',fontWeight: 'bolder',textDecoration: 'underline'}}>Indi </h3></span><span><h3 style={{color: 'rgb(0 159 255)',fontWeight: 'bolder',textDecoration: 'underline'}}> Clinic</h3></span></div>
    <div className='me-3' style={{display: 'flex', flexDirection: 'row-reverse'}}><h6 onClick={handleProfileSwitch} style={{color: '#284c81',fontWeight: 'bolder',cursor: 'pointer',textDecoration: 'underline'}}>{profileSwitch}</h6></div>
    <div className='inputfield'>
  <input value={email} name='Email' type='text' placeholder='Email or Phone No.' onChange={handleOnchange}/><br></br>
  <span id="emailValidation" class="invalid-feedback mx-2" style={{display: 'none'}}></span>
  <input value={password} name='password' className='mt-3' type='password' onChange={handleOnchange} placeholder='Password'/>
  <span id="passwordValidation" class="invalid-feedback mx-4" style={{display: 'none'}}></span>
    </div>
    <div className='mt-1 me-4 forgetPswd' style={{display: 'flex',flexDirection: 'row-reverse',}}><h6 style={{color: '#284c81',fontWeight: 'bolder',cursor: 'pointer',fontFamily: 'monospace'}}>Forget Password?</h6></div>
    <div style={{margin: 'auto',textAlign: 'center'}}>
         <button className='btn btn mainLoginbutton'  onClick={handleLoginAsPateint}>{loginProfile}</button>
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

 
 
 </>
  )
}
