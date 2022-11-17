import React, { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"
import { MoonIcon, SunIcon } from "@heroicons/react/solid"

export default function ThemeSetting() {
  const { theme, rawSetTheme } = useContext<any | null>(ThemeContext)

  return (
    <div className="hover:opacity-80 dark:text-white">
      {theme === "dark" && (
        <div
          className="flex items-center justify-center gap-x-3"
          onClick={() => rawSetTheme("light")}
        >
          <MoonIcon className="cursor-pointer h-7 w-7 md:h-9 md:w-9" />
        </div>
      )}

      {theme === "light" && (
        <div
          className="flex justify-center tems-center gap-x-3"
          onClick={() => rawSetTheme("dark")}
        >
          {/* <div className="md:hidden"> Toggle Theme</div> */}
          <SunIcon className="cursor-pointer h-7 w-7 md:h-9 md:w-9" />
        </div>
      )}
    </div>
  )
}
