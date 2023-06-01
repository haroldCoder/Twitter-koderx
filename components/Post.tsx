import React, {Dispatch, SetStateAction, useEffect, useState} from 'react'
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import axios from 'axios';
import { API_SERVER } from '@/config';
import Cookies from 'js-cookie';

interface post{
    id: number,
    name: string,
    content: string,
    setOpenMsg: any,
    setId: Dispatch<SetStateAction<number>>,
    openmsg: boolean
}

export default function Post({id, name, content, setOpenMsg, setId} : post) {
  const [comments, setComments] = useState<[]>([]);

  useEffect(() => {
    const timer = setInterval(() => {
      getComments();
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const getComments = async() =>{
    const res = (await axios.get(`${API_SERVER}apitwt/comments/${id}`)).data
    setComments(res);
  }

  return (
    <div key={id} className='border-2 mb-5 rounded-lg border-[#b3b3b3] p-4'>
        <div className='title mb-1 flex'>
            <h2 className='text-white font-bold'>{name}</h2>
            <h3 className='text-gray-500 ml-1'>@{name}</h3>
        </div>
        <h3 className='text-white'>{content}</h3>
        <div className='justify-between w-[10%] mt-5 text-white flex'>
            <button onClick={()=>{Cookies.get("name") != null ? setOpenMsg(true) : alert("you must register first"), setId(id)}} className='hover:text-blue-400'><ModeCommentOutlinedIcon /></button>
            <button className='hover:text-green-500 cursor-default'><FavoriteBorderOutlinedIcon /></button>
        </div>
        {
          comments.length > 0 ?
          comments.map((e:any)=>(
            <div key={e.Author} className='text-white mt-4 border-t-[1px] border-green-500 p-2'>
              <div className='flex justify-between w-[10vw]'>
                <h2 className='text-green-500'>@{e.Author}</h2>
                <h2 className='text-white'>{e.date}</h2>
              </div>
              <div className='mt-2 px-2'>
                <h2 className='text-gray-400'>{e.response}</h2>
              </div>
              
            </div>
          ))
          : null
        }
    </div>
  )
}
