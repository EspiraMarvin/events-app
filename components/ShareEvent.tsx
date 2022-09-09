import React from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import {  ShareIcon } from '@heroicons/react/solid'



export default function ShareEvent({ shareEvent }:any) {
  return (
    <div className="">
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
             onClick={shareEvent}
              className={`
                ${open ? '' : ''}
                inline-flex justify-center -ml-3 px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none
                `}
            >
             Share <ShareIcon className="w-8 h-6" />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute z-50 w-screen max-w-xs px-4 -mt-3 transform -translate-x-1/2 border-0 -top-10 left-1/2 sm:px-0 ">
                <div className="flex items-center justify-center mx-auto overflow-hidden bg-white rounded-lg shadow-lg">
                  <div className="relative grid gap-8 ml-5 bg-transparent lg:grid-cols-2">

                  <div className="flex flex-wrap ">
                    <a  href="https://facebook.com/sharer/sharer.php?u=" className="inline-flex items-center p-3 mb-1 mr-1 text-white transition duration-200 bg-blue-600 border-2 border-blue-600 rounded-lg ease hover:bg-blue-700 hover:border-blue-700" rel="noopener"  aria-label="Share on Facebook">
                        <svg aria-hidden="true" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4">
                        <title>Facebook</title>
                        <path d="M379 22v75h-44c-36 0-42 17-42 41v54h84l-12 85h-72v217h-88V277h-72v-85h72v-62c0-72 45-112 109-112 31 0 58 3 65 4z">
                        </path>
                        </svg>
                    </a>
                    <a href="https://twitter.com/intent/tweet?url=&amp;text="  className="inline-flex items-center p-3 mb-1 mr-1 text-white transition duration-200 bg-blue-600 border-2 border-blue-600 rounded-lg ease hover:bg-blue-700 hover:border-blue-700" rel="noopener" aria-label="Share on Twitter">
                        <svg aria-hidden="true" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4">
                        <title>Twitter</title>
                        <path d="m459 152 1 13c0 139-106 299-299 299-59 0-115-17-161-47a217 217 0 0 0 156-44c-47-1-85-31-98-72l19 1c10 0 19-1 28-3-48-10-84-52-84-103v-2c14 8 30 13 47 14A105 105 0 0 1 36 67c51 64 129 106 216 110-2-8-2-16-2-24a105 105 0 0 1 181-72c24-4 47-13 67-25-8 24-25 45-46 58 21-3 41-8 60-17-14 21-32 40-53 55z">
                        </path>
                        </svg>
                    </a>
                    <a href="https://www.linkedin.com/shareArticle?mini=true&amp;url=&amp;title=&amp;summary=&amp;source=" className="inline-flex items-center p-3 mb-1 mr-1 text-white transition duration-200 bg-blue-600 border-2 border-blue-600 rounded-lg ease hover:bg-blue-700 hover:border-blue-700" rel="noopener" aria-label="Share on Linkedin">
                        <svg aria-hidden="true" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4">
                        <title>Linkedin</title>
                        <path d="M136 183v283H42V183h94zm6-88c1 27-20 49-53 49-32 0-52-22-52-49 0-28 21-49 53-49s52 21 52 49zm333 208v163h-94V314c0-38-13-64-47-64-26 0-42 18-49 35-2 6-3 14-3 23v158h-94V183h94v41c12-20 34-48 85-48 62 0 108 41 108 127z">
                        </path>
                        </svg>
                    </a>
                </div>
             </div>
            </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  )
}
