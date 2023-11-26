import React from 'react'
import { Link } from 'react-router-dom';
import HomeLogo from '../../../assets/HomeLogo.jpg'
import Ayaz from '../../../assets/Ayaz.jpg'
export default function SidebarAdmin() {
  return (
    <>
  <div class="admin-header">

<div class="adminHeader-Logo">
<Link to="/Login"><img src={HomeLogo} alt="Logo"/></Link>

</div>

<a id="toggle_btn">
<i class="bi bi-filter-right" style={{fontSize: '35px'}}></i>
</a>
<div class="top-nav-search">
<form>
<input type="text" class="form-control" placeholder="Search here"/>
<button class="btn" type="submit"><i class="bi bi-search"></i></button>
</form>
</div>

<a class="mobile_btn" id="mobile_btn">
<i class="bi bi-bars"></i>
</a>


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


<li class="nav-item dropdown has-arrow">
<a href="#" class="dropdown-toggle nav-link" data-bs-toggle="dropdown">
<span class="user-img"><img class="rounded-circle" src={Ayaz} width="31" alt="Ryan Taylor"/></span>
</a>
<div class="dropdown-menu">
<div class="user-header">
<div class="avatar avatar-sm">
<img src={Ayaz} alt="User Image" class="avatar-img rounded-circle"/>
</div>
<div class="user-text">
<h6>Dr.Maroof Jilani</h6>
<p class="text-muted mb-0">Administrator</p>
</div>
</div>
<a class="dropdown-item" href="profile.html">My Profile</a>
<a class="dropdown-item" href="settings.html">Settings</a>
<Link class="dropdown-item" to="/Login">Logout</Link>
</div>
</li>

</ul>

</div>
    
    </>
  )
}
