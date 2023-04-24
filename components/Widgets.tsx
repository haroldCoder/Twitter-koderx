import { Search } from '@mui/icons-material'
import React from 'react'
import { TwitterTimelineEmbed } from 'react-twitter-embed'

function Widgets() {
  return (
    <div className='mt-2 ml-3 px-4 col-span-3 hidden lg:inline'>
        <div className='flex items-center mb-2 bg-[#77777730] space-x-2 p-3 rounded-full'>
            <Search className='w-6 h-6 text-gray-400'/>
            <input type="text" placeholder='Search in twitter' style={{cursor: "text"}} className='bg-transparent flex-1 outline-none text-white' />
        </div>
        <TwitterTimelineEmbed
        sourceType="profile"
        screenName="saurabhnemade"
        options={{height: 400}}
        />
    </div>
  )
}

export default Widgets