import React from 'react'
import Mystatics from './Mystatics'
import Appointments from './Appointments'

export default function MyDashboard() {
  return (
    <>
    <div className='ms-2' style={{width: '80%',marginTop: '12vh'}}>
    <Mystatics/>
  <Appointments/>
    </div>

    </>
  )
}
