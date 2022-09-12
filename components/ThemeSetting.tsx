import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext';
import { MoonIcon, SunIcon } from '@heroicons/react/solid'


export default function ThemeSetting() {
  const { theme, setTheme } =  useContext<any | null>(ThemeContext)

  return (
    <div className="flex justify-end pr-4 cursor-pointer md:pr-0 dark:text-white">

        {theme === "dark" && <MoonIcon className='w-6 h-6 -mr-0.5' onClick={() => setTheme('light')} />  }
        
        {theme === "light" && <SunIcon className='w-6 h-6' onClick={() => setTheme('dark')}  /> }   

    </div>
  )
}

