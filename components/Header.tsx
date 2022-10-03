import React from 'react'
import ThemeSetting from './ThemeSetting'
import { LogoutIcon } from '@heroicons/react/outline'
import { signOut } from '../slices/userSlice'
import { useDispatch } from 'react-redux'

export default function Header() {
    const dispatch =  useDispatch()
    const logout = () => {
        dispatch(signOut())
    }

  return (
    <div className="flex justify-center max-w-md py-1 mx-auto md:justify-between lg:max-w-xl md:py-8 ">
    <div className="col-span-2 px-2 text-xl font-bold text-center text-black md:text-xl lg:text-2xl 2xl:text-3xl md:mr-0 -1 dark:text-white text-shadow-md">
      Events Around You!
    </div>
    <div className="flex flex-row items-center justify-end gap-x-3">
        <ThemeSetting />
        <div className="relative pl-3 hover:opacity-80">
            <button className=" dark:text-white">
                <LogoutIcon onClick={logout} className="w-7 h-7" />
            </button>
            <div className="absolute p-0.5 text-xs border-[1px] border-blue-200 rounded-md opacity-100 -z-50 dark:text-white">logout</div>
        </div>
    </div>
  </div>
  )
}