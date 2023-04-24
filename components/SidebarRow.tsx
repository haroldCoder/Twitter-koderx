import React, {SVGProps} from 'react'
import {SvgIconComponent} from '@mui/icons-material'

interface Props{
    Icon: SvgIconComponent,
    title: string
}

function SidebarRow({Icon, title}: Props) {
  return (
    <div className='group flex items-center space-x-2 max-w-fit py-3 cursor-pointer px-4 rounded-full transition-all duration-200 hover:bg-[#77777740]'>
        <Icon style={{color: 'white'}} className='w-6 h-6'/>
        <p className='text-white hidden md:inline-flex text-base font-light lg:text-xl group-hover:text-green-500'>{title}</p> 
    </div>
  )
}

export default SidebarRow