import { useSelector } from "react-redux"
import { getIsLoggedIn } from "../slices/authSlice"
import { useEffect } from "react"
import { useRouter } from "next/router"

const Home = () => {
  const isLoggedIn = useSelector(getIsLoggedIn)
  const router = useRouter()

  useEffect(() => {
    !isLoggedIn ? router.push("/auth") : router.push("/events")
  }, [isLoggedIn, router])
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

export const getServerSideProps = async () => {
  // const events = await fetch("http://localhost:5000/api/events").then((res) =>
  // res.json()
  // )
  // console.log('events', events)

  // const [meetingss, eventss] = await Promise.all([
  //   fetch('http://localhost:3000/api/meetups').then((res) => res.json()),
  //   fetch('http://localhost:3000/api/events').then((res) => res.json()),
  // ])

  // console.log('process env', process.env.NODE_ENV)
  // console.log('eventss', eventss)

  return {
    props: {
      // events,
    },
  }
}
