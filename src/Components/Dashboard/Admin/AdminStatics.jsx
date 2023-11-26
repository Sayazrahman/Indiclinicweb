import React from 'react'
import AdminGraph from './AdminGraph'
import Chart from '../Pages/Chart';
export default function AdminStatics() {
  return (
   <>
   <div class="page-header">
<div class="row" >
<div class="col-sm-12">
<h3 class="page-title">Welcome Admin!</h3>
<ul class="breadcrumb">
<li class="breadcrumb-item active">Dashboard</li>
</ul>
</div>
</div>
</div>

<div class="row" style={{paddingLeft : '20px' ,paddingRight : '20px'}}>
<div class="col-xl-3 col-sm-6 col-12">
<div class="card card-admin">
<div class="card-body cardBody-admin">
<div class="dash-widget-header">
<span class="dash-widget-icon text-primary border-primary">
<i class="bi bi-person-fill" style={{fontSize:"25px"}}></i>
</span>
<div class="dash-count">
<h3>168</h3>
</div>
</div>
<div class="dash-widget-info">
<h6 class="text-muted">Doctors</h6>
<div class="progress progress-sm">
<div class="progress-bar bg-primary w-50"></div>
</div>
</div>
</div>
</div>
</div>
<div class="col-xl-3 col-sm-6 col-12">
<div class="card card-admin">
<div class="card-body cardBody-admin">
<div class="dash-widget-header">
<span class="dash-widget-icon text-success">
<i class="bi bi-hospital"></i>
</span>
<div class="dash-count">
<h3>487</h3>
</div>
</div>
<div class="dash-widget-info">
<h6 class="text-muted">Patients</h6>
<div class="progress progress-sm">
<div class="progress-bar bg-success w-50"></div>
</div>
</div>
</div>
</div>
</div>
<div class="col-xl-3 col-sm-6 col-12">
<div class="card card-admin">
<div class="card-body cardBody-admin">
<div class="dash-widget-header">
<span class="dash-widget-icon text-danger border-danger">
<i class="bi bi-card-checklist"></i>
</span>
<div class="dash-count">
<h3>485</h3>
</div>
</div>
<div class="dash-widget-info">
<h6 class="text-muted">Appointment</h6>
<div class="progress progress-sm">
<div class="progress-bar bg-danger w-50"></div>
</div>
</div>
</div>
</div>
</div>
<div class="col-xl-3 col-sm-6 col-12">
<div class="card card-admin">
<div class="card-body cardBody-admin">
<div class="dash-widget-header">
<span class="dash-widget-icon text-warning border-warning">
<i class="bi bi-folder"></i>
</span>
<div class="dash-count">
<h3>₹62523</h3>
</div>
</div>
<div class="dash-widget-info">
<h6 class="text-muted">Revenue</h6>
<div class="progress progress-sm">
<div class="progress-bar bg-warning w-50"></div>
</div>
</div>
</div>
</div>
</div>
</div>
  <Chart/>
   </>
  )
}
