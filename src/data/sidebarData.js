import React from 'react'
import {FiGrid} from 'react-icons/fi'
import school from '../assets/images/school.svg'
import group from '../assets/images/group.svg'
import teacher from '../assets/images/teacher.svg'
import classIcon from '../assets/images/class.svg'

export const sidebarData = [
    {
        title: 'Dashboard',
        path: '/dashboard',
        icon: <FiGrid/>
    },

    {
        title: 'Manage Schools',
        path: '/dashboard/manage-schools',
        icon: <img alt="hi" src={school}/> ,
    },

    {
        title: 'Manage Teacher',
        path: '/dashboard/manage-teacher',
        icon: <img alt="hi" src={teacher}/> ,
    },

    {
        title: 'Manage Rosters',
        path: '/dashboard/manage-rosters',
        icon: <img alt="hi" src={group}/> ,
    },
    {
        title: 'Manage Clases',
        path: '/dashboard/manage-classes',
        icon: <img alt="hi" src={classIcon}/> ,
    },
    
]
