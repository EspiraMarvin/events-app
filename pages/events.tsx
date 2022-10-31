import Calendar from "../components/Calendar"
import Header from "../components/Header"
import { useSelector } from "react-redux"
import { getAllEvents } from "../slices/eventSlice"

export default function events() {
  const allEvents = useSelector(getAllEvents)

  return (
    <main className="h-screen pt-12 bg-white dark:bg-black md:h-screen">
      <Header />
      <div className="max-w-md pt-6 mx-auto sm:px-7 md:max-w-4xl md:px-6 md:pt-5">
        <Calendar events={allEvents} />
      </div>
    </main>
  )
}
