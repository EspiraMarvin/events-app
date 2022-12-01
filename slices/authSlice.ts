import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "../store/store"

interface stateData {
  firebaseUser: {
    uid: string
    email: string
    displayName: string | null
    avatar: string | null
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
  firebaseUser: { uid: "", email: "", displayName: "", avatar: "" },
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
      state.session.name = action.payload?.name
      state.session.email = action.payload?.email
      state.session.image = action.payload?.image
      state.session.roles = action.payload?.roles
      state.isLoggedIn = true
    },
    setFirebaseUser: (state, action: PayloadAction<any>) => {
      state.firebaseUser.uid = action.payload.uid
      state.firebaseUser.email = action.payload.email
      state.firebaseUser.displayName = action.payload.displayName
      state.firebaseUser.avatar = action.payload.avatar
    },
    signOut: (state) => {
      state.session.name = ""
      state.session.email = ""
      state.session.image = ""
      state.session.roles = []

      state.firebaseUser = { uid: "", avatar: "", displayName: "", email: "" }
      state.isLoggedIn = !state.isLoggedIn
    },
  },
  extraReducers: {},
})

export const { setCredential, setFirebaseUser, signOut } = authSlice.actions

export const getIsLoggedIn = (state: RootState) => state.auth.isLoggedIn

export const getUserEmail = (state: RootState) => state.auth.session.email

export const getUserSession = (state: RootState) => state.auth.session

export const getFirebaseUser = (state: RootState) => state.auth.firebaseUser

export default authSlice.reducer
