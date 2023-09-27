import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import chevrondown from "../../assets/Icons/chevron-down.svg"
export default function Sidebar({ isOpen, onClose }) {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      {/* Add your sidebar content here */}
      <ul className='sideUl'>
                <li>
                  <NavLink activeClassName="active" to= "/">
                    Home <img src={chevrondown}/>
                    </NavLink>
                  </li>
                <li>
                  <NavLink activeClassName="active" to= "/">

                     Patients <img src={chevrondown}/>
                  </NavLink>
                 
                  </li>
                <li>
                  
                <NavLink activeClassName="active" to= "/">Doctors <img src={chevrondown}/></NavLink></li>
                <li>  <NavLink activeClassName="active" to= "/">Pharmacy <img src={chevrondown}/></NavLink></li>
                <li>  <NavLink activeClassName="active" to= "/">Admin <img src={chevrondown}/></NavLink></li>
            </ul>
      <button onClick={onClose}>Close</button>
    </div>
  );
}
