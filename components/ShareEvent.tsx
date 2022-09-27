import React from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import {  ShareIcon } from '@heroicons/react/solid'
import { SocialIcon } from 'react-social-icons'
import toast from 'react-hot-toast';


export default function ShareEvent({ shareEvent }:any) {


  const shareUrls = [
    { 
      id: 1,
      url: 'https://facebook.com/sharer/sharer.php?u='
    },
    { 
      id: 2,
      url: 'https://twitter.com/intent/tweet?url=&amp;text='
    },
    { 
      id: 3,
      url: 'https://www.linkedin.com/shareArticle?mini=true&amp;url=&amp;title=&amp;summary=&amp;source='
    }
  ]
  

  const shareInfo = (event: React.MouseEvent) => {
    event.preventDefault()
    toast('Coming soon.');
    return 
  }


  return (
    <div className="relative">
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
              <Popover.Panel className="absolute z-40 w-screen max-w-xs -mt-4 transform -translate-x-1/2 border-0 -top-10 left-3/4 sm:px-0 ">
                <div className="flex items-center justify-center mx-auto overflow-hidden rounded-lg">
                  <div className="relative grid bg-transparent lg:grid-cols-2">

                  <div className="flex flex-row gap-x-2">
                    { shareUrls.map((social:any) => (
                      <SocialIcon 
                          onClick={shareInfo}
                          key={social.id}
                          url={social.url}
                          fgColor="blue"
                          bgColor="white"
                          className=""
                          target="_blank"
                      />
                    ))}
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
