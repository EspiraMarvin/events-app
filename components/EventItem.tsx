import React, { useState } from 'react'
// import Image from 'next/image'
import { Menu, Transition } from '@headlessui/react'
import { DotsVerticalIcon } from '@heroicons/react/outline'
import {
  format,
  parseISO,
} from 'date-fns'
import { Event } from '../types'
import EventInfo from './EventInfo'


  interface EventProps {
    event: Event
  }

export default function EventItem({ event }: EventProps) {
    let startDateTime = parseISO(event?.start?.local)
    let endDateTime = parseISO(event?.end?.local)
  
    let [isOpen, setIsOpen] = useState(false)


    function closeModal() {
      setIsOpen(false)
    }
  
    function openModal() {
      setIsOpen(true)
    }


  return (
    <div>
    <li className="flex items-center px-4 py-2 space-x-4 group rounded-xl focus-within:bg-gray-100 hover:bg-gray-100">
    <img
      src={event.logo.url}
      alt=""
      className="flex-none w-10 h-10 rounded-full"
    />
    <div className="flex-auto">
      <p className="text-gray-900">{event.name.text}</p>
      <p className="mt-0.5">
        <time dateTime={event.start.local}>
          {format(startDateTime, 'h:mm a')}
        </time>{' '}
        -{' '}
        <time dateTime={event.end.local}>
          {format(endDateTime, 'h:mm a')}
        </time>
      </p>
    </div>
    <Menu
      as="div"
      className="relative opacity-0 focus-within:opacity-100 group-hover:opacity-100"
    >
      <div>
        <Menu.Button className="-m-2 flex items-center rounded-full p-1.5 text-gray-500 hover:text-gray-600">
          <span className="sr-only">Open options</span>
          <DotsVerticalIcon className="w-6 h-6" aria-hidden="true" />
        </Menu.Button>
      </div>



    <Transition
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 origin-top-right bg-white rounded-md shadow-lg w-36 ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {() => (
                  <div className="block px-4 py-3 text-sm cursor-pointer" onClick={openModal}>
                    More Details
                  </div>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>


    </Menu>
  </li>  

  <EventInfo key={event.id} event={event} isOpen={isOpen} closeModal={closeModal} />

 </div>
  )
}
