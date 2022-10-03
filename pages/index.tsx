import Header from '../components/Header'
import Calendar from '../components/Calendar'
import { useSelector } from 'react-redux'
import { getAllEvents } from '../slices/eventSlice'
import type { RootState } from '../store'
// import { useRouter } from "next/router"
import Login from "../components/Login"

const Home = () =>  {
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn)
  const allEvents = useSelector(getAllEvents)

  return (
    <>
      {
       !isLoggedIn 
       ? 
      <Login />
       : 
       <>
        <main className="h-screen pt-12 bg-white md:h-screen dark:bg-black">
          <Header />
          <div className="max-w-md pt-6 mx-auto md:pt-5 sm:px-7 md:max-w-4xl md:px-6">
            <Calendar events={allEvents} />
          </div>
         </main>
       </>
      }
    </>
  )
}

export default Home



// const getMeetings = async () => {
//   if (process.env.NODE_ENV === 'development') {
//     const f = await fetch('http://localhost:3000/api/meetups')
//     const res = await f.json()
//     return res
//   } else {
//     const f = await fetch('https://planner-app-virid.vercel.app/api/meetups')
//     const res = await f.json()
//     return res
//   }
// }


// const getEvents = async () => {
//   if (process.env.NODE_ENV === 'development') {
//     const f = await fetch('http://localhost:3000/api/events')
//     const res = await f.json()
//     return res.events
//   } else {
//     const f = await fetch('https://planner-app-virid.vercel.app/api/events')
//     const res = await f.json()
//     return res.events
//   }
// }

export const getServerSideProps =  async () => {

  // const meetings = await getMeetings()
  // const eventss = await getEvents()
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
      // meetings,
      // eventss,
      // meetingss,
      // eventss
    }
  }
}
