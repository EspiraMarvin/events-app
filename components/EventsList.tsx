import React from 'react'
import { EventBriteEvent } from '../typings'
import {
    format,
    isSameDay,
    parseISO,
  } from 'date-fns'
import EventItem from './EventItem'


interface EventsListProps {
  events: EventBriteEvent[]
  selectedDay: Date
}

// interface EventsListProps {
//     events: MeetUpEvent[]
//     selectedDay: Date
// }

export default function EventsList({ events, selectedDay }: EventsListProps) {

    let selectedDayEvents = events.filter((event: EventBriteEvent) =>{
        let eventStartDateTime = event?.startDate
        return isSameDay(parseISO(eventStartDateTime), selectedDay)
    }
  )


  return (
    <section className="mt-12 md:mt-0 md:pr-10">
    <h2 className="font-semibold text-gray-900">
      Schedule for{' '}
      <time dateTime={format(selectedDay, 'yyyy-MM-dd')}>
        {format(selectedDay, 'MMM dd, yyy')}
      </time>
    </h2>
    <ol className="mt-4 space-y-1 text-sm leading-6 text-gray-500">
      {selectedDayEvents.length > 0 ? (
        selectedDayEvents.map((event: EventBriteEvent) => (
          <EventItem key={event.name} event={event} />
        ))
      ) : (
        <p className="p-3 pl-4 text-[16px] text-gray-400 dark:text-white">No Events for today.</p>
      )}
    </ol>
  </section>
  )
}
