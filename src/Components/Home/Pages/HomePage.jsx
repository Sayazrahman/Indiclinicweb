import React from 'react'
import headerSVG from '../../../assets/header-icon.svg';
import downArrow from '../../../assets/down-arrow-img.png'
import Banner from '../../../assets/banner-img.png'
import Banner1 from '../../../assets/banner-img1.png'
import Banner2 from '../../../assets/banner-img2.png'
import Banner3 from '../../../assets/banner-img3.png'

export default function HomePage() {
  return (
    <>
    <section class="banner-section">
<div class="container">
<div class="row align-items-center">
<div class="col-lg-6">
<div class="banner-content aos aos-init aos-animate" data-aos="fade-up">
<h1>Consult <span>Best Doctors</span> Your Nearby Location.</h1>
<img src={headerSVG} class="header-icon" alt="header-icon"/>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
{/* <a href="booking.html" class="btn">Start a Consult</a> */}
<div class="banner-arrow-img">
<img src={downArrow} class="img-fluid" alt="down-arrow"/>
</div>
</div>
<div class="search-box-one aos aos-init aos-animate" data-aos="fade-up">

</div>
</div>
<div class="col-lg-6">
<div class="banner-img aos aos-init aos-animate" data-aos="fade-up">
<img src={Banner} class="img-fluid" alt="patient-image"/>
<div class="banner-img1">
<img src={Banner1} class="img-fluid" alt="checkup-image"/>
</div>
<div class="banner-img2">
<img src= {Banner2} class="img-fluid" alt="doctor-slide"/>
</div>
<div class="banner-img3">
<img src={Banner3} class="img-fluid" alt="doctors-list"/>
</div>
</div>
</div>
</div>
</div>
</section>



    </>
  )
}
