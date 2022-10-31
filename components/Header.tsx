import React from 'react'
import ThemeSetting from './ThemeSetting'
import { LogoutIcon } from "@heroicons/react/outline"
import { getUserEmail, signOut } from "../slices/authSlice"

import { useDispatch, useSelector } from "react-redux"
import { useRouter } from "next/router"

export default function Header() {
  const router = useRouter()
  const dispatch = useDispatch()
  const userEmail = useSelector(getUserEmail)
  const logout = () => {
    dispatch(signOut())
    router.replace("/auth")
  }

  return (
    <div className="flex flex-col justify-center max-w-md py-1 mx-auto gap-y-4 md:flex-row md:justify-between md:py-8 lg:max-w-xl">
      <div className="col-span-2 px-2 text-xl font-bold text-center text-black -1 text-shadow-md dark:text-white md:mr-0 md:text-xl lg:text-2xl 2xl:text-3xl">
        Events Around You!
      </div>
      <div className="flex flex-row items-center justify-center gap-x-8 md:justify-end">
        <ThemeSetting />
        <div className="flex items-center justify-center w-6 text-black uppercase bg-gray-100 rounded-full cursor-pointer dark:bg-white dark:text-black">
          {userEmail.slice(0, 1)}
        </div>
        <div className="relative hover:opacity-80">
          <button className="dark:text-white">
            <LogoutIcon onClick={logout} className="h-7 w-7" />
          </button>
          <div className="absolute -z-50 rounded-md border-[1px] border-blue-200 p-0.5 text-xs opacity-100 dark:text-white">
            logout
          </div>
        </div>
      </div>
    </div>
  )
}