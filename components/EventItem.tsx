import React, { useState } from 'react'
import {
  format,
  parseISO,
} from 'date-fns'
import { EventBriteEvent } from '../typings'
import EventInfo from './EventInfo'


  interface EventProps {
    event: EventBriteEvent
  }

export default function EventItem({ event }: EventProps) {
    let startDateTime = parseISO(event?.startDate)
    let endDateTime = parseISO(event?.endDate)
  
    let [isOpen, setIsOpen] = useState(false)


    function closeModal() {
      setIsOpen(false)
    }
  
    function openModal() {
      setIsOpen(true)
    }


  return (
    <div>
    <li className="flex items-center w-full px-4 py-2 space-x-4 cursor-pointer group rounded-xl focus-within:bg-gray-100 hover:bg-gray-200 hover:dark:bg-gray-900" onClick={openModal}>
    <img
      src={event.image}
      alt=""
      className="flex-none w-10 h-10 rounded-full"
    />
    <div className="flex-auto">
      <p className="text-gray-900 dark:text-gray-300">{event.name}</p>
      <p className="mt-0.5">
        <time dateTime={event.startDate}>
          {format(startDateTime, 'h:mm a')}
        </time>{' '}
        -{' '}
        <time dateTime={event.endDate}>
          {format(endDateTime, 'h:mm a')}
        </time>
      </p>
    </div>
  </li>  

  <EventInfo key={event.name} event={event} isOpen={isOpen} closeModal={closeModal} />

 </div>
  )
}
