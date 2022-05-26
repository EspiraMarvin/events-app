import type { NextPage } from 'next'
// import Head from 'next/head'
// import Image from 'next/image'
import Calendar from '../components/Calendar'
import AddTask from '../components/AddTask'

const Home: NextPage = () => {
  return (
    <div className="">
      <Calendar />
      <AddTask />
    </div>
  )
}

export default Home
