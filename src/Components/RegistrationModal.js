import React from 'react'

export default function RegistrationModal({message, onClose }) {
  return (
    <div className="custom-modal-overlay col-md-4">
    <div className="custom-modal col-md-4">
      <div className="modal-content col-md-12">
        <p style={{color : 'green', fontWeight: 'bold' , fontFamily: 'initial',fontSize: '18px'}}>{message}</p>
        <button className='btn btn  signup' onClick={onClose} style={{background: 'rgb(142 249 142)', fontWeight: 'bolder',borderRadius: '2px'}}>Proceed To Login</button>
      </div>
    </div>
  </div>
  )
}
