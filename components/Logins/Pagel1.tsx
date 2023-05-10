import React, {useState} from 'react'
import { CloseOutlined } from '@mui/icons-material'
import twitter from '../../assets/twitter.png'
import Image from 'next/image'

interface Props{
  msg: string,
  set: any,
  setUsername: any,
  username: string,
  setIndex: any,
  index: number
}

function Pagel1({msg, set, setUsername, username, index, setIndex} : Props) {
  return (
    <>
          <div className='header flex justify-between w-[50%] items-center text-white'>
              <button onClick={()=>set(0)} className='hover:bg-[#ffffff28] p-1 rounded-full'>
                <CloseOutlined />
              </button>

              <Image src={twitter} alt='twtter' />
          </div>
          <div className='mt-3 max-w-[50%] mx-auto h-[100%]'>
              <h2 className='text-3xl text-white font-bold'>{msg}</h2>
              <form onSubmit={()=>setIndex(index+1)} className='mt-10 flex flex-col space-y-36 h-[100%]'>
                  <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder='phone, email or name' className='shadow appearance-none bg-transparent focus:border-green-600 border-2 focus:text-white border-gray-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
                  <button disabled={!username} className={`bg-green-600 rounded-full px-4 py-2 ${!username ? 'opacity-50' : null } relative top-[40%] text-white`}>Following</button>
              </form>
          </div>
       </>
  )
}

export default Pagel1