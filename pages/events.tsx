import Calendar from "../components/Calendar"
import Header from "../components/Header"
import { useSelector } from "react-redux"
import { getAllEvents } from "../slices/eventSlice"

export default function Events() {
  const allEvents = useSelector(getAllEvents)

  return (
    <main className="h-screen bg-white pt-12 dark:bg-black md:h-screen">
      <Header />
      <div className="mx-auto max-w-md pt-6 sm:px-7 md:max-w-4xl md:px-6 md:pt-5">
        <Calendar events={allEvents} />
      </div>
    </main>
  )
}
