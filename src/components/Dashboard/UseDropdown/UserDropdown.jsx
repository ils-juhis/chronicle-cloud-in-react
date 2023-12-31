import React, { useEffect, useRef, useState } from 'react'
import {FiChevronDown} from 'react-icons/fi'
import {LuUsers} from 'react-icons/lu'
import {AiOutlineGlobal} from 'react-icons/ai'
import {BiHelpCircle} from 'react-icons/bi'
import {PiSignOutBold} from 'react-icons/pi'
import profile from '../../../assets/images/profile.jpg'
import './UserDropdown.scss'
import { useDispatch, useSelector } from 'react-redux'
import { Avatar } from '@mui/material'
import { logOut } from '../../../store/actions'
import { useNavigate } from 'react-router-dom'

import {app} from '../../../firebaseConfig'
import { getAuth, signOut } from "firebase/auth";
const auth = getAuth(app);

function UserDropdown() {
    const userInfo = useSelector((state)=> state.reducers.userInfo);
    const [state, setState] = useState(false)
    const dropRef = useRef(null);
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const outsideClickHandler = (e)=>{
        if(dropRef.current && state && !dropRef.current.contains(e.target)){
            setState(false)
        }else if(!state && dropRef.current.contains(e.target)){
            setState(true)
        }else if(state && dropRef.current.contains(e.target)){
            setState(false)
        }
    }

    useEffect(()=>{
        document.addEventListener("click", outsideClickHandler);
        return () => {
            document.removeEventListener("click", outsideClickHandler);
          };
    })

  return (
    <>
      <div id="user-dropdown" className="my-auto" aria-expanded="false">
        <div className="d-flex text-white align-items-center justify-content-between" ref={dropRef}>
          <div className="d-flex align-items-center" >
            <Avatar alt="Remy Sharp" src={profile} sx={{ width: 27, height: 27 }} />
              <span id="user-name" className="d-none d-sm-block"> {userInfo ? (userInfo.cc_user_first_name + userInfo.cc_user_last_name) : "Vincent Williams"} &nbsp; </span>
          </div>
          <span className="ms-2 my-auto"><FiChevronDown/></span>
        </div>
        <div id="user-options" style={{display: state ? "inline": "none"}}>
          <a href="#"><LuUsers/> &nbsp; View Profile</a>
          <a href="#"><AiOutlineGlobal/> &nbsp; Visit Website</a>
          <a href="#"><BiHelpCircle/> &nbsp; Help Center</a>
          <a href="#" onClick={()=>{signOut(auth); dispatch(logOut())}} ><PiSignOutBold/> &nbsp; Sign Out</a>
        </div>
      </div>
    </>
  )
}

export default UserDropdown