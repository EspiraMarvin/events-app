import { useState } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
import {
    add,
    eachDayOfInterval,
    endOfMonth,
    format,
    getDay,
    isEqual,
    isSameDay,
    isSameMonth,
    isToday,
    parse,
    parseISO,
    startOfToday,
  } from 'date-fns'
import { EventBriteEvent } from '../typings'
import EventsList from './EventsList'
import DatePicker from './DatePicker'

interface CalendarProps {
  events: EventBriteEvent[]
}

  function classNames(...classes:any) {
    return classes.filter(Boolean).join(' ')
  }

  
const Calendar = ({ events }: CalendarProps) => {
  
  const [showFullCalendar, setShowFullCalendar] = useState(true)

  const toggleShowCalendar = () => {
    setShowFullCalendar(prev => !prev) 
  }

 let today = startOfToday()
  let [selectedDay, setSelectedDay] = useState(today)
  let [currentMonth, setCurrentMonth] = useState(format(today, 'MMM-yyyy'))
  let firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date())


  let days = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  })

  function previousMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 })
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
  }

  function nextMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 })
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
  }


    return ( 
      <>
    <div className="flex flex-col-reverse px-4 bg-white md:grid md:grid-cols-2 md:divide-x md:divide-gray-200 md:dark:divide-gray-800 dark:bg-black ">

          <EventsList events={events} selectedDay={selectedDay} />
          <div className="md:pl-14">         
          <DatePicker showFullCalendar={showFullCalendar} toggleShowCalendar={toggleShowCalendar} />
          
          <div className={`${showFullCalendar && 'block'} ${!showFullCalendar && 'hidden'}`}>
              <div className="flex items-center pt-4 ">
                <h2 className="flex-auto font-semibold text-gray-900 dark:text-gray-300">
                  {format(firstDayCurrentMonth, 'MMMM yyyy')}
                </h2>
                <button
                  type="button"
                  onClick={previousMonth}
                  className="-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500 hover:dark:text-gray-50">
                  <span className="sr-only">Previous month</span>
                  <ChevronLeftIcon className="w-5 h-5" aria-hidden="true" />
                </button>
                <button
                  onClick={nextMonth}
                  type="button"
                  className="-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500 hover:dark:text-gray-50"
                >
                  <span className="sr-only">Next month</span>
                  <ChevronRightIcon className="w-5 h-5" aria-hidden="true" />
                </button>
              </div>

              <div className="grid grid-cols-7 mt-10 text-xs leading-6 text-center text-gray-500 dark:text-gray-400">
                <div>S</div>
                <div>M</div>
                <div>T</div>
                <div>W</div>
                <div>T</div>
                <div>F</div>
                <div>S</div>
              </div>
              <div className="grid grid-cols-7 mt-2 text-sm">
                {days.map((day, dayIdx) => (
                  <div
                    key={day.toString()}
                    className={classNames(
                      dayIdx === 0 && colStartClasses[getDay(day)],
                      'py-1.5'
                    )}
                  >
                    <button
                      type="button"
                      onClick={() => setSelectedDay(day)}
                      className={classNames(
                        isEqual(day, selectedDay) && 'text-white dark:text-black',
                        !isEqual(day, selectedDay) &&
                          isToday(day) &&
                          'text-red-500',
                        !isEqual(day, selectedDay) &&
                          !isToday(day) &&
                          isSameMonth(day, firstDayCurrentMonth) &&
                          'text-gray-900 dark:text-gray-100',
                        !isEqual(day, selectedDay) &&
                          !isToday(day) &&
                          !isSameMonth(day, firstDayCurrentMonth) &&
                          'text-gray-400 dark:text-gray-50',
                        isEqual(day, selectedDay) && isToday(day) && 'bg-red-500',
                        isEqual(day, selectedDay) &&
                          !isToday(day) &&
                          'bg-gray-900 dark:bg-gray-100',
                        !isEqual(day, selectedDay) && 'hover:bg-gray-200 hover:dark:bg-gray-900',
                        (isEqual(day, selectedDay) || isToday(day)) &&
                          'font-semibold',
                        'mx-auto flex h-8 w-8 items-center justify-center rounded-full'
                      )}
                    >
                      <time dateTime={format(day, 'yyyy-MM-dd')}>
                        {format(day, 'd')}
                      </time>
                    </button>
    
                    <div className="w-1 h-1 mx-auto mt-1">
                      {events.some((event: EventBriteEvent) =>{
                        return(
                          isSameDay(parseISO(event?.startDate), day)
                        )
                      }
                      ) && (
                        <div className="w-1 h-1 rounded-full bg-sky-500"></div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

          </div>
        </div> 
      </div>
      </>

     );
}


let colStartClasses = [
    '',
    'col-start-2',
    'col-start-3',
    'col-start-4',
    'col-start-5',
    'col-start-6',
    'col-start-7',
  ]

 
export default Calendar;
