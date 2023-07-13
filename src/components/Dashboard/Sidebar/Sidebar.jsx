import React from 'react'
import './Sidebar.scss'
import cloud from '../../../assets/images/cloud.svg'
import {RxCross2} from 'react-icons/rx';

function Sidebar() {
  return (
    <div className='sidebar-container'>
        <div id="close-btn" className=" d-lg-none text-end pe-3 pt-3">
            <RxCross2/>
        </div>
        <div className="text-center pt-4 ">
            <img width="65%" className="py-2" src={cloud} alt=""/>
            <hr/>
        </div>
    </div>
  )
}

export default Sidebar