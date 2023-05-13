import Head from 'next/head'
import Sidebar from '@/components/Sidebar'
import Feed from '@/components/Feed'
import Widgets from '@/components/Widgets'
import { useState } from 'react'
import Login from '@/components/Login'
import '@fontsource/inter'
import Cookies from 'js-cookie'

export default function Home() {
  const [login, setLogin] = useState<number>(0);
  const [showLogin, setShowLogin] = useState(true);
  
  return (
    <div>
      <Head>
        <title>Twitter koderx</title>
        <link rel="icon" href='/twitter.svg' />
      </Head>
      <main className='grid grid-cols-10 ml-[10%] mr-[10%] max-w-[100%] max-h-screen'>

          {/* Sidebar */}

          <Sidebar/>
          {/* Feed */}

          <Feed/>

          {/* Widgets */}
          <Widgets/>
      </main>
      {
        showLogin || Cookies.get("name") == "" ?
          <>
            <div className='fixed top-[90vh] p-2 w-[100%] flex justify-center bg-green-600'>
              <div className='flex justify-between w-[79%] pl-56'>
                <div>
                  <h2 className='text-2xl text-white font-semibold'>Don`t miss what`s happening</h2>
                  <p className='text-white text-lg'>Twitter users are the first to know.</p>
                </div>
                <div className='flex py-3 space-x-3'>
                  <button onClick={()=>setLogin(1)} className='rounded-full border-[1px] px-5 max-h-fit hover:bg-green-500 border-white text-white'>Log in</button>
                  <button onClick={()=>setLogin(2)} className='rounded-full px-5 bg-white font-bold text-black'>Sign up</button>
                </div>
              </div>
            </div>
          </>
          :
          null
      }
      {
        login == 1 || login == 2 ? 
        <div className='absolute w-[35%] top-[10%] left-[30%]'>
          <Login mess={login} showl={setShowLogin} set={setLogin} />
        </div>
        : null
      }
    </div>
  )
}
