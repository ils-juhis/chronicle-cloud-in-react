import React from 'react'
import './Sidebar.scss'
import cloud from '../../../assets/images/cloud.svg'
import {RxCross2} from 'react-icons/rx';
import { NavLink } from 'react-router-dom'
import { sidebarData } from "../../../data/sidebarData";

function Sidebar({state, toggleBtn, navRef}) {

    const linkData = sidebarData;
    
  return (
    <div className='sidebar-container' ref={navRef}>
      <aside style={{left: state ? "0px": "-280px"}}>
        <div className=" d-lg-none text-end pe-3 pt-3" >
              <RxCross2 onClick={toggleBtn}/>
          </div>
          <div className="text-center pt-lg-4 px-3">
              <img width="60%" className="py-2" src={cloud} alt=""/>
              <hr/>
          </div>

          <div id="link-container" onClick={toggleBtn}>
            {
                linkData.map((item)=>{
                    return(
                        <NavLink end to={item.path} className={({ isActive }) => isActive ? "link-box active" : "link-box"} key={item.title}>
                            <div className="aside-link"> 
                                <span className="aside-icon">{item.icon}</span> 
                                <span>{item.title}</span>
                            </div>
                        </NavLink>
                    )
                })
            }
        </div>
      </aside>
    </div>
  )
}

export default Sidebar