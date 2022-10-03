import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext';
import { MoonIcon, SunIcon } from '@heroicons/react/solid'


export default function ThemeSetting() {
  const { theme, setTheme } =  useContext<any | null>(ThemeContext)

  return (
    <div className="ml-3 dark:text-white hover:opacity-80">

        {theme === "dark" && <MoonIcon className='w-6 h-6 -mr-0.5 cursor-pointer' onClick={() => setTheme('light')} />  }
        
        {theme === "light" && <SunIcon className='w-6 h-6 cursor-pointer' onClick={() => setTheme('dark')}  /> }   

    </div>
  )
}

