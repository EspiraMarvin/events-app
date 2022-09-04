// import type { NextPage } from 'next'
// import Head from 'next/head'
// import Image from 'next/image'
import Calendar from '../components/Calendar'
import { MeetingType } from '../types'

interface MeetingsProps {
  meetings : MeetingType
}
const Home = ({ meetings }:MeetingsProps) =>  {
  return (
     <main className="pt-16">
       <div className="max-w-md px-4 mx-auto sm:px-7 md:max-w-4xl md:px-6">
        <Calendar meetings={meetings} />
      </div>
    </main>
  )
}

export default Home

const getMeetings = async () => {
  console.log('get Meetings run')
  const f = await fetch('http://localhost:3000/api/meetups')
  const res = await f.json()
  return res
}

const getEvents = async () => {
  console.log('get Meetings run')
  const f = await fetch('http://localhost:3000/api/events')
  const res = await f.json()
  return res
}
export const getServerSideProps =  async () => {
  const meetings = await getMeetings()
  // console.log('meetings', meetings)
  const events = await getEvents()
  // console.log('events', events)

  const [meetingss, eventss] = await Promise.all([
    fetch('http://localhost:3000/api/meetups').then((res) => res.json()),
    fetch('http://localhost:3000/api/events').then((res) => res.json()),
  ])

  // console.log('meetingss', meetingss)
  // console.log('eventss', eventss)

  return {
    props: {
      meetings,
      events,
      meetingss,
      eventss
    }
  }
}
