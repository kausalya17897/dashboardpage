import React from 'react'
import {motion} from 'framer-motion';
import {AiFillDashboard,AiFillProject} from 'react-icons/ai';
import {FcDepartment} from 'react-icons/fc';
import {SiClion} from 'react-icons/si';
import {BiUser} from 'react-icons/bi'
import {MdOutlineInsights,MdKeyboardArrowRight} from 'react-icons/md'
import { NavLink } from 'react-router-dom';
import {IoIosArrowBack} from 'react-icons/io';
import logo from '../logo.png';
import { useState } from 'react';


const routes=[
    {
        path:"/",
        name:"Dashboard",
        icon:<AiFillDashboard/>
    },
    {
        path:"/Department",
        name:"Departments",
        icon:<FcDepartment/>
    },
    {
        path:"/Clients",
        name:"Clients",
        icon:<SiClion/>
    },
    {
        path:"/Projects",
        name:"Projects",
        icon:<AiFillProject/>
    },
    {   path:"/Consumers",
        name:"Consumers",
        icon:<BiUser/>
    },
    {   path:"/Insights",
        name:"Insights",
        icon:<MdOutlineInsights/>
    }

]
export default function Sidebar({children}) {
    const[isOpen,setIsOpen]=useState(true)
    const toggle=()=>setIsOpen(!isOpen);
    return (
    <div className='main-container'>
        
        <motion.div animate={{width:isOpen?"200px":"42px"}} className="sidebar">
        <div className="top-section">
         {isOpen?<div>
            <img src={logo} className='logo' alt="logo"/>
        </div>:""}
        <div className="arrowback">
            {isOpen?
            <IoIosArrowBack onClick={toggle}/>:
            <MdKeyboardArrowRight onClick={toggle}/>
}
        </div>
        </div>
        
            <section className='routes'>
                {routes.map((route)=>(
                <NavLink to={route.path} key={route.name} className="link">
                    <div className='icon'>{route.icon}</div>
                    <div className='link_text'>{route.name}</div>
                </NavLink>
                
                ))}
            </section>
        </motion.div>
       
        <main>{children}</main>
    </div>
  )
}
