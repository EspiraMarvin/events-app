import { useState, useEffect } from "react";

function useTheme<T> () {
    const [theme, setTheme] = useState<T | string>()

    const getInitialTheme = () => {
        if (typeof window !== 'undefined' && window.localStorage) {
            const storedPrefs = window.localStorage.getItem('all-events-color-theme');
            if (typeof storedPrefs === 'string') {
                return storedPrefs;
            }
            else {
                console.log('no window defined')
                    localStorage.setItem('all-events-color-theme', 'light')
                    // setTheme('light')
                    // return 'light';
            }
    
            const userMedia = window.matchMedia('(prefers-color-scheme: dark)');
            if (userMedia.matches) {
                setTheme('dark')
                return 'dark';
            }
        } else {
        setTheme('light')

            return 'light';
        }

        // setTheme('light')
    };

    useEffect(() => {
        setTheme(getInitialTheme())
        // console.log('theme at useHOok', theme)
    }, [])

    console.log('theme at usehook final', theme)
    return { theme, setTheme }

}


export default useTheme



// export const ThemeProvider = ({ initialTheme, children}:themeProviderProps) => {
    
// })