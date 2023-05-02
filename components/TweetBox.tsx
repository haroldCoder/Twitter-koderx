import React, { useMemo, useState } from 'react'
import Image from 'next/image'
import coder from '../assets/coder.png'
import { SearchRounded } from '@mui/icons-material'
import MoodIcon from '@mui/icons-material/Mood';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import Cookies from 'js-cookie';
import axios from 'axios';

function TweetBox() {
    const [input, setInput] = useState<string>('')
    const [perf, setPerf] = useState<any>();
    const perfilSrc : any = new Blob([new Uint8Array(perf)], { type: "image/png" })
    

    const getPerf = async() =>{
        await axios.get("http://localhost:5000/apitwt/users")
        .then(res=>{
            res.data.map((e: any)=>{
                if(e.name == Cookies.get("name")){
                    setPerf(e.perf.data)
                }
            })
        })
    }

    useMemo(()=>{
        getPerf()
    }, perf)

  return (
    <div className='flex space-x-2 p-5'>
        <Image src={URL.createObjectURL(perfilSrc)} width='100' height={100} className='w-14 mt-4 object-cover h-14 rounded-full' alt='perfil' />
        <div className='flex flex-1 pl-2 items-center'>
            <form action="" className='flex flex-col flex-1'>
                <input type="text" value={input} onChange={(e)=>{setInput(e.target.value)}} style={{cursor: "text"}} className='outline-none bg-transparent h-24 w-full text-xl placeholder:text-xl text-white' placeholder="What's Happening?" />
                <div className='flex items-center'>
                    <div className='text-green-400 flex-1 my-3 space-x-3 flex-wrap'>
                        {/* icons */}
                        <ImageOutlinedIcon className='h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150'/>
                        <SearchRounded className='h-5 w-5' />
                        <MoodIcon className='h-5 w-5' />
                        <CalendarTodayOutlinedIcon className='h-5 w-5'/>
                        <RoomOutlinedIcon className='h-5 w-5'/>
                    </div>
                    <button disabled={!input} className={`disabled:opacity-30 bg-green-600 rounded-full py-2 px-5 text-white font-bold`}>Tweet</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default TweetBox