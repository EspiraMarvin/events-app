import React,  { createContext, useEffect } from 'react';
// import useTheme from '../hooks/useTheme';

interface contextProviderProps {
    theme: string | undefined
    setTheme: any
}

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

export const ThemeContext = createContext<contextProviderProps | null>(null);


export const ThemeProvider = ({initialTheme, children}: any) => {

    const [theme, setTheme] = React.useState<any>(getInitialTheme);

    const rawSetTheme = (rawTheme: any) => {
        const root = window.document.documentElement;
        const isDark = rawTheme === 'dark';

        root.classList.remove(isDark ? 'light' : 'dark');
        root.classList.add(rawTheme);

        localStorage.setItem('all-events-color-theme', rawTheme);
    };

    if (initialTheme) {
        rawSetTheme(theme);
    }

    useEffect(() => {
        rawSetTheme(theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>{children}</ThemeContext.Provider>
    )
}



