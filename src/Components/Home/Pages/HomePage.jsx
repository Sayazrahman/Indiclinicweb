import React from 'react'
import headerSVG from '../../../assets/header-icon.svg';
import downArrow from '../../../assets/down-arrow-img.png'
import Banner from '../../../assets/doctor-banner.png'
import cardiology from '../../../assets/Cardiology.png'
import brain from '../../../assets/brain.png'
import pediatric from '../../../assets/pediatric.png'
import dentist from '../../../assets/dentist.png'
import arthritis from '../../../assets/arthritis.png'
import OnlineConsultant from '../../../assets/OnlineConsulatnt.png'


export default function HomePage() {

  const specialists = [
    {id : '1' , img : cardiology, heading : "Cardiologists"},
    {id : '2' , img : pediatric, heading : "Pediatrics"},
    {id : '3' , img : brain, heading : "Neurologists"},
    {id : '4' , img : arthritis, heading : "Orthopedic"},
    {id : '5' , img : dentist, heading : "Dentists"},
  ]
  return (
    <>
    <section class="banner-section pb-2">
   
<div class="container">
<div class="row align-items-center">
<div class="col-lg-6" style={{    boxShadow: "0 9px 11px #1d499914",background: 'white'}}>
<div class="banner-content aos aos-init aos-animate" data-aos="fade-up">
<h1>Empowering Healthcare Professionals ,<span> Welcome to IndiClinic </span> Your Partner in Clinic Management.</h1>

{/* <a href="booking.html" class="btn">Start a Consult</a> */}
</div>
<div class="search-box-one aos aos-init aos-animate" data-aos="fade-up">

</div>
</div>
<div class="col-lg-6">
<div class="banner-img aos aos-init aos-animate" data-aos="fade-up">
<img src={Banner} class="img-fluid" alt="patient-image" />
</div>
</div>
</div>
</div>
</section>

<section>

  <div className='row pe-2 ps-2 pt-5'>

<div class="col-sm-12 mb-3 ps-5 ms-5" style={{boxShadow: "0 9px 11px #1d499914"}}>
<h2 class="page-title">Specialists Joined Us</h2>

</div>
  <h4></h4>
  {specialists && specialists.map((data)=>{
      return(
        <div className='col-xxl-2 col-xl-2 col-lg-3 col-md-4 mb-3 mx-3 specialists-box'>

       <img  id={data.id} src= {data.img} ></img>
       <br></br>
       <h4 className='mt-2' id={data.id}>{data.heading}</h4>
    
        </div>
     
        )
      })}
    
  
  </div>

  <div className='row pt-5 mt-5'>
   <div className='col-xxl-2 col-xl-4 col-lg-3 col-md-4'>
     <h1 style={{fontWeight : 'bolder'}}>Online Consultation</h1>
        <p>Consult your patient Online through Video call or Voice call, Join the next generation of healthcare with <span>IndiClini</span>. Register today and experience the future of medical appointment management. Your practice, your terms, all in one place.</p>
        <button className='btn btn-warning' style={{background: "rgb(255 156 7)" ,color: 'black' ,width: '10rem',borderRadius:'20px'}}>Learn More</button>
        </div>
        <div className='col-xxl-5 col-xl-5 col-lg-3 col-md-2'> 
      <img className='' src={OnlineConsultant} ></img>
    </div>
   </div>

</section>

    </>
  )
}
