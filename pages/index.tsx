import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import twitter from '../assets/twitter.png'
import Link from 'next/link'
import Sidebar from '../components/Sidebar'
import Feed from '@/components/Feed'
import Widgets from '@/components/Widgets'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='mx-auto max-w-6xl max-h-screen overflow-hidden '>
      <Head>
        <title>Twitter koderx</title>
        <link rel="icon" href='/twitter.svg' />
      </Head>
      <main className='grid grid-cols-9'>

          {/* Sidebar */}

          <Sidebar/>
          {/* Feed */}

          <Feed/>

          {/* Widgets */}
          <Widgets/>
      </main>
    </div>
  )
}
