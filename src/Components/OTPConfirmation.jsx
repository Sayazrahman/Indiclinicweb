import React, { useState, useEffect } from 'react';
import OtpInput from 'react-otp-input';
import LoadinGif from '../assets/Icons/1496.gif';
import RegistrationModal from '../Components/RegistrationModal';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

export default function OTPConfirmation({ onClose }) {
    const navigate = useNavigate(); // Initialize useNavigate
  const [otp, setOtp] = useState('');
  const [verificationStatus, setVerificationStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showOTPModal, setShowOTPModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleVerification = () => {
    if (otp === '1234') {
      setVerificationStatus(' Verified ✔');

      setTimeout(() => {
        setLoading(true);

        setTimeout(() => {
          setLoading(false);
          setShowModal(true);
          setShowOTPModal(false)
          setSuccessMessage('Thank You for registering on IndiClinic, Please proceed to Login');
          // Close the OTP modal after 3 seconds
          
        }, 3000);
      }, 1000);
    } else {
      setVerificationStatus('Incorrect OTP');
    }
  };

  const handleModalOTPClose = () => {
    setShowOTPModal(false);
    
  };

  const handleNavigateLogin =()=>{
        setShowModal(false);
        setSuccessMessage(''); // Clear the success message
        navigate('/Login')
    
  }

  useEffect(() => {
    if (verificationStatus === ' Verified ✔') {
      // Display the Verified status for 1 second
      setTimeout(() => {
        setVerificationStatus('');
        setShowOTPModal(false)
      }, 1000);
    }
  }, [verificationStatus]);

  return (
    <>
      <div className="custom-modal-overlay col-md-4">
        <div className="custom-modal col-md-4">
          <button onClick={handleModalOTPClose} style={{ float: 'right', border: 'none', background: 'transparent' }}> X </button>
          <div className="modal-content col-md-12">
            <h4 style={{ color: 'orange' }}>Please Enter OTP</h4>
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={4}
              separator={<span>-</span>}
              renderInput={(props) => <input {...props} />}
              containerStyle={{
                display: 'flex',
                justifyContent: 'center',
              }}
              inputStyle={{
                marginTop: '5px',
                width: '3rem',
                height: '3rem',
                margin: '0.5rem',
                borderRadius: '5px',
                borderBottom: '1px solid orange',
                borderColor: 'orangered',
              }}
            />
            <button className='btn btn signup' style={{ background: '#ffc458', fontWeight: 'bolder', borderRadius: '2px', width: 'auto' }} onClick={handleVerification}>Verify OTP</button>
            <h5 className='mt-2' style={{ color: 'green', fontFamily: 'monospace' }}>{verificationStatus}</h5>
          </div>
        </div>
      </div>

      {loading && (
        <>
          <div className="blurred-background" />
          <div className="loading-container">
            <img src={LoadinGif} alt="Loading" />
            <h5>Signing Up</h5>
          </div>
        </>
      )}
      {showModal && (
        <div>
          <RegistrationModal message={successMessage} onClose={handleNavigateLogin} />
        </div>
      )}
    </>
  );
}
