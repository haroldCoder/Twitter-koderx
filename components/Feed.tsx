import AutorenewIcon from '@mui/icons-material/Autorenew';
import React, {useEffect, useState} from 'react'
import TweetBox from './TweetBox';
import axios from 'axios';
import { API_SERVER } from '@/config';
import Post from './Post';
import Comments from './Comments';

function Feed() {

  const [twts, setTwts] = useState<any>([])
  const [openmsg, setOpenmsg] = useState<boolean>(false);
  const [id, setId] = useState<number>(0);
  const [twtId, setTwtId] = useState<[]>([]);

  useEffect(() => {
    getTweets();
    const timer = setInterval(() => {
      getTweets();
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if(openmsg){
      getTweetById();
    }
  }, [openmsg]);

  const getTweets = async() =>{
    const res = (await axios.get(`${API_SERVER}apitwt/tweets`)).data;
    setTwts(res);
  }

  const getTweetById = async() =>{
    const res = (await axios.get(`${API_SERVER}apitwt/tweets/${id}`)).data
    setTwtId(res);     
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
                <Post key={e.id} id={e.Id} name={e.name} content={e.content} openmsg={openmsg} setOpenMsg={setOpenmsg} setId={setId} />
            ))
            : null
        }
        {
          openmsg ?
          <div className='w-[40%] top-[15%] left-[25%] absolute'>
            {
              twtId.map((e:any)=>(
                <Comments key={e.id} name={e.name} id={id} content={e.content} setOpenMsg={setOpenmsg} />
              ))
            }
          </div>
          : null
        }
    </div>
  )
}

export default Feed