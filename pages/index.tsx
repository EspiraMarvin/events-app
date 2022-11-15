import Head from "next/head"
import Link from "next/link"
import { useSession, getSession } from "next-auth/react"
import Calendar from "../components/Calendar"
import { useSelector, useDispatch } from "react-redux"
import { getAllEvents } from "../slices/eventSlice"
import { setCredential } from "../slices/authSlice"
import { useFetchEventsQuery } from "../slices/events-api-slice"

import NavBar from "../components/NavBar"

const Home = () => {
  const { data: session } = useSession()

  return (
    <div className="">
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {session ? User({ session }) : Guest()}
    </div>
  )
}

export default Home

// Guest
function Guest() {
  return (
    <main className="container py-20 mx-auto text-center">
      <h3 className="text-4xl font-bold">Guest Homepage</h3>
      <div className="flex justify-center">
        <Link href={"/login"}>
          <a className="px-10 py-1 mt-5 bg-indigo-500 rounded-sm text-gray-50">
            Sign In
          </a>
        </Link>
      </div>
    </main>
  )
}

// Authorize User
function User({ session, users }: any) {
  const dispatch = useDispatch()
  dispatch(setCredential(session?.user))
  // const { data = [], isFetching } = useFetchEventsQuery()

  const allEvents = useSelector(getAllEvents)

  console.log("allEvents", allEvents)

  return (
    <main className="">
      <main className="h-screen bg-white dark:bg-black md:h-screen">
        <NavBar />
        <div className="px-2 text-xl font-bold text-center text-black pt-28 text-shadow-md dark:text-white md:mr-0 md:pb-10 md:pt-36 md:text-xl lg:text-2xl 2xl:text-3xl">
          Events Around You!!!
        </div>
        <div className="max-w-md py-6 mx-auto sm:px-7 md:max-w-4xl md:px-2 md:py-10">
          <Calendar events={allEvents} />
        </div>
      </main>
    </main>
  )
}

export async function getServerSideProps({ req }: any) {
  const session = await getSession({ req })

  if (!session) return { redirect: { destination: "/login", permanent: false } }

  return {
    props: { session },
  }
}
