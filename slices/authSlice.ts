import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "../store"
import jwtDecode from "jwt-decode"

interface stateData {
  user: {
    name: string
    id: string
    credential: ""
  }
  isLoggedIn: boolean
  token: undefined | null | string
  email: string
  role: string[]
  registerStatus: ""
  registerError: ""
  loading: boolean
}

const initialState: stateData = {
  user: { name: "", id: "", credential: "" },
  isLoggedIn: false,
  token: null,
  // token: localStorage.getItem('token'),
  email: "",
  role: [],
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
      state.token = accessToken
      const decoded: any = jwtDecode(accessToken)

      const { email, roles } = decoded ? decoded.UserInfo : null

      state.email = email
      state.role = roles
      state.isLoggedIn = true
    },
    signOut: (state) => {
      state.token = ""
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

export const getUserEmail = (state: RootState) => state.auth.email

export default authSlice.reducer
