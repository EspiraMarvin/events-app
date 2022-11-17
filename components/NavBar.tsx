import Link from "next/link"
import Image from "next/image"
import React, { useEffect, useState } from "react"
import { LogoutIcon } from "@heroicons/react/outline"
import ThemeSetting from "./ThemeSetting"
import { signOut } from "next-auth/react"
import { getUserSession } from "../slices/authSlice"
import { useSelector } from "react-redux"

interface NavBarProps {
  user: any
}
export default function NavBar({}) {
  const [navbar, setNavbar] = useState(false)
  const user = useSelector(getUserSession)

  function logout() {
    signOut()
  }

  return (
    <nav className="fixed top-0 z-10 w-full px-2 py-1 shadow bgNav bg-white/10 bg-gradient-to-r from-indigo-500 via-green-500/10 to-indigo-500 md:px-5">
      <div className="justify-between px-4 mx-auto md:flex md:items-center md:px-8 lg:max-w-7xl">
        <div>
          <div className="flex items-center justify-between py-2 md:py-2">
            <Link href="/">
              <Image
                src="/images/logo.png"
                className="cursor-pointer rounded-2xl"
                height={50}
                width={50}
                alt="logo"
              />
            </Link>

            <div className="md:hidden">
              <button
                className="p-3 rounded-md outline-none focus:border focus:border-gray-400"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-black"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`mt-8 flex-1 justify-self-center pb-3 md:mt-0 md:block md:pb-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              {/* <li className="text-black hover:text-indigo-200 dark:text-white">
                <a href="javascript:void(0)">Home</a>
              </li>

              <li className="text-black hover:text-indigo-200 dark:text-white">
                <a href="javascript:void(0)">About US</a>
              </li>
              <li className="text-black hover:text-indigo-200 dark:text-white">
                <a href="javascript:void(0)">Contact US</a>
              </li> */}
              {/* <li className="hidden w-full py-2 pl-1 text-black hover:text-indigo-200 dark:text-white md:dark:text-black">
                <Link href={"/profile"}>Profile</Link>
              </li> */}
            </ul>

            <div className="flex flex-col mt-4 space-y-5 items md:hidden">
              <div className="flex items-center justify-center w-full px-4 py-4 text-center text-white bg-gray-600 rounded-md shadow cursor-pointer gap-x-4 hover:bg-gray-800">
                Toggle Icon Theme <ThemeSetting />
              </div>
              <div
                className="inline-block w-full px-4 py-4 text-center text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
                onClick={logout}
              >
                Sign Out
              </div>
            </div>
          </div>
        </div>
        <div className="hidden space-x-2 md:flex md:items-center md:gap-x-8">
          <div className="flex items-center p-1 rounded-full cursor-pointer hover:bg-gray-100 hover:dark:bg-gray-800">
            <ThemeSetting />
          </div>
          <div className="flex items-center justify-center p-1 uppercase bg-indigo-200 border-2 border-indigo-500 rounded-full cursor-pointer ">
            {user?.image ? (
              <Image
                src={user.image}
                className="rounded-full"
                height={36}
                width={36}
                alt="image"
              />
            ) : (
              user.email && (
                <div className="flex items-center justify-center text-xl rounded-full h-9 w-9">
                  {user?.email}
                </div>
              )
            )}
          </div>
          <div
            className="flex items-center p-1 rounded-full cursor-pointer hover:bg-gray-100 hover:dark:bg-gray-800"
            onClick={logout}
          >
            <LogoutIcon
              onClick={logout}
              className="h-7 w-7 dark:text-white md:h-9 md:w-9"
            />
          </div>
        </div>
      </div>
    </nav>
  )
}

