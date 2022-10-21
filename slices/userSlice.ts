import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
// import type { RootState } from '../store'
// Define a type for the slice state
 interface stateData {
    user: {
        name: string,
        id: string,
        credential: ''
    }
    isLoggedIn: boolean
 }

// Define the initial state using that type
const initialState: stateData = {
    user: { name: "", id: "", credential: ""},
    isLoggedIn: true
}
    
export const userSlice = createSlice({
  name: 'user',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    signInUser: (state, action: PayloadAction<any>) => {
      console.log('action payload', action.payload)
        state.user.credential = action.payload.credential
        state.isLoggedIn = !state.isLoggedIn
        state.user.name = action.payload.name
        state.user.id = action.payload.id
    },
    signOut: (state) => {
        state.user.name = ""
        state.user.id = ""
        state.isLoggedIn = !state.isLoggedIn
        state.user.credential = ""
    }
  }
})

export const { signInUser, signOut } = userSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const getAlls = (state: RootState) => state.user.user


// export const getUsersCount = (state: RootState) => state.user.users.length

export default userSlice.reducer