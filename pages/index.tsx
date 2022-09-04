import type { NextPage } from 'next'
// import Head from 'next/head'
// import Image from 'next/image'
import Calendar from '../components/Calendar'

const Home: NextPage = () => {
  return (
     <main className="pt-16">
       <div className="max-w-md px-4 mx-auto sm:px-7 md:max-w-4xl md:px-6">
        <Calendar />
      </div>
    </main>
  )
}

export default Home
