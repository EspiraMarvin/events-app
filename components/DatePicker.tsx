import React from 'react'
import { CalendarIcon } from "@heroicons/react/outline"

interface DatePickerProps {
    showFullCalendar: boolean
    toggleShowCalendar: () => void
}

export default function DatePicker({ showFullCalendar, toggleShowCalendar }: DatePickerProps) {
  return (
    <div className="flex md:hidden">
        <button
            className='flex items-center justify-center w-full max-w-xs mx-auto text-gray-700 border-2 shadow-xl  dark:text-gray-300 h-14 gap-x-2'
            onClick={toggleShowCalendar}
        >
            <CalendarIcon className='w-6 h-6 ' />
            {showFullCalendar ? 'Hide Calendar' : 'Show Calendar'}
        </button>
    </div>
  )
}
