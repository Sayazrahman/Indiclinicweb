import React from 'react';
import { Country, State, City }  from 'country-state-city';
import Select from 'react-select';
import registrationbanner from '../../../assets/registration-banner.png'
import reset from '../../../assets/Icons/arrow-counterclockwise.svg'
import LoadinGif from '../../../assets/Icons/1496.gif'
import { useState,useEffect } from 'react';
import RegistrationModal from '../../RegistrationModal';
import eye from "../../../assets/Icons/eye.svg"
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import OTPConfirmation from '../../OTPConfirmation';
export default function UserRegistration() {
  const navigate = useNavigate(); // Initialize useNavigate
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedcity, setSelectedcity] = useState(null);
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [isClearable, setisClearable] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showOTPConfirmation, setShowOTPConfirmation] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    user: 'Select User',
    firstName: '',
    lastName: '',
    highestQualification : 'Select Highest Qualification',
    gender: 'Select Gender',
    dateOfBirth: '',
    email: '',
    phoneNo: '',
    temporaryAddress: '',
    permanentAddress: '',
    country: null,
    state: null,
    city: null,
    postalCode: '',
    termsAndConditions: false,
    privacyPolicy: false,
    password : '',
    confirmpassword : ''
  });
  const handleReatSelectchange = (selectedOption)=>{
    document.getElementById("errcountry").style.display = 'none'
    setSelectedCountry(selectedOption)
    
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };


  const handleInputChange = (e) => {
     document.getElementById("inputUser").style.borderColor = '#dee2e6'
 document.getElementById("inputFirstName").style.borderColor = '#dee2e6'
document.getElementById("lastName").style.borderColor = '#dee2e6'
document.getElementById("highestQualification").style.borderColor = '#dee2e6'
 document.getElementById("gender").style.borderColor = '#dee2e6'
 document.getElementById("dateOfBirth").style.borderColor = '#dee2e6'
 document.getElementById("email").style.borderColor = '#dee2e6'
document.getElementById("errEmail").style.display = 'none';
 document.getElementById("errphoneNo").style.display = 'none';
  document.getElementById("phoneNo").style.borderColor = '#dee2e6'
  document.getElementById("temporaryAddress").style.borderColor = '#dee2e6'
document.getElementById("permanentAddress").style.borderColor = '#dee2e6'
 document.getElementById("errcountry").style.display = 'none'
 document.getElementById("termsAndConditions").style.color = 'black'
document.getElementById("privacyPolicy").style.color = 'black'
document.getElementById("password").style.borderColor = '#dee2e6';
document.getElementById("errPassword").style.display = 'none';
 
  document.getElementById("confirmpassword").style.borderColor = 'none';
  document.getElementById("errConfirmPassword").style.display = 'none';
     
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

  };
  useEffect(() => {
  
    const countriesData = Country.getAllCountries();
    setCountries(
      countriesData.map((country) => ({
        value: country.id,
        label: country.name,
        phonecode : country.phonecode
      }))
    );
  
  }, []);

  useEffect(() => {
 
    if (selectedCountry) {
  
      const statesData = State.getAllStates()
      setStates(
        statesData.map((state) => ({
          value: state.id,
          label: state.name,
          Countrycode : state.countryCode
        }))
      );
    
    } else {
      
      setStates([]);
    }
  }, [selectedCountry]);

  useEffect(() => {
  
    if (selectedState) {
      const citiesData = City.getAllCities().filter(
        (statecity) => statecity.countryCode === selectedState.Countrycode
      );
      setCities(
        citiesData.map((city) => ({
          value: city.id,
          label: city.name,
          Countrycode : city.countryCode
        }))
      );
      

    } else {
      
      setCities([]);
    }
  }, [selectedState]);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });
  };
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


const handleOnSubmit = async (e)=>{
  e.preventDefault();

 if(formData.user === 'Select User'){
  scrollToTop();
  document.getElementById("inputUser").style.borderColor = 'red'
 }
 else if (formData.firstName.trim() === ''){
  scrollToTop();
  document.getElementById("inputFirstName").style.borderColor = 'red'
 }
 else if (formData.lastName.trim() === ''){
  scrollToTop();
  document.getElementById("lastName").style.borderColor = 'red'
 }
 else if (formData.highestQualification === 'Select Highest Qualification'){
  scrollToTop();
  document.getElementById("highestQualification").style.borderColor = 'red'
 }
 else if (formData.gender=== 'Select Gender'){
  scrollToTop();
  document.getElementById("gender").style.borderColor = 'red'
 }
 else if (formData.dateOfBirth.trim() === ''){
  scrollToTop();
  document.getElementById("dateOfBirth").style.borderColor = 'red'
 }
 else if (formData.email.trim() === ''){
  scrollToTop();
  document.getElementById("email").style.borderColor = 'red'
 }
 else if (!emailPattern.test(formData.email)){
  scrollToTop();
  document.getElementById("errEmail").style.display = 'block';
  document.getElementById("errEmail").innerHTML = 'Please Enter Valid Email';
 }
 else if (formData.phoneNo.trim() === ''){
  scrollToTop();
  document.getElementById("phoneNo").style.borderColor = 'red'
 }
 else if (formData.phoneNo.length !==10){
  scrollToTop();
  document.getElementById("errphoneNo").style.display = 'block';
  document.getElementById("errphoneNo").innerHTML = 'Please Enter Valid Phone No.'
 }
 else if (formData.password.trim() === '') {
  scrollToTop();
  document.getElementById("password").style.borderColor = 'red';
  // Display a password validation error message
  document.getElementById("errPassword").style.display = 'block';
  document.getElementById("errPassword").innerHTML = 'Please Enter a Password';
}
else if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(formData.password)) {
  scrollToTop();
  document.getElementById("password").style.borderColor = 'red';
  // Display a password validation error message
  document.getElementById("errPassword").style.display = 'block';
  document.getElementById("errPassword").innerHTML = 'Password must contain special characters';
}
else if (formData.password !== formData.confirmpassword) {
  scrollToTop();
  document.getElementById("password").style.borderColor = '#dee2e6';

  document.getElementById("confirmpassword").style.borderColor = 'red';
  // Display a confirm password matching error message
  document.getElementById("errPassword").style.display = 'none';
  document.getElementById("errConfirmPassword").style.display = 'block';
  document.getElementById("errConfirmPassword").innerHTML = 'Passwords do not match';
  document.getElementById("confirmpassword").style.borderColor = '#dee2e6';
}
 else if(formData.temporaryAddress.trim() === ''){
   document.getElementById("temporaryAddress").style.borderColor = 'red'
 }
 else if(formData.permanentAddress.trim() === ''){
   document.getElementById("permanentAddress").style.borderColor = 'red'
 }
 else if(selectedCountry === null){
   document.getElementById("errcountry").style.display = 'block'
   document.getElementById("errcountry").innerHTML = 'Please Select Country'
 }
 else if(formData.termsAndConditions === false){
   document.getElementById("termsAndConditions").style.color = 'red'

 }
 else if(formData.privacyPolicy === false){
   document.getElementById("privacyPolicy").style.color = 'red'
  
 }
else {

  setTimeout(() => {
    setLoading(true);

    // After 2 seconds, show the OTP modal
    setTimeout(() => {
      setShowOTPConfirmation(true);
      setLoading(false); // Stop loading
    }, 2000);
  }, 2000);
  localStorage.setItem('formData', JSON.stringify(formData));

}


}
const handleOnReset = ()=>{
  document.getElementById("inputUser").style.borderColor = '#dee2e6'
  document.getElementById("inputFirstName").style.borderColor = '#dee2e6'
 document.getElementById("lastName").style.borderColor = '#dee2e6'
 document.getElementById("highestQualification").style.borderColor = '#dee2e6'
  document.getElementById("gender").style.borderColor = '#dee2e6'
  document.getElementById("dateOfBirth").style.borderColor = '#dee2e6'
  document.getElementById("email").style.borderColor = '#dee2e6'
 document.getElementById("errEmail").style.display = 'none';
  document.getElementById("errphoneNo").style.display = 'none';
   document.getElementById("phoneNo").style.borderColor = '#dee2e6'
   document.getElementById("temporaryAddress").style.borderColor = '#dee2e6'
 document.getElementById("permanentAddress").style.borderColor = '#dee2e6'
  document.getElementById("errcountry").style.display = 'none'
  document.getElementById("termsAndConditions").style.color = 'black'
 document.getElementById("privacyPolicy").style.color = 'black'
  scrollToTop()
  setSelectedCountry(null);
  setSelectedState(null);
  setSelectedcity(null)
  setFormData({
    user: 'Select User',
    firstName: '',
    lastName: '',
    gender: 'Select Gender',
    dateOfBirth: '',
    email: '',
    phoneNo: '',
    temporaryAddress: '',
    permanentAddress: '',
    country: null,
    state: null,
    city: null,
    postalCode: '',
    termsAndConditions: false,
    privacyPolicy: false,
  });
  
}
const handleModalClose = () => {
  setShowModal(false);
  setSuccessMessage(''); // Clear the success message
  navigate('/Indiclinicweb')
  const savedFormData = JSON.parse(localStorage.getItem('formData'));
};


  return (
    <>
    <div className='main-box-registration d-flex'>
        <div className ="col-md-5 registration-banner">
        <img src={registrationbanner}></img>
      </div>
    <div className='Registration-container col-md-5'>

    <div className="col-md-4">
    <label for="inputUser" className="form-label">Register As <span className="requireFields" >*</span></label>
    <select id="inputUser" name="user" value={formData.user} className="form-select" onChange = {handleInputChange} >
      <option selected>Select User</option>
      <option>Doctor</option>
      <option>Staff</option>
    </select>
    </div>
         <form className="row g-3 mt-2">
      
  <div className="col-md-12">
  <label for="inputEmail4" className="form-label"> Doctor's First Name</label>
  <div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon1">Dr.</span>
  <input type="text" class="form-control" name="firstName" placeholder="First Name" aria-label="Username" id='inputFirstName' aria-describedby="basic-addon1" onChange={handleInputChange}/>
</div>
  </div>
  <div className="col-md-12">
    <label for="inputEmail4" className="form-label">Doctor's Last Name</label>
    <input type="name" value= {formData.lastName} name = "lastName"  className="form-control" id="lastName" onChange = {handleInputChange}/>
  </div>
  <div className="col-md-12">
    <label for="inputState" className="form-label">Highest Qualification</label>
    <select id="highestQualification" name = "highestQualification"  value = {formData.highestQualification} className="form-select" onChange = {handleInputChange}>
      <option selected>Select Highest Qualification</option>
      <option>MBBS</option>
      <option>MD</option>
      <option>BDS</option>
      <option>other</option>
    </select>
    </div>
  <div className="col-md-12">
    <label for="inputState" className="form-label">Gender</label>
    <select id="gender" name = "gender"  value = {formData.gender} className="form-select" onChange = {handleInputChange}>
      <option selected>Select Gender</option>
      <option>Male</option>
      <option>Female</option>
      <option>Transgender</option>
      <option>other</option>
    </select>
    </div>
  <div className="col-md-12">
    <label for="inputPassword4" className="form-label">Date of Birth</label>
    <input type="date" className="form-control" name = "dateOfBirth" value = {formData.dateOfBirth} id="dateOfBirth" onChange = {handleInputChange}/>
  </div>
  <div className="col-md-12">
    <label for="inputPassword4" className="form-label">Email</label>
    <input type="email" name = "email" value = {formData.email} className="form-control" id="email" onChange = {handleInputChange}/>
    <small id="errEmail" class="form-text text-danger" style={{display: "none"}}></small>
  </div>
  <div className="col-md-12">
    <label for="inputAddress2" className="form-label">Phone No.</label>
    <input type="number" className="form-control" value = {formData.phoneNo} name = "phoneNo" id="phoneNo" onChange = {handleInputChange}/>
    <small id="errphoneNo" class="form-text text-danger" style={{display: "none"}}></small>
  </div>
  <div className="col-md-6">
    <label for="inputAddress2" className="form-label">Password</label>
    <input  type={showPassword ? 'text' : 'password'} className="form-control" value = {formData.password} name = "password" id="password" onChange = {handleInputChange}/>
    <span  onClick={togglePasswordVisibility} >
            {showPassword ? (
              <img src={eye} style={{position: 'relative', top: '-31px',left: '200px'}} />// Replace with your eye icon
            ) : (
              <img src={eye} style={{position: 'relative', top: '-31px',left: '200px'}} /> // Replace with your eye icon
            )}
          </span>
    <small id="errPassword" class="form-text text-danger" style={{display: "none"}}></small>
  </div>
  <div className="col-md-6">
    <label for="inputAddress2" className="form-label">Confirm Password</label>
    <input  type={showPassword ? 'text' : 'password'} className="form-control" value = {formData.confirmpassword} name = "confirmpassword" id="confirmpassword" onChange = {handleInputChange}/>
    <span  onClick={togglePasswordVisibility} >
            {showPassword ? (
              <img src={eye} style={{position: 'relative', top: '-31px',left: '200px'}} />// Replace with your eye icon
            ) : (
              <img src={eye} style={{position: 'relative', top: '-31px',left: '200px'}} /> // Replace with your eye icon
            )}
          </span>
    <small id="errConfirmPassword" class="form-text text-danger" style={{display: "none"}}></small>
  </div>
  <div className="col-md-12">
    <label for="inputAddress" className="form-label">Temporary Address</label>
    <input type="text" id= "temporaryAddress" name='temporaryAddress' value={formData.temporaryAddress} className="form-control" placeholder="Sarfarazganj,Lucknow" onChange = {handleInputChange}/>
  </div>
  <div className="col-md-12">
    <label for="inputAddress" className="form-label">Permanent Address</label>
    <input type="text" className="form-control" id="permanentAddress" name='permanentAddress' value={formData.permanentAddress} placeholder="Purana Quila, Siwan" onChange = {handleInputChange}/>
  </div>

  <div className="col-md-12">
    <label for="inputState" className="form-label">Country</label>
    <Select  
        placeholder="Select Country"
        value={selectedCountry}
        options={countries}
        onChange={handleReatSelectchange}
        isClearable = {isClearable}
      />
      <small id="errcountry" name='country' class="form-text text-danger" style={{display: "none"}}></small>
  </div>
  <div className="col-md-12">
    <label for="inputState" className="form-label">State</label>
    <Select
        placeholder="Select State"
        value={selectedState}
        options={states}
        onChange={setSelectedState}
        isDisabled={!selectedCountry}
        isClearable = {isClearable}
      />
  </div>
  <div className="col-md-12">
    <label for="inputState" className="form-label">City</label>
    <Select
        placeholder="Select City"
        value={selectedcity}
        options={cities}
        onChange={setSelectedcity}
        isDisabled={!selectedState}
        isClearable = {isClearable}
        
      />
  </div>


  <div className="col-md-12">
    <label for="inputZip" className="form-label">Area Postal Code (optional)</label>
    <input type="text" className="form-control" id="inputZip" onChange = {handleInputChange}/>
  </div>
  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" name='termsAndConditions' onChange = {handleInputChange}/>
      <label className="form-check-label" for="gridCheck"  id="termsAndConditions" >
      I accept terms and conditions
      </label>
    </div>
  </div>
  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input"   type="checkbox"  name='privacyPolicy' value={formData.privacyPolicy}  for="gridCheck" onChange = {handleInputChange}/>
      <label className="form-check-label"  id="privacyPolicy" for="gridCheck">
      I accept Privacy Policy
      </label>
    </div>
  </div>
  <div className="col-12" style={{textAlign: 'center'}}>
    <button type="submit" className="btn btn col-md-5 me-2 signup" onClick = {handleOnSubmit} style={{background: 'rgb(142 249 142)', fontWeight: 'bolder',borderRadius: '2px'}}>Signup</button>
    <button type="reset" className="btn btn col-md-5 me-2" onClick = {handleOnReset} style={{background: '#ff7b7b',fontWeight: 'bolder',borderRadius: '2px'}}><img src={reset}></img>Reset</button>
   
  </div>
</form>
    </div>
  
    </div>
 
    {showOTPConfirmation && (
        <OTPConfirmation />
      )}
    
    
    {loading && (
        <>
          <div className="blurred-background" />
          <div className="loading-container">
            <img src={LoadinGif} alt="Loading" />
            <h5>Please wait...!</h5>
          </div>
        </>
      )}
      {successMessage && (
        <div>
          <RegistrationModal message={successMessage} onClose={handleModalClose}  />
        </div>
      )}
 
    </>
    
  )
}

