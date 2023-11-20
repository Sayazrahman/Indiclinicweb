import React from 'react'
import reception from '../../../assets/Icons/reception.png'
import assistant from '../../../assets/Icons/assistant.png'
import pharmacist from '../../../assets/Icons/pharmacist.png'
export default function ManageStaffs() {
  return (
<section className='px-2'>

    <div className='row ms-2'>
    <div class="col-xxl-1 col-md-4">
<div class="card card-admin" style={{width: '20rem'}}>
<div class="card-body cardBody-admin" >
<div class="dash-widget-header">
<span class="dash-widget-icon text-primary">
<img src={reception} alt="receptionist" style={{width: '40px',height: '35px'}}/>
</span>
<div class="dash-count">
<h3>03</h3>
</div>
</div>
<div class="dash-widget-info">
<h6 class="text-muted">Receptionist</h6>
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
<span class="dash-widget-icon text-success">
<img src={assistant} alt="receptionist" style={{width: '45px',height: '45px'}}/>
</span>
<div class="dash-count">
<h3>07</h3>
</div>
</div>
<div class="dash-widget-info">
<h6 class="text-muted">Doctor Assistants</h6>
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
<span class="dash-widget-icon text-danger border-warning">

<img src={pharmacist} alt="receptionist" style={{width: '45px',height: '35px'}}/>
</span>
<div class="dash-count">
<h3>05</h3>
</div>
</div>
<div class="dash-widget-info">
<h6 class="text-muted">Pharmacists</h6>
<div class="progress progress-sm">
<div class="progress-bar bg-warning w-25"></div>
</div>
</div>
</div>
</div>
</div>

    </div>
 
    <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <nav>
                            <div class="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                                <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Project Tab 1</a>
                                <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Project Tab 2</a>
                                <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Project Tab 3</a>
                            </div>
                        </nav>
                        <div class="tab-content" id="nav-tabContent">
                            <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                <table class="table" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>Project Name</th>
                                            <th>Employer</th>
                                            <th>Awards</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><a href="#">Work 1</a></td>
                                            <td>Doe</td>
                                            <td>john@example.com</td>
                                        </tr>
                                        <tr>
                                            <td><a href="#">Work 2</a></td>
                                            <td>Moe</td>
                                            <td>mary@example.com</td>
                                        </tr>
                                        <tr>
                                            <td><a href="#">Work 3</a></td>
                                            <td>Dooley</td>
                                            <td>july@example.com</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                <table class="table" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>Project Name</th>
                                            <th>Employer</th>
                                            <th>Time</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><a href="#">Work 1</a></td>
                                            <td>Doe</td>
                                            <td>john@example.com</td>
                                        </tr>
                                        <tr>
                                            <td><a href="#">Work 2</a></td>
                                            <td>Moe</td>
                                            <td>mary@example.com</td>
                                        </tr>
                                        <tr>
                                            <td><a href="#">Work 3</a></td>
                                            <td>Dooley</td>
                                            <td>july@example.com</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                                <table class="table" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>Contest Name</th>
                                            <th>Date</th>
                                            <th>Award Position</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><a href="#">Work 1</a></td>
                                            <td>Doe</td>
                                            <td>john@example.com</td>
                                        </tr>
                                        <tr>
                                            <td><a href="#">Work 2</a></td>
                                            <td>Moe</td>
                                            <td>mary@example.com</td>
                                        </tr>
                                        <tr>
                                            <td><a href="#">Work 3</a></td>
                                            <td>Dooley</td>
                                            <td>july@example.com</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


</section>

  )
}
