import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
// import type { RootState } from '../store'
// Define a type for the slice state
 interface stateData {
    user: {
        name: string,
        id: string
    }
    isLoggedIn: boolean
 }

// Define the initial state using that type
const initialState: stateData = {
    user: { name: "", id: ""},
    isLoggedIn: false
}
    
export const userSlice = createSlice({
  name: 'user',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    signInUser: (state, action: PayloadAction<any>) => {
        state.isLoggedIn = !state.isLoggedIn
        state.user.name = action.payload.name
        state.user.id = action.payload.id
    },
    signOut: (state) => {
        state.user.name = ""
        state.user.id = ""
        state.isLoggedIn = !state.isLoggedIn
    }
  }
})

export const { signInUser, signOut } = userSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const getAlls = (state: RootState) => state.user.user


// export const getEventsCount = (state: RootState) => state.event.events.length

export default userSlice.reducer