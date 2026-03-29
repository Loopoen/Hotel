import React from 'react'
import DashBoardIcon from "../../assets/dashboard-monitor.svg"
import AddIcon from "../../assets/add.svg"
import ListIcon from "../../assets/rectangle-list.svg"
import { NavLink } from 'react-router-dom'
const SideBar = () => {
    const sidebarLinks = [

        {name : "DashBoard", path: "/owner", icon: DashBoardIcon},
        {name : "Add Room", path: "/owner/add-room", icon: AddIcon },
        {name : "List Room", path: "/owner", icon: ListIcon},

    ]
  return (
    <div className='md:w-64 w-16 border-r h-full text-base border-gray-300 pt-4 flex flex-col transition-all duration-300'>
        {
            sidebarLinks.map((item, index)=>(
                <NavLink to={item.path} key={index} end="/owner" className={({isActive})=>`flex items-center py-3 px-4 `} >

                </NavLink>
            ))
        }       
    </div>
  )
}

export default SideBar
