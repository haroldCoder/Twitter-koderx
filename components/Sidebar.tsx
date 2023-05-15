import React from 'react'
import Image from 'next/image'
import twitter from '../assets/twitter.png'
import SidebarRow from './SidebarRow'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import TagIcon from '@mui/icons-material/Tag';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import ClearAllOutlinedIcon from '@mui/icons-material/ClearAllOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Cookies from 'js-cookie';

function Sidebar() {
  return (
    <div className='col-span-2 flex flex-col items-center px-4 md:items-start'>
        <Image src={twitter} className='m-3 w-10 h-10' alt='twitter-clone' />
        <SidebarRow Icon={HomeOutlinedIcon} title='Home' />
        <SidebarRow Icon={TagIcon} title='Explore'/>
        <SidebarRow Icon={NotificationsNoneOutlinedIcon} title='Notifications' />
        <SidebarRow Icon={BookmarkBorderOutlinedIcon} title='Bookmark'  />
        <SidebarRow Icon={ClearAllOutlinedIcon} title='Lists' />
        <SidebarRow Icon={PersonOutlineOutlinedIcon} title={!Cookies.get("name") ? 'Sign in' : 'Sign Out'} />
        <SidebarRow Icon={MoreHorizIcon} title='More' />
    </div>
  )
}

export default Sidebar