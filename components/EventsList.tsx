import React from 'react'
import { Event } from '../types'
import {
    format,
    isSameDay,
    parseISO,
  } from 'date-fns'

interface EventsListProps {
    events: Event[]
    selectedDay: Date
}

export default function EventsList({ events, selectedDay }: EventsListProps) {
    console.log('events', events)
    console.log('selectedDay', selectedDay)

    let selectedDayEvents = events.filter((event: Event) =>{
        let eventStartDateTime = event?.start?.local
        // let eventTimezone = event?.start?.timezone

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
        selectedDayEvents.map((event: Event) => (
        //   <Meeting meeting={meeting} key={meeting.id} />
        <p key={event.id}>event</p>
        ))
      ) : (
        <p className="pt-2 pl-4">No meetings for today.</p>
      )}
    </ol>
  </section>
  )
}
