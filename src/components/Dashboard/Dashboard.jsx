import React from 'react'
import './Dashboard.scss'
import Sidebar from './Sidebar/Sidebar'
import Header from './Header/Header'
import { Outlet } from 'react-router-dom'

function Dashboard() {
  return (
    <>
      <div className="dashboard-container ">
        <div className="blue-block"></div>

        <div className="main">

          <div className="h-100 p-3">
            <Sidebar/>
          </div>
          <div className="">
            <Header/>
            <div>
              <Outlet/>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Dashboard