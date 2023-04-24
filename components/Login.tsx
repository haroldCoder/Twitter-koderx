import React, { useState } from 'react'
import { CloseOutlined } from '@mui/icons-material'
import twitter from '../assets/twitter.png'
import Image from 'next/image'

interface Props{
    mess: string,
    set: any
}
function Login({mess, set}: Props) {

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  console.log(username, password);
  
  return (
    <div className='h-[70vh] w-full bg-[#00000000] border-2 border-white backdrop-blur-[2px] rounded-md py-1 px-3'>
        <div className='header flex justify-between w-[50%] items-center text-white'>
            <button onClick={()=>set('')} className='hover:bg-[#ffffff28] p-1 rounded-full'>
              <CloseOutlined />  
            </button>
            
            <Image src={twitter} alt='twtter' />
        </div>
        <div className='mt-3 max-w-[50%] mx-auto h-[100%]'>
            <h2 className='text-3xl text-white font-bold'>{mess}</h2>
            <form action="" className='mt-6 flex flex-col space-y-4 h-[100%]'>
                <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder='phone, email or name' className='shadow appearance-none bg-transparent focus:border-green-600 border-2 focus:text-white border-gray-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" className='shadow appearance-none bg-transparent focus:border-green-600 border-2 focus:text-white border-gray-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
                <button disabled={!password || !username} className={`bg-green-600 rounded-full px-4 py-2 ${!password || !username ? 'opacity-50' : null } relative top-[40%] text-white`}>{mess}</button>
            </form>
        </div>
    </div>
  )
}

export default Login