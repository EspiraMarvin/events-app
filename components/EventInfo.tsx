import React from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { EventBriteEvent } from '../typings'
import toast, { Toaster } from 'react-hot-toast';
interface EventInfoProps {
  event: EventBriteEvent
  isOpen: boolean
  closeModal: () => void
}


export default function EventInfo({ event, isOpen, closeModal }: EventInfoProps) {
	
const today = new Date();
const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
const dateTime = date+' '+time;

/* 
  Update with your own Client Id and Api key 
*/
var CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID
var API_KEY = process.env.NEXT_PUBLIC_API_KEY
var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"]
var SCOPES = "https://www.googleapis.com/auth/calendar.events"


const authenticate =  () => {
  // @ts-ignore: next line
  let gapi:any = window.gapi

  // console.log('window gapi', window.gapi)

   gapi.load('client:auth2', () => {
    console.log('loaded client')

    gapi.client.init({
      apiKey: API_KEY,
      clientId: CLIENT_ID,
      discoveryDocs: DISCOVERY_DOCS,
      scope: SCOPES,
    })
  

    gapi.client.load('calendar', 'v3', () => {console.log('calendar m')})

    gapi.auth2.getAuthInstance().signIn()
    .then(() => {
      
      var event = {
        'summary': 'Awesome Event!',
        'location': '800 Howard St., San Francisco, CA 94103',
        'description': 'Really great refreshments',
        'start': {
          'dateTime': '2020-06-28T09:00:00-07:00',
          'timeZone': 'America/Los_Angeles'
        },
        'end': {
          'dateTime': '2020-06-28T17:00:00-07:00',
          'timeZone': 'America/Los_Angeles'
        },
        'recurrence': [
          'RRULE:FREQ=DAILY;COUNT=2'
        ],
        'attendees': [
          {'email': 'lpage@example.com'},
          {'email': 'sbrin@example.com'}
        ],
        'reminders': {
          'useDefault': false,
          'overrides': [
            {'method': 'email', 'minutes': 24 * 60},
            {'method': 'popup', 'minutes': 10}
          ]
        }
      }

      var request = gapi.client.calendar.events.insert({
        'calendarId': 'primary',
        'resource': event,
      })

      request.execute((event: any) => {
        console.log(event)
        window.open(event.htmlLink)
      })
      

      /*
          Uncomment the following block to get events
      */
      /*
      // get events
      gapi.client.calendar.events.list({
        'calendarId': 'primary',
        'timeMin': (new Date()).toISOString(),
        'showDeleted': false,
        'singleEvents': true,
        'maxResults': 10,
        'orderBy': 'startTime'
      }).then(response => {
        const events = response.result.items
        console.log('EVENTS: ', events)
      })
      */
  

    })
  })
}

const notify = () => {

  //sign in
  authenticate()


  // toast('Here is your toast.');
  toast.custom((t) => (
    <div
      className={`${
        t.visible ? 'animate-enter' : 'animate-leave'
      } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
    >
      <div className="flex-1 w-0 p-4">
        <div className="flex items-start">
          <div className="flex-shrink-0 pt-0.5">
            <img
              className="w-10 h-10 rounded-full"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=6GHAjsWpt9&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
              alt=""
            />
          </div>
          <div className="flex-1 ml-3">
            <p className="text-sm font-medium text-gray-900">
              {/* Emilia Gates */}
              Coming soon
            </p>
            <p className="mt-1 text-sm text-gray-500">
              Sure! {dateTime} works great!
            </p>
          </div>
        </div>
      </div>
      <div className="flex border-l border-gray-200">
        <button
          onClick={() => toast.dismiss(t.id)}
          className="flex items-center justify-center w-full p-4 text-sm font-medium text-indigo-600 border border-transparent rounded-none rounded-r-lg hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Close
        </button>
      </div>
    </div>
  ))
  closeModal()
}
    
  return (
    <div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-full p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-xl p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                  <Dialog.Title
                    as="div"
                    className="flex items-start text-lg font-medium leading-6 text-gray-900 row"
                  >
                    <img
                      src={event.image}
                      alt=""
                      className="w-16 h-16 mr-3 rounded-full"
                    />
                    <span className='p-2'>
                      {event.name}
                    </span>

                  </Dialog.Title>
                  <div className="mt-2 space-y-2 md:p-2 ">
                    <div className="px-4 py-2 text-sm">

                    <p className="pb-3 text-sm text-gray-700">
                      {event.description}
                    </p>


                    <div className="grid pt-3 text-gray-500 md:flex md:justify-between">
                      
                      <div className="">
                        <p>{event.location}</p>
                        <p>{event.street}</p>
                        <p>{event.postalCode}</p>
                        <p>{event.location__1},{event.region}</p>
                      </div>

                      <div className="mt-2 mr-2 md:mt-0 lg:mr-3">
                        <p> Start Date: <span className="pl-0">{event.startDate}</span></p>
                        <p> End Date: <span className="pl-[7px]">{event.endDate}</span></p>
                      </div>

                    </div>
                    
                    </div>
                  </div>


                  <div className="flex mt-4 justify-evenly">
                    <button
                      type="button"
                      className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none"
                      onClick={closeModal}
                    >
                      Close
                    </button>

                    <button
                      type="button"
                      className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={notify}
                    >
                      Add to Google Calendar
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      <Toaster  position="bottom-center" />
    </div>
   
  )
}
