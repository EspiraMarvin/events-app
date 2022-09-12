import Calendar from '../components/Calendar'
import Script from 'next/script'
import { useSelector } from 'react-redux'
import { getAllEvents } from '../slices/eventSlice'
import useTheme from '../hooks/useTheme'
import { ThemeContext, ThemeProvider } from '../context/ThemeContext'
import { useContext } from 'react'

const Home = () =>  {
  const allEvents = useSelector(getAllEvents)
  // const themeContext = useContext()
  // const isTheme = useContext(ThemeContext)
  // console.log('isTheme context at index.ts', isTheme?.theme)

  // const theme = useTheme()
  // console.log('theme at index.ts', theme.theme)

  return (
    // <>
     <ThemeProvider>
      <main className="pt-12 bg-white dark:bg-black">
        <div className="max-w-md px-4 mx-auto sm:px-7 md:max-w-4xl md:px-6">
          <Calendar events={allEvents} />
        </div>
      </main>
    <Script src="https://apis.google.com/js/api.js" strategy="lazyOnload" />
     </ThemeProvider>
  //  </>

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
