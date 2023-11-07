import React, { useState } from 'react';
import { NavLink , Link} from 'react-router-dom';
import HomeLogo from '../../../assets/HomeLogo.jpg'
import chevrondown from "../../../assets/Icons/chevron-down.svg"
export default function Sidebar({ isOpen, onClose }) {
  return (
    <>
     <div className={`sidebar ${isOpen ? 'open' : ''}`}>
    <div className='' style={{margin: 'auto'}}>
    <img className='' src={HomeLogo} alt='Logo' />
  </div>
      <ul className='sideUl'>
                <li>
                  <Link  to= "/">
                    Home <img src={chevrondown}/>
                    </Link>
                  </li>
                <li>
                  
                <Link activeClassName="active" to= "/">Doctors <img src={chevrondown}/></Link></li>
                <li>  <Link  to= "/">Pharmacy <img src={chevrondown}/></Link></li>
                <li>  <Link  to= "/">Admin <img src={chevrondown}/></Link></li>
                <li>  <Link  type = 'button' to= "/UserRegistration">Register<img src={chevrondown}/></Link></li>
               
      
            </ul>
      <button onClick={onClose}>Close</button>
    </div>
    </>
   
  );
}
