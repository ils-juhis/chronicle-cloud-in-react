import React from 'react'
import bell from '../../../assets/images/bell.svg'
import {FaBars, FaPlus} from 'react-icons/fa'
import './Header.scss'
import UserDropdown from '../UseDropdown/UserDropdown'

function Header({toggleBtn, hambugerRef}) {
  return (
    <div className="header p-4 d-flex justify-content-between">
      <span id="toggle-btn"  ref={hambugerRef}
        className="d-lg-none text-light me-4" aria-expanded="false" 
        onClick={()=> {toggleBtn()}}
        >
        <FaBars/>
      </span>
      <div className="d-flex justify-content-end justify-content-md-between w-100" >
        <div className="text-light d-none d-md-inline-block">
          Dashboard
        </div>
        <div className="d-flex align-items-center" >
          <div className="add-school text-uppercase"> <FaPlus/> &nbsp; Add New School</div>
          <div className="bell-icon mx-3 position-relative"> 
            <span className="rounded-circle">1</span>
            <img src={bell} alt=""/>
          </div>
          <UserDropdown/>
        </div>
      </div>
    </div>
  )
}

export default Header