import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import SideBar from '../components/SideBar'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Twitter 2.0</title>
       
      </Head>

      <main className="">
        <SideBar />
      </main>

  
    </div>
  )
}

export default Home
