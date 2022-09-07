// import type { NextPage } from 'next'
// import Head from 'next/head'
// import Image from 'next/image'
import {  useEffect, useState } from 'react'
import Calendar from '../components/Calendar'
// import {  EventBriteEvent } from '../types'
import events from '../data/events.json'


const Home = () =>  {
  let data = events
  const [allEvents, setAllEvents] =  useState<any[] | []>([])

  useEffect(() => {
    setAllEvents(data)
  }, [data])

  return (
     <main className="pt-16">
       <div className="max-w-md px-4 mx-auto sm:px-7 md:max-w-4xl md:px-6">
        <Calendar events={allEvents} />
      </div>
    </main>
  )
}

export default Home



const getMeetings = async () => {
  if (process.env.NODE_ENV === 'development') {
    const f = await fetch('http://localhost:3000/api/meetups')
    const res = await f.json()
    return res
  } else {
    const f = await fetch('https://planner-app-virid.vercel.app/api/meetups')
    const res = await f.json()
    return res
  }
}


const getEvents = async () => {
  if (process.env.NODE_ENV === 'development') {
    const f = await fetch('http://localhost:3000/api/events')
    const res = await f.json()
    return res.events
  } else {
    const f = await fetch('https://planner-app-virid.vercel.app/api/events')
    const res = await f.json()
    return res.events
  }

}
export const getServerSideProps =  async () => {

  const meetings = await getMeetings()
  // console.log('meetings', meetings)
  const eventss = await getEvents()
  // console.log('events', events)

  // const [meetingss, eventss] = await Promise.all([
  //   fetch('http://localhost:3000/api/meetups').then((res) => res.json()),
  //   fetch('http://localhost:3000/api/events').then((res) => res.json()),
  // ])

  // console.log('process env', process.env.NODE_ENV)

  // console.log('meetingss', meetingss)
  // console.log('eventss', eventss)

  return {
    props: {
      meetings,
      eventss,
      // meetingss,
      // eventss
    }
  }
}
