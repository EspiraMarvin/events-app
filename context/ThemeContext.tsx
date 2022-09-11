import React,  { createContext, useEffect } from 'react';
import useTheme from '../hooks/useTheme';

interface contextProviderProps {
    setTheme: any
    theme: any
}



export const ThemeContext = createContext<contextProviderProps | undefined>(undefined);


export const ThemeProvider = ({children}: any) => {
    console.log('get Iintial theme at the cometes', useTheme())
    
    const getInitialTheme = useTheme().theme
    console.log('get Iintial theme at the cometes', getInitialTheme)

    const [theme, setTheme] = React.useState(getInitialTheme);


    const rawSetTheme = (rawTheme: any) => {
        // console.log('THEME AT THEME CONTEXT', theme)
        
        const root = window.document.documentElement;
        const isDark = rawTheme === 'dark';


        root.classList.remove(isDark ? 'light' : 'dark');
        root.classList.add(rawTheme);
        localStorage.setItem('all-events-color-theme', rawTheme);
    };

    if (theme) {
        rawSetTheme(theme);
    }

    useEffect(() => {
        rawSetTheme(theme);
    }, [theme]);


    return (
        <ThemeContext.Provider value={{theme, setTheme}}>{children}</ThemeContext.Provider>
    )
}



