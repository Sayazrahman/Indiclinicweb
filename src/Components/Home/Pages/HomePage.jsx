import React, { useState } from 'react'
import headerSVG from '../../../assets/header-icon.svg';
import downArrow from '../../../assets/down-arrow-img.png'
import Banner from '../../../assets/doctor-banner.png'
import cardiology from '../../../assets/Cardiology.png'
import brain from '../../../assets/brain.png'
import pediatric from '../../../assets/pediatric.png'
import dentist from '../../../assets/dentist.png'
import doctor1 from '../../../assets/doctor1.png'
import doctor2 from '../../../assets/doctor2.jpg'
import doctor3 from '../../../assets/doctor3.jpg'
import doctor4 from '../../../assets/doctor4.jpg'
import doctor5 from '../../../assets/doctor5.jpg'
import doctor6 from '../../../assets/doctor 6.jpg'
import arthritis from '../../../assets/arthritis.png'
import work from '../../../assets/work-img.png'
import searchdoctor from '../../../assets/searchdoctor.png'
import doctorprofile from '../../../assets/doctorprofile.png'
import schedule from '../../../assets/fixappointment.png'
import book from '../../../assets/checkuponline.png'
import OnlineConsultant from '../../../assets/OnlineConsulatnt.png'
import CountUp from 'react-countup';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

export default function HomePage() {


  const specialists = [
    {id : '1' , img : cardiology, heading : "Cardiologists",count : 100},
    {id : '2' , img : pediatric, heading : "Pediatrics", count: 150},
    {id : '3' , img : brain, heading : "Neurologists" , count : 90},
    {id : '4' , img : arthritis, heading : "Orthopedic", count : 170},
    {id : '5' , img : dentist, heading : "Dentists" , count : 120},
  ]

  
const doctorsList = [
  {id : 1, img : doctor1 ,specility : 'Cardiologist' , name: 'Dr.Hamza'},
  {id : 2, img : doctor2 ,specility : 'Physician' , name: 'Dr.Ayaz'},
  {id : 3, img : doctor3 ,specility : 'Neurolgist' , name: 'Dr.Shubham'},
  {id : 4, img : doctor4 ,specility : 'Pediatrics' , name: 'Dr.Jilani'},

 
]
  
  return (
    <>
  <section class="banner-section pb-2">
   
<div class="container">
<div class="row align-items-center">
<div class="col-lg-6">
<div class="banner-content aos aos-init aos-animate" data-aos="fade-up">
<h1>Empowering Healthcare Professionals ,<span> Welcome to IndiClinic </span> Your Partner in Clinic Management.</h1>

</div>

<div class="search-box-one aos aos-init aos-animate" data-aos="fade-up">
<form >
<div class="search-input search-line">
<i class="bi bi-search"></i>
<div class="me-4">
<input type="text" class="form-control" placeholder="Search doctors, clinics, hospitals, etc"/>
</div>
</div>
<div class="search-input search-map-line">
<i class="bi bi-geo-alt-fill"></i>
<div class="me-4">
<input type="text" class="form-control" placeholder="Location"/>
<i class="feather-crosshair"></i>
</div>
</div>
<div class="search-input search-calendar-line">
<i class="bi bi-calendar2-date"></i>
<div class="me-4">
<input type="date" class="form-control datetimepicker" placeholder="Date"/>
</div>
</div>
<div class="form-search-btn">
<button class="btn">Search</button>
</div>
</form>
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
<ParallaxProvider>
  <Parallax>
  <section>

  <div className='row pe-2 ps-2 pt-5'>

<div class="col-sm-12 mb-3 ps-5 ms-5" style={{boxShadow: "0 9px 11px #1d499914"}}>
<h2 class="page-title">Specialists Joined Us</h2>

</div>
  <h4></h4>
  {specialists && specialists.map((data)=>{
      return(
        <div className='col-xxl-2 col-xl-2 col-lg-3 col-8 mb-3 mx-3 specialists-box' >

       <img  id={data.id} src= {data.img} ></img>
       <br></br>
       <h4 className='mt-2' id={data.id} >{data.heading}</h4>
       <h3 className='mt-2' id={data.id} style={{fontWeight: 'bold'}}><CountUp end={data.count} duration={2.75}/>+</h3>
    
        </div>
     
        )
      })}
    
  
  </div>

  <div className='row pt-5 mt-5 col-12' style={{background : '#F2F6F6'}}>
   <div className='col-xxl-2 col-xl-5 col-lg-3 col-12'>
     <h1 style={{fontWeight : 'bolder'}}>Online Consultation</h1>
        <p>Consult your patient Online through Video call or Voice call, Join the next generation of healthcare with <span>IndiClini</span>. Register today and experience the future of medical appointment management. Your practice, your terms, all in one place.</p>
        <button className='btn btn-warning' style={{background: "rgb(255 156 7)" ,color: 'black' ,width: '10rem',borderRadius:'20px'}}>Learn More</button>
        </div>
        <div className='col-xxl-2 col-xl-5 col-lg-3 col-12'> 
      <img className='col-xxl-2 col-xl-12 col-lg-3 col-12' src={OnlineConsultant} ></img>
    </div>
   </div>
</section>
</Parallax>
</ParallaxProvider>



<div class="col-sm-12 mb-3 ps-5 ms-5 mt-5" style={{boxShadow: "0 9px 11px #1d499914"}}>
<h2 class="page-title">Our Best Doctors</h2>

</div>



<section className='pt-2 mt-2 px-3'>

  <div className="row" style={{paddingLeft:'100px' , paddingRight: '100px'}}>

    {doctorsList && doctorsList.map((val , index)=>{
      return (
           <div className='col-xxl-2 col-xl-2 col-lg-3 col-8 mb-3 mx-1'>
        <div class="card" style={{height: 'auto' , width: '15rem'}}>
  <img src={val.img} class="card-img-top" alt="..." style={{height:'13rem'}}/>
  <div class="card-body" style={{display: 'block',marginTop: '0rem'}}>
    <div className='d-flex justify-content-between'>
      <h5 class="card-title" style={{fontWeight: 'bold'}}>{val.name}</h5>
      <button className='btn btn-warning' style={{padding: '2px' ,height: '2rem'}}><i class="bi bi-star-fill me-2" style={{color: 'white',fontSize: '16px'}}></i>4.5</button>
    </div>
    <div className='d-flex justify-content-between mt-1'>
          <p style={{fontWeight: 'bold',color: 'grey'}}> {val.specility}</p>
    <button className='btn btn mt-1' style={{background : 'rgb(28 91 144)',width: '6rem',height: '2rem' , padding: '2px',fontWeight: 'bold',color: 'white'}}>Book Now</button>
    </div>

  </div>
</div>
    </div>
      )
    })}
 

  </div>

</section>


<section className='mt-4 pt-5 px-5' style={{background : '#F2F6F6'}}>
  <div className='text-right mb-5'>
    <h6 className='text-primary ' style={{fontWeight: 'bold'}}>How it Works ?</h6>
    <h2 style={{fontWeight: 'bold'}}>4 Steps to Get Your Solutions</h2>
  </div>
  <div className="row justify-content-between mt-4">
    <div className='col-xxl-2 col-xl-4 col-lg-3 col-12 mb-3 mx-1'>
      <img  src={work} />
    </div>
 
      <div className='col-xxl-2 col-xl-7 col-lg-3 col-12 mb-3 mx-1 d-flex flex-wrap'>
         <div className='col-xxl-2 col-xl-1-col-lg-2 col-6 d-flex'>
          <div className='me-2'>
          <img src={searchdoctor}  style={{padding: '5px' ,background: '#235e8f' , borderRadius: '12px'}} />
          </div>
          <div>
          <h5 style={{fontWeight: 'bold'}}>Search Doctors</h5>
          <p style={{color: 'gray' , }}>Search doctor according to your symptoms, locality, specialist and budget, we will provide you the best doctors on your search basis.</p>
        </div>
        </div>
         <div className='col-xxl-2 col-xl-1-col-lg-2 col-6 d-flex'>
          <div className='me-2'>
          <img src={doctorprofile} style={{padding: '5px' ,background: '#235e8f', borderRadius: '12px'}} />
          </div>
          <div>
          <h5 style={{fontWeight: 'bold'}}>Check Doctor Profile</h5>
          <p style={{color: 'gray' , }}>Choose and check doctors from the search list according to your choice.</p>
        </div>
        </div>
         <div className='col-xxl-2 col-xl-1-col-lg-2 col-6 d-flex'>
          <div className='me-2'>
          <img src={schedule} style={{padding: '5px' ,background: '#235e8f' , borderRadius: '12px'}} />
          </div>
          <div>
          <h5 style={{fontWeight: 'bold'}}>Schedule  Appointment</h5>
          <p style={{color: 'gray' , }}>Select available appointment timing and with your comfortable available time.</p>
        </div>
        </div>
         <div className='col-xxl-2 col-xl-1-col-lg-2 col-6 d-flex'>
          <div className='me-2'>
          <img src={book} style={{padding: '5px' ,background: '#235e8f' , borderRadius: '12px'}} />
          </div>
          <div>
          <h5 style={{fontWeight: 'bold'}}>Get your Solution</h5>
          <p style={{color: 'gray' , }}>Finally Get your solution throungh video call or offline appointments.</p>
        </div>
        </div>
      
      

   
   </div>
  </div>
</section>
    </>
  )
}
