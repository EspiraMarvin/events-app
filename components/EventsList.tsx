import React, { useEffect, useState, useMemo } from 'react'
import { EventBriteEvent } from '../typings'
import {
    format,
    isSameDay,
    parseISO,
  } from 'date-fns'

import EventItem from './EventItem'
import useDebounce from '../hooks/useDebounce'
interface EventsListProps {
  events: EventBriteEvent[]
  selectedDay: Date
}

export default function EventsList({ events, selectedDay }: EventsListProps) {
  const [search, setSearch] = useState('')
  const [showSearch, setShowSearch] = useState(false)

  
  const debouncedSearch = useDebounce(search, 500)

  let selectedDayEvents = events.filter((event: EventBriteEvent) =>{
      let eventStartDateTime = event?.startDate
        return isSameDay(parseISO(eventStartDateTime), selectedDay)
    }
  )
  
  let memoizedEvents = useMemo(() => selectedDayEvents, [selectedDayEvents])
  

  const searchEvent = (search: string) => (
    memoizedEvents.map((event: EventBriteEvent)=> {
      if (event.name.toLowerCase().includes(search.toLowerCase())){
        // console.log('event found', event.name)
        return (
        <div className="mt-2 text-sm">
          <EventItem key={event.name} event={event} /> 
        </div>
        )
      } else {
        // console.log('event not found')
        return false
        // return <p className="p-3 pl-4 text-[16px] text-gray-400 dark:text-white">No Events Found.</p>
      }
    })
  )

  useEffect(() => {
    if (debouncedSearch) {
      searchEvent(search)
    }
    
    if (showSearch !== true) {
      setSearch('')
    }
    //eslint-disable-next-line
  }, [debouncedSearch, search, showSearch, ])

  useEffect(() => {
     setShowSearch(false)
  }, [selectedDay])

  return (
    <section className="mt-12 md:mt-0 md:pr-10">
      <div className="flex items-center gap-x-4">
        <h2 className={`font-semibold text-gray-900 ${showSearch && '-mt-2'}`}>
          Schedule for{' '}
          <time dateTime={format(selectedDay, 'yyyy-MM-dd')}>
            {format(selectedDay, 'MMM dd, yyy')}
          </time>
        </h2>
        {
          !showSearch &&
          <svg
          onClick={() => setShowSearch(true)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" 
          className={`mt-1 w-6 h-6 cursor-pointer ${showSearch && 'text-blue-600'}`}
         >
           <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clipRule="evenodd" />
         </svg>
        }
        {
          showSearch &&
          <svg onClick={() => setShowSearch(false)}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-8 -mt-1 cursor-pointer">
            <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
          </svg>
        }
        
      </div>

      { showSearch &&
      <div className='relative flex items-center'>
        <input 
          type="text" 
          placeholder='Search event by location' 
          className='w-full pl-2 mx-auto mt-2 border-black rounded-md h-9 ring-2 ring-offset-blue-800'
          value={search}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
        />
        { search.length > 0 &&
          <svg
            onClick={() => setSearch('')} 
            className="absolute w-6 h-8 mt-2 text-gray-500 right-2 "
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
         }
       </div>
       }

      {/* search events component */}
      { search.length > 1 && searchEvent(search) }
        {/* <p className="p-3 pl-4 text-[16px] text-gray-400 dark:text-white">No Events Found.</p>} */}
      {/* { !searchEvent(search) &&  <p className="p-3 pl-4 text-[16px] text-gray-400 dark:text-white">No Events Found.</p>} */}


       {
        search.length === 0 &&
            <ol className="mt-3 mb-4 space-y-1 text-sm leading-6 text-gray-500">
            {memoizedEvents.length > 0 ? (
              memoizedEvents.map((event: EventBriteEvent) => (
               <EventItem key={event.name} event={event} /> 
      
              ))
            ) : (
              <p className="p-3 pl-4 text-[16px] text-gray-400 dark:text-white">No Events for  {format(selectedDay, 'MMM dd, yyy')}.</p>
            )}

            </ol>
       }
  </section>
  )
}
