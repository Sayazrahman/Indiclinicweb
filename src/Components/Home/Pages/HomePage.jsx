import React from 'react'
import headerSVG from '../../../assets/header-icon.svg';
import downArrow from '../../../assets/down-arrow-img.png'
import Banner from '../../../assets/doctor-banner.png'
import Banner1 from '../../../assets/banner-img1.png'
import Banner2 from '../../../assets/banner-img2.png'
import Banner3 from '../../../assets/banner-img3.png'

export default function HomePage() {
  return (
    <>
    <section class="banner-section pb-2 mb-5">
<div class="container">
<div class="row align-items-center">
<div class="col-lg-6">
<div class="banner-content aos aos-init aos-animate" data-aos="fade-up">
<h1>Empowering Healthcare Professionals ,<span> Welcome to IndiClinic </span> Your Partner in Clinic Management.</h1>

{/* <a href="booking.html" class="btn">Start a Consult</a> */}
</div>
<div class="search-box-one aos aos-init aos-animate" data-aos="fade-up">

</div>
</div>
<div class="col-lg-6">
<div class="banner-img aos aos-init aos-animate" data-aos="fade-up">
<img src={Banner} class="img-fluid" alt="patient-image"/>
</div>
</div>
</div>
</div>
</section>



    </>
  )
}
