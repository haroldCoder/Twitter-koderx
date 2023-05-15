import React, {SVGProps} from 'react'
import {SvgIconComponent} from '@mui/icons-material'
import Cookies from 'js-cookie'

interface Props{
    Icon: SvgIconComponent,
    title: string
}

function SidebarRow({Icon, title}: Props) {
  return (
    <div onClick={title == "Sign Out" ? ()=>{
      Cookies.remove("name");
      Cookies.remove("password");
      window.location.reload();
    } : ()=>{}} className={`group flex items-center space-x-2 max-w-fit py-3 ${title == 'Sign Out' ? 'hover:bg-green-900 cursor-pointer': 'cursor-default'} px-4 rounded-full transition-all duration-200 hover:bg-[#77777740]`}>
        <Icon style={{color: 'white'}} className='w-6 h-6'/>
        <p className='text-white hidden md:inline-flex text-base font-light lg:text-xl group-hover:text-green-500'>{title}</p> 
    </div>
  )
}

export default SidebarRow