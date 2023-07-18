import React, { useEffect, useRef, useState } from 'react'
import './Dashboard.scss'
import Sidebar from './Sidebar/Sidebar'
import Header from './Header/Header'
import { Outlet } from 'react-router-dom'

function Dashboard() {
  const [state, setState] = useState(false)
  const navRef = useRef(null);
  const hambugerRef = useRef(null);

  const outsideClickHandler = (e)=>{
    console.log(e.target)
    if(navRef.current && state && !navRef.current.contains(e.target) && !hambugerRef.current.contains(e.target)){
        setState(false)
    }
  }
  const toggleBtn =()=>{
    if(state){
      setState(false)
    }else{
      setState(true)
    }
  }

  useEffect(()=>{
      if(window.innerWidth <=992){
        document.addEventListener("click", outsideClickHandler);
        return () => {
            document.removeEventListener("click", outsideClickHandler);
          };
      }else{
        setState(true)
      }
  },[state])
  return (
    <>
      <div className="dashboard-container ">
        <div className="blue-block"></div>

        <div className="main">

          <div className="h-100">
            <Sidebar state={state} toggleBtn={toggleBtn} navRef={navRef}/>
          </div>
          <div className="">
            <Header toggleBtn={toggleBtn} hambugerRef={hambugerRef}/>
            <div className='p-3 p-lg-4'>
              <Outlet/>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Dashboard