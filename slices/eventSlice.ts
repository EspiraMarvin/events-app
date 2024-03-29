import { createSlice } from "@reduxjs/toolkit"
import { PayloadAction, createAsyncThunk } from "@reduxjs/toolkit"
import type { RootState } from "../store/store"
import dataa from "../data/data.json"
import { EventBriteEvent } from "../typings"
import axios from "axios"

const EVENTS_URL =
  process.env.NODE_ENV !== "development"
    ? "http://auth-express-jwt-js-dev.af-south-1.elasticbeanstalk.com/api/events"
    : "http://localhost:5000/api/events"

export const getEvents = createAsyncThunk<EventBriteEvent[]>(
  "event/getEvents",
  async (data, thunkApi) => {
    try {
      const res = await axios.get<EventBriteEvent[]>(EVENTS_URL)
      // console.log("res  api", res.data)
      return res.data
    } catch (err: any) {
      const message = err.message
      // return err?.message
      return thunkApi.rejectWithValue(message)
    }
  }
)

// Define a type for the slice state
interface stateData {
  events: EventBriteEvent[]
  allEvents: EventBriteEvent[] | null
  status: string
  loading: boolean
  error: string | null | undefined
}

// Define the initial state using that type
const initialState: stateData = {
  events: dataa,
  allEvents: [],
  loading: false,
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
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getEvents.pending, (state, action) => {
        state.loading = true
      })
      .addCase(
        getEvents.fulfilled,
        (state, action: PayloadAction<EventBriteEvent[]>) => {
          state.loading = false
          state.allEvents = action.payload
        }
      )
      .addCase(getEvents.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false
        state.error = action.payload
      })
  },
})

export const { filterAllByLocation } = eventSlice.actions

// Other code such as selectors can use the imported `RootState` type

export const getAllEventsObject = (state: RootState) => state.event.allEvents

export const getAllEventss = (state: RootState) => state.event.events


export const getEventsCount = (state: RootState) =>
  state.event?.allEvents?.length

export default eventSlice.reducer
