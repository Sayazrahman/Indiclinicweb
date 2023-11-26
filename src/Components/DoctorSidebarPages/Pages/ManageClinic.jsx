import React from 'react'
import { Link } from 'react-router-dom';
import HomeClinic from '../../../assets/Icons/HomeClinic.png'
import OnlineClinic from '../../../assets/Icons/OnlineClinic.png'
import PrimaryClinic from '../../../assets/Icons/PrimaryClinic.png';
import Ayaz from '../../../assets/Ayaz.jpg'
export default function ManageClinic() {
  return (
    <>
    <div className='row ps-4'>
    <div class="col-xxl-1 col-md-4">
<div class="card card-admin" style={{width: '20rem'}}>
<div class="card-body cardBody-admin" >
<div class="dash-widget-header">
<span class="dash-widget-icon " style={{border: 'none'}}>
<img src={HomeClinic} alt="receptionist" style={{width: '45px',height: '40px'}}/>
</span>
<div class="dash-count">
<ul class="nav user-menu">

<li class="nav-item dropdown noti-dropdown">
<a href="#" class="dropdown-toggle nav-link" data-bs-toggle="dropdown">
<i class="bi bi-bell-fill mt-2"></i> <span class="badge rounded-pill mt-2 me-2">3</span>
</a>
<div class="dropdown-menu notifications">
<div class="topnav-dropdown-header">
<span class="notification-title">Notifications</span>
<a href="javascript:void(0)" class="clear-noti"> Clear All </a>
</div>
<div class="noti-content">
<ul class="notification-list">



<li class="notification-message">
<a href="#">
<div class="notify-block d-flex">
<span class="avatar avatar-sm flex-shrink-0">
<img class="avatar-img rounded-circle" alt="User Image" src={Ayaz}/>
</span>
<div class="media-body flex-grow-1">
<p class="noti-details"><span class="noti-title">Carl Kelly</span> send a message <span class="noti-title"> to his doctor</span></p>
<p class="noti-time"><span class="notification-time">12 mins ago</span></p>
</div>
</div>
</a>
</li>
</ul>
</div>
<div class="topnav-dropdown-footer">
<a href="#">View all Notifications</a>
</div>
</div>
</li>



</ul>
</div>
</div>
<div class="dash-widget-info">
<h6 class="text-muted">Home Clinic</h6>
<div class="progress progress-sm">
<div class="progress-bar bg-primary w-75"></div>
</div>
</div>
</div>
</div>
</div>



<div class="col-xxl-1 col-md-4">
<div class="card card-admin" style={{width: '20rem'}}>
<div class="card-body cardBody-admin">
<div class="dash-widget-header">
<span class="dash-widget-icon"  style={{border: 'none'}}>
<img src={OnlineClinic} alt="receptionist" style={{width: '45px',height: '45px'}}/>
</span>
<div class="dash-count">
<ul class="nav user-menu">

<li class="nav-item dropdown noti-dropdown">
<a href="#" class="dropdown-toggle nav-link" data-bs-toggle="dropdown">
<i class="bi bi-bell-fill mt-2"></i> <span class="badge rounded-pill mt-2 me-2">3</span>
</a>
<div class="dropdown-menu notifications">
<div class="topnav-dropdown-header">
<span class="notification-title">Notifications</span>
<a href="javascript:void(0)" class="clear-noti"> Clear All </a>
</div>
<div class="noti-content">
<ul class="notification-list">
<li class="notification-message">
<a href="#">
<div class="notify-block d-flex">
<span class="avatar avatar-sm flex-shrink-0">
<img class="avatar-img rounded-circle" alt="User Image" src={Ayaz}/>
</span>
<div class="media-body flex-grow-1">
<p class="noti-details"><span class="noti-title">Dr. Ruby Perrin</span> Schedule <span class="noti-title">her appointment</span></p>
<p class="noti-time"><span class="notification-time">4 mins ago</span></p>
</div>
</div>
</a>
</li>
<li class="notification-message">
<a href="#">
<div class="notify-block d-flex">
<span class="avatar avatar-sm flex-shrink-0">
<img class="avatar-img rounded-circle" alt="User Image" src={Ayaz}/>
</span>
<div class="media-body flex-grow-1">
<p class="noti-details"><span class="noti-title">Charlene Reed</span> has booked her appointment to <span class="noti-title">Dr. Ruby Perrin</span></p>
<p class="noti-time"><span class="notification-time">6 mins ago</span></p>
</div>
</div>
</a>
</li>
<li class="notification-message">
<a href="#">
<div class="notify-block d-flex">
<span class="avatar avatar-sm flex-shrink-0">
<img class="avatar-img rounded-circle" alt="User Image" src={Ayaz}/>
</span>
<div class="media-body flex-grow-1">
<p class="noti-details"><span class="noti-title">Travis Trimble</span> sent a amount of $210 for his <span class="noti-title">appointment</span></p>
<p class="noti-time"><span class="notification-time">8 mins ago</span></p>
</div>
</div>
</a>
</li>
<li class="notification-message">
<a href="#">
<div class="notify-block d-flex">
<span class="avatar avatar-sm flex-shrink-0">
<img class="avatar-img rounded-circle" alt="User Image" src={Ayaz}/>
</span>
<div class="media-body flex-grow-1">
<p class="noti-details"><span class="noti-title">Carl Kelly</span> send a message <span class="noti-title"> to his doctor</span></p>
<p class="noti-time"><span class="notification-time">12 mins ago</span></p>
</div>
</div>
</a>
</li>
</ul>
</div>
<div class="topnav-dropdown-footer">
<a href="#">View all Notifications</a>
</div>
</div>
</li>



</ul>
</div>
</div>
<div class="dash-widget-info">
<h6 class="text-muted">Online Clinic</h6>
<div class="progress progress-sm">
<div class="progress-bar bg-success w-25"></div>
</div>
</div>
</div>
</div>
</div>



<div class="col-xxl-1 col-md-4">
<div class="card card-admin" style={{width: '20rem'}}>
<div class="card-body cardBody-admin">
<div class="dash-widget-header">
<span class="dash-widget-icon"  style={{border: 'none'}}>

<img src={PrimaryClinic} alt="receptionist" style={{width: '45px',height: '40px'}}/>
</span>
<div class="dash-count">


<ul class="nav user-menu">

<li class="nav-item dropdown noti-dropdown">
<a href="#" class="dropdown-toggle nav-link" data-bs-toggle="dropdown">
<i class="bi bi-bell-fill mt-2"></i> <span class="badge rounded-pill mt-2 me-2">3</span>
</a>
<div class="dropdown-menu notifications" style={{inset : '50px auto auto'}}>
<div class="topnav-dropdown-header">
<span class="notification-title">Notifications</span>
<a href="javascript:void(0)" class="clear-noti"> Clear All </a>
</div>
<div class="noti-content">
<ul class="notification-list">
<li class="notification-message">
<a href="#">
<div class="notify-block d-flex">
<span class="avatar avatar-sm flex-shrink-0">
<img class="avatar-img rounded-circle" alt="User Image" src={Ayaz}/>
</span>
<div class="media-body flex-grow-1">
<p class="noti-details"><span class="noti-title">Dr. Ruby Perrin</span> Schedule <span class="noti-title">her appointment</span></p>
<p class="noti-time"><span class="notification-time">4 mins ago</span></p>
</div>
</div>
</a>
</li>
<li class="notification-message">
<a href="#">
<div class="notify-block d-flex">
<span class="avatar avatar-sm flex-shrink-0">
<img class="avatar-img rounded-circle" alt="User Image" src={Ayaz}/>
</span>
<div class="media-body flex-grow-1">
<p class="noti-details"><span class="noti-title">Charlene Reed</span> has booked her appointment to <span class="noti-title">Dr. Ruby Perrin</span></p>
<p class="noti-time"><span class="notification-time">6 mins ago</span></p>
</div>
</div>
</a>
</li>
<li class="notification-message">
<a href="#">
<div class="notify-block d-flex">
<span class="avatar avatar-sm flex-shrink-0">
<img class="avatar-img rounded-circle" alt="User Image" src={Ayaz}/>
</span>
<div class="media-body flex-grow-1">
<p class="noti-details"><span class="noti-title">Travis Trimble</span> sent a amount of $210 for his <span class="noti-title">appointment</span></p>
<p class="noti-time"><span class="notification-time">8 mins ago</span></p>
</div>
</div>
</a>
</li>
<li class="notification-message">
<a href="#">
<div class="notify-block d-flex">
<span class="avatar avatar-sm flex-shrink-0">
<img class="avatar-img rounded-circle" alt="User Image" src={Ayaz}/>
</span>
<div class="media-body flex-grow-1">
<p class="noti-details"><span class="noti-title">Carl Kelly</span> send a message <span class="noti-title"> to his doctor</span></p>
<p class="noti-time"><span class="notification-time">12 mins ago</span></p>
</div>
</div>
</a>
</li>
</ul>
</div>
<div class="topnav-dropdown-footer">
<a href="#">View all Notifications</a>
</div>
</div>
</li>



</ul>
</div>
</div>
<div class="dash-widget-info">
<h6 class="text-muted">Satelite Clinic</h6>
<div class="progress progress-sm">
<div class="progress-bar bg-warning w-25"></div>
</div>
</div>
</div>
</div>
</div>
    </div>
    
    
    </>
  )
}
