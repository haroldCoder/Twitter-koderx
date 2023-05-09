import AutorenewIcon from '@mui/icons-material/Autorenew';
import React, {useEffect, useMemo, useState} from 'react'
import TweetBox from './TweetBox';
import axios from 'axios';

function Feed() {

  const [twts, setTwts] = useState<any>([])

  useEffect(()=>{
    getTweets();
  }, [])

  const getTweets = async() =>{
    const res = (await axios.get("https://twitter-koderx-production.up.railway.app/apitwt/tweets")).data;
    setTwts(res);
}
  return (
    <div className='col-span-7 ml-3 lg:col-span-5'>
        <div className='text-white flex items-center justify-between'>
            <h1 className='p-5 pb-0 text-xl font-bold'>Home</h1>
            <AutorenewIcon className='cursor-pointer h-8 mt-5 mr-3 w-8 text-green-600 transition-all duration-500 ease-out hover:rotate-180 active:scale-125'/>
        </div>
        <TweetBox/>
        {
            twts != "" ?
            twts.map((e: any) =>(
                <div key={e.id} className='text-white'>
                    {e.content}
                </div>
            ))
            : null
        }
    </div>
  )
}

export default Feed