import React, { createContext, useEffect, ReactNode } from "react"

interface ThemeContextType {
  theme: string | undefined
  rawSetTheme: (theme: string) => void
}

const THEME_NAME = "all-events-color-theme"

const getInitialTheme = () => {
  if (typeof window !== "undefined" && window.localStorage) {
    const storedPrefs = window.localStorage.getItem(THEME_NAME)
    if (typeof storedPrefs === "string") {
      return storedPrefs
    }

    const userMedia = window.matchMedia("(prefers-color-scheme: dark)")
    if (userMedia.matches) {
      return "dark"
    }
  }
  return "light"
}

export const ThemeContext = createContext<ThemeContextType>(
  {} as ThemeContextType
)
// export const ThemeContext = createContext<contextProviderProps | null>(null)

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = React.useState<any>(getInitialTheme)

  const rawSetTheme = (rawTheme: string) => {
    if (typeof window !== "undefined" && window.localStorage) {
      const root = window.document.documentElement
      const isDark = rawTheme === "dark"
      root.classList.remove(isDark ? "light" : "dark")
      root.classList.add(rawTheme)
      localStorage.setItem(THEME_NAME, rawTheme)
      setTheme(rawTheme)
    }
  }

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      rawSetTheme(theme)
    }
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, rawSetTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
