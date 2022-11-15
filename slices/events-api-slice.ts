import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const DOGS_API_KEY = "cbfb51a2-84b6-4025-a3e2-ed8616edf311"

const EVENTS_URL =
  process.env.NODE_ENV !== "development"
    ? "https://eventsall.onrender.com/api"
    : "http://localhost:5000/api"

interface Breed {
  id: string
  name: string
  image: {
    url: string
  }
}

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: EVENTS_URL,
  }),
  endpoints(builder) {
    return {
      fetchEvents: builder.query<any[], void>({
        query() {
          return `/events`
        },
      }),
    }
  },
})

export const { useFetchEventsQuery } = apiSlice
