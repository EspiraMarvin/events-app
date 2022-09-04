import React from 'react'
import {
    format,
    isSameDay,
    parseISO,
  } from 'date-fns'
import Meeting from './Meeting'

  
export default function MeetingsList({ selectedDay , meetings }: any) {
    let selectedDayMeetings = meetings.filter((meeting: any) =>
    isSameDay(parseISO(meeting.startDatetime), selectedDay)
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
      {selectedDayMeetings.length > 0 ? (
        selectedDayMeetings.map((meeting: any) => (
          <Meeting meeting={meeting} key={meeting.id} />
        ))
      ) : (
        <p className="pt-2 pl-4">No meetings for today.</p>
      )}
    </ol>
  </section>
  )
}
