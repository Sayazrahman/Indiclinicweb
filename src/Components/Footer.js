import React from 'react'
import HomeLogo from '../assets/HomeLogo.jpg'
export default function Footer() {
  return (
    <>
    
    <footer className='footer'>
    <div className="container footerContainer mt-2">
        <div className='aboutSection' style={{width: '17vw'}}>
        <img className='HomeNavLogo mt-4' src={HomeLogo} style={{width: "17vw", height: '10vh'}}/>
        <div style={{width: '17vw',textAlign: 'center'}}><p style={{fontWeight: 'bold',color: 'gray',fontSize: '13px'}}>Your one-stop destination for healthcare. Find trusted doctors, book appointments, consult online, and purchase medicines conveniently. Your well-being, our priority</p></div>
        </div>
        <div className='mt-4'>
        <h4 className='ms-4' style={{textAlign: 'center'}}>For Patients</h4>
        <ul>
            <li>Search for Doctors</li>
            <li>Login</li>
            <li>Register</li>
        </ul>
        </div>
        <div  className='mt-4 '>
        <h4 className='ms-4' style={{textAlign: 'center'}}>For Doctors</h4>
        <ul>
            <li>Appointments</li>
            <li>Chat</li>
            <li>Login</li>
            </ul>
            </div>
            <div  className='mt-4'  >
                <h4 > Contact Us</h4>
                <li>sarfarazganj, Lucknow</li>
                <li>7979847221</li>
                <li>rahmansyedayaz@gmail.com</li>
                </div>
    </div>
    <hr/>
    <div className='footerTerms mt-4'>
<div>Copyright © 2023 Indiclinic.com. All Rights Reserved</div>
<div style={{cursor: 'pointer'}}>Privacy Policy | Terms and Conditions</div>
    </div>
 </footer>
    </>
  )
}
