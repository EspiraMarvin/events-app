import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "../store"

interface stateData {
  user: {
    name: string
    id: string
    credential: ""
  }
  session: {
    name: string
    email: string
    image?: string
    roles?: []
  }
  isLoggedIn: boolean
  registerStatus: ""
  registerError: ""
  loading: boolean
}

const initialState: stateData = {
  user: { name: "", id: "", credential: "" },
  session: { name: "", email: "", image: "", roles: [] },
  isLoggedIn: false,
  registerStatus: "",
  registerError: "",
  loading: false,
}
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredential: (state, action: PayloadAction<any>) => {
      const accessToken = action.payload
      state.session.name = action.payload.name
      state.session.email = action.payload.email
      state.session.image = action.payload.image
      state.session.roles = action.payload.roles
      state.isLoggedIn = true
    },
    signOut: (state) => {
      state.session.name = ""
      state.session.email = ""
      state.session.image = ""
      state.session.roles = []

      state.user.name = ""
      state.user.id = ""
      state.isLoggedIn = !state.isLoggedIn
      state.user.credential = ""
    },
  },
  extraReducers: {},
})

export const { setCredential, signOut } = authSlice.actions

export const getIsLoggedIn = (state: RootState) => state.auth.isLoggedIn

export const getUserEmail = (state: RootState) => state.auth.session.email

export const getUserSession = (state: RootState) => state.auth.session


export default authSlice.reducer
