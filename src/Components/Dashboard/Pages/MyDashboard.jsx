import React from 'react'
import Mystatics from './Mystatics'
import Appointments from './Appointments'

export default function MyDashboard(props) {
  return (
    <>
    <div className={`LayoutDashboard ms-2 ${props.isSidebarOpen ? 'LayoundDashboard-Sidebar-Close' : ''}`}>
    <Mystatics isSidebarOpen={props.isSidebarOpen}/>
  <Appointments isSidebarOpen={props.isSidebarOpen}/>
    </div>

    </>
  )
}
