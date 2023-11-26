import React from 'react'
import HomeLogo from '../../../assets/HomeLogo.jpg'
export default function Footer() {
  return (
    <>
    
    <footer className='footer'>
    <div className="row footerContainer mt-2">
        <div className='aboutSection'>
        <img className='HomeNavLogo mt-4' src={HomeLogo}/>
        <div className = "info"><p >Your one-stop destination for healthcare. Find trusted doctors, book appointments, consult online, and purchase medicines conveniently. Your well-being, our priority</p></div>
        </div>
        <div className='mt-4'>
        <h4 className='ms-4' style={{textAlign: 'center'}}>For Patients</h4>
        <ul>
            <li><i class="bi bi-chevron-double-right" style={{fontSize: '12px'}}></i>Search for Doctors</li>
            <li><i class="bi bi-chevron-double-right" style={{fontSize: '12px'}}></i> Login</li>
            <li><i class="bi bi-chevron-double-right" style={{fontSize: '12px'}}></i> Register</li>
        </ul>
        </div>
        <div  className='mt-4 '>
        <h4 className='ms-4' style={{textAlign: 'center'}}>For Doctors</h4>
        <ul>
            <li><i class="bi bi-chevron-double-right" style={{fontSize: '12px'}}></i> Appointments</li>
            <li><i class="bi bi-chevron-double-right" style={{fontSize: '12px'}}></i> Chat</li>
            <li><i class="bi bi-chevron-double-right" style={{fontSize: '12px'}}></i> Login</li>
            </ul>
            </div>
            <div  className='mt-4 me-5'  >
                <h4>Contact Us</h4>
                <li><i class="bi bi-chevron-double-right" style={{fontSize: '12px'}}></i> sarfarazganj, Lucknow</li>
                <li><i class="bi bi-chevron-double-right" style={{fontSize: '12px'}}></i> 7979847221</li>
                <li><i class="bi bi-chevron-double-right" style={{fontSize: '12px'}}></i> rahmansyedayaz@gmail.com</li>
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
