// eslint-disable-next-line no-unused-vars
import React from 'react'
import './FormLayout.scss'
import logo from '../../../assets/images/Logo.svg'
import { Outlet } from 'react-router-dom';

const FormLayout = () => {
  return <>
 
    <div className="lrf-main">
      <div className="container-fluid h-100">
        <div className="row m-0 mt-5 mt-lg-0 h-100 align-items-lg-center">
          <div className="logo col-lg-6 text-center  mt-lg-0 mt-auto ">
              <img className='my-5 my-lg-0' src={logo} alt=""/>
          </div>
          
          <div className="col-lg-6">
              <Outlet/>
          </div>
        </div>
      </div>
    </div>
  </>;
}

export default FormLayout
