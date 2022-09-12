import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'
// import type { RootState } from '../store'


interface stateData {
    theme: string
 }

const initialState: stateData = {
    theme: ''
}
    
export const eventSlice = createSlice({
  name: 'theme',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // getInitialTheme: (state: string) => {
    //     if (typeof window !== 'undefined' && window.localStorage) {
    //         const storedPrefs = window.localStorage.getItem('color-theme');
    //         if (typeof storedPrefs === 'string') {
    //             return storedPrefs;
    //         }
    
    //         const userMedia = window.matchMedia('(prefers-color-scheme: dark)');
    //         if (userMedia.matches) {
    //             return {state, ./state.theme = 'dark';}
    //         }
    //     }
    
    //     return state.theme = 'light';
    // }
  },
})

// export const { getInitialTheme } = eventSlice.actions

export default eventSlice.reducer