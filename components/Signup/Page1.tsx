import React from 'react'
import { CloseOutlined } from '@mui/icons-material'
import twitter from '/assets/twitter.png'
import Image from 'next/image'


function Page1({set, msg, setIndex, index}: any) {
  return (
    <>
        <div className='header flex justify-between w-[50%] items-center text-white'>
            <button onClick={()=>set('')} className='hover:bg-[#ffffff28] p-1 rounded-full'>
              <CloseOutlined />  
            </button>
            
            <Image src={twitter} alt='twtter' />
        </div>
        <div className='max-w-[70%] mt-8 mx-auto h-[100%]'>
          <h2 className='text-3xl text-white font-bold'>{msg}</h2>
          <div className='mt-20'>
            <button className='bg-white w-[100%] text-black font-bold rounded-full p-2' onClick={()=>setIndex(index+1)}>Create account</button>
            <p className='mt-3 text-sm text-white'>
              By signing up, you agree to the <span className='text-green-600'>Terms of Service</span> and <span className='text-green-600'>Privacy Policy</span>, including the <span>Cookie Policy</span>.
            </p>
          </div>
          <p className='mt-10 text-white'>you already have an account? <span className='text-green-600'>Login</span></p>
        </div>
    </>
  )
}

export default Page1