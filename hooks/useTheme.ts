import { useState, useEffect } from "react";

function useTheme<T> () {
    const [theme, setTheme] = useState<T | string>()

    const getInitialTheme = () => {
        if (typeof window !== 'undefined' && window.localStorage) {
            const storedPrefs = window.localStorage.getItem('all-events-color-theme');
            if (typeof storedPrefs === 'string') {
                return storedPrefs;
            }
    
            const userMedia = window.matchMedia('(prefers-color-scheme: dark)');
            if (userMedia.matches) {
                return 'dark';
            }
        }
        return 'light';
    };

    useEffect(() => {
        setTheme(getInitialTheme())
    }, [])

    return { theme, setTheme }

}


export default useTheme
