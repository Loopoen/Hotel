import React from 'react'
import DashBoardIcon from "../../assets/dashboard-monitor.svg"
import AddIcon from "../../assets/add.svg"
import ListIcon from "../../assets/rectangle-list.svg"
import { NavLink } from 'react-router-dom'
const SideBar = () => {
    const sidebarLinks = [

        {name : "DashBoard", path: "/owner", icon: DashBoardIcon},
        {name : "Add Room", path: "/owner/add-room", icon: AddIcon },
        {name : "List Room", path: "/owner/list-room", icon: ListIcon},

    ]
  return (
    <div className='md:w-64 w-16 border-r h-full text-base border-gray-300 pt-4 flex flex-col transition-all duration-300'>
        {
            sidebarLinks.map((item, index)=>(
                <NavLink to={item.path} key={index} end="/owner" className={({isActive})=>`flex items-center py-3 px-4 md:px-8 gap-3 ${isActive ? "border-r-4 md:border-r-[6px] bg-blue-600/20 border-blue-600/10 text-blue-600":"hover:bg-gray-200 border-white text-gray-800" }`} >
                    <img src={item.icon} className='w-6 h-6'/>
                    <p className='md:block hidden text-center'>{item.name}</p>
                </NavLink>
            ))
        }       
    </div>
  )
}

export default SideBar
