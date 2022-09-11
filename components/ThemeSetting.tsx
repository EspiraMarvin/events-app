import React, { useContext, useEffect, useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import { ThemeContext } from '../context/ThemeContext';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'

const themes = [
    {
      name: 'Dark Theme',
      icon: <ChevronLeftIcon className='w-6 h-6' />
    },
    {
      name: 'Light Theme',
      icon: <ChevronRightIcon className='w-2 h-6'  />
    }
  ]

export default function ThemeSetting() {
    // const { theme, setTheme } = useContext(ThemeContext);
      const isTheme = useContext(ThemeContext)?.theme
      const setTheme = useContext(ThemeContext)?.setTheme


    const [selected, setSelected] = useState(isTheme)
    console.log('theme at theme settings', isTheme)

    console.log('selecteed at theme settings', selected)
    
    useEffect(() => {
        if (isTheme === "dark")
          setSelected(themes[0])
        if (isTheme === "light")  
          setSelected(themes[1])
      }, [isTheme])
      
    // console.log('theme at theme settings', theme)
    // console.log('selected at theme settings', selected)


  return (
    <>
    <div className="hidden w-full px-2 text-lg divide-slate-400 dark:divide-slate-600 md:mx-auto lg:max-w-3xl ">
        <div className="flex px-1.5 pt-3 text-black transition-all bg-white dark:bg-black dark:text-white">
        <div className="w-full">
          <RadioGroup value={selected} onChange={setSelected}>
            <RadioGroup.Label className="sr-only">Themes</RadioGroup.Label>
            <div className="space-y-3">
              {themes.map((plan) => (
                <RadioGroup.Option
                  key={plan.name}
                  value={plan}
                  onClick={() => {
                    if (plan.name === "Dark Theme")
                      setTheme('dark')
                    if (plan.name === "Light Theme") 
                      setTheme('light')
                   }
                  }
                  className={({ active, checked }) =>
                    `${
                      active
                        ? 'ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300'
                        : ''
                    }
                    ${
                      checked ? 'bg-sky-900 bg-opacity-75 text-white' : 'ring-1 border-black dark:border-white'
                    }
                      relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none `
                  }
                >
                  {({  checked }) => (
                    <>
                      <div
                         className="flex items-center justify-between w-full"
                      >
                        <div className="flex items-center">
                          <div className="text-sm">
                            <RadioGroup.Label>
                              {plan.name} {plan.icon}
                            </RadioGroup.Label>
                          </div>
                        </div>
                        {checked && (
                          <div className="text-wwhite shrink-0">
                            <CheckIcon className="w-6 h-6" />
                          </div>
                        )}
                      </div>
                    </>
                  )}
                </RadioGroup.Option>
              ))}
            </div>
          </RadioGroup>
        </div>
      </div>
    </div>
  </>
  )
}


function CheckIcon(props: any) {
    return (
      <svg viewBox="0 0 24 24" fill="none" {...props}>
        <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
        <path
          d="M7 13l3 3 7-7"
          stroke="#fff"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }