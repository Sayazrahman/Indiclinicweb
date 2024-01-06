import React, { useState } from 'react';

const AppointmentSchedule = () => {
  const [appointments, setAppointments] = useState([]);
  const [newAppointment, setNewAppointment] = useState({
    patientName: '',
    date: '',
    time: '',
    appointmentType: 'Regular Check-up',
  });
  const [error, setError] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewAppointment({ ...newAppointment, [name]: value });
  };

  const handleAddAppointment = () => {
    if (!newAppointment.patientName || !newAppointment.date || !newAppointment.time) {
      setError('Please fill in all required fields.');
      return;
    }

    setAppointments([...appointments, newAppointment]);
    setNewAppointment({ patientName: '', date: '', time: '', appointmentType: 'Regular Check-up' });
    setError('');
  };

  return (
    <>
      <h2 className='text-center'>Appointment Schedule</h2>
    <div className="appointment-schedule d-flex mt-5">
    
    

      <div className="input-group">
        <label>
          Patient Name:
          <input
            type="text"
            name="patientName"
            value={newAppointment.patientName}
            onChange={handleInputChange}
          />
        </label>
      </div>

      <div className="input-group">
        <label>
          Date:
          <input
            type="date"
            name="date"
            value={newAppointment.date}
            onChange={handleInputChange}
          />
        </label>
      </div>

      <div className="input-group">
        <label>
          Time:
          <input
            type="time"
            name="time"
            value={newAppointment.time}
            onChange={handleInputChange}
          />
        </label>
      </div>

      <div className="input-group">
        <label>
          Appointment Type:
          <select
            name="appointmentType"
            value={newAppointment.appointmentType}
            onChange={handleInputChange}
          >
            <option value="Regular Check-up">Regular Check-up</option>
            <option value="Follow-up">Follow-up</option>
            <option value="Procedure">Procedure</option>
          </select>
        </label>
      </div>

      {error && <div className="error-message">{error}</div>}

      <button className='btn btn-success' onClick={handleAddAppointment}>Add Appointment</button>

      <ul>
        {appointments.map((appointment, index) => (
          <li key={index}>
            {`Patient: ${appointment.patientName}, Date: ${appointment.date}, Time: ${appointment.time}, Type: ${appointment.appointmentType}`}
          </li>
        ))}
      </ul>
    </div>
</>);
};

export default AppointmentSchedule;
