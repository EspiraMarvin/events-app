import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction, createAsyncThunk } from "@reduxjs/toolkit"
import type { RootState } from "../store"
import { EventBriteEvent } from "../typings"
import eventsData from "../data/events.json"
import axios from "axios"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const EVENTS_URL =
  process.env.NODE_ENV !== "development"
    ? "https://eventsall.onrender.com/api/events"
    : "http://localhost:5000/api/events"

// Define a type for the slice state
interface stateData {
  events: EventBriteEvent[]
  status: string
  error: string | null | undefined
}

// Define the initial state using that type
const initialState: stateData = {
  events: eventsData,
  status: "idle",
  error: null,
}

export const eventSlice = createSlice({
  name: "event",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    filterAllByLocation: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        events: [...state.events].filter((event) =>
          event.location__1.toLowerCase().includes(action.payload.toLowerCase())
        ),
      }
    },
  },
  // extraReducers(builder) {
  //   builder
  //     .addCase(fetchEvents.pending, (state, action) => {
  //       state.status = "loading"
  //     })
  //     .addCase(fetchEvents.fulfilled, (state, action) => {
  //       state.events = state.events.concat(action.payload)
  //     })
  //     .addCase(fetchEvents.rejected, (state, action) => {
  //       state.status = "failed"
  //       state.error = action.error.message
  //     })
  // },
})

// export const fetchEvents = createAsyncThunk<
//   EventBriteEvent[],
//   // First argument to the payload creator
//   number,
//   {
//     // Optional fields for defining thunkApi field types
//     dispatch: any
//     state: any
//     extra: {
//       jwt: string
//     }
//   }
// >("event/fetchEvents", async () => {
//   try {
//     const res = await axios.get(EVENTS_URL)
//     return res.data
//   } catch (err: any) {
//     return err?.message
//   }
// })

// const allEvents = store.dispatch(fetchEvents())
export const selectAllEvents = (state: RootState) => state.event.events


export const { filterAllByLocation } = eventSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const getAllEvents = (state: RootState) => state.event.events


export const getEventsCount = (state: RootState) => state.event.events.length

export default eventSlice.reducer