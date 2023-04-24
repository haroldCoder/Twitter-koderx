import AutorenewIcon from '@mui/icons-material/Autorenew';
import React from 'react'
import TweetBox from './TweetBox';

function Feed() {
  return (
    <div className='col-span-7 ml-3 lg:col-span-5'>
        <div className='text-white flex items-center justify-between'>
            <h1 className='p-5 pb-0 text-xl font-bold'>Home</h1>
            <AutorenewIcon className='cursor-pointer h-8 mt-5 mr-3 w-8 text-green-600 transition-all duration-500 ease-out hover:rotate-180 active:scale-125'/>
        </div>
        <TweetBox/>
    </div>
  )
}

export default Feed