import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

// ? "https://eventsall.onrender.com/api"

const EVENTS_URL =
  process.env.NODE_ENV !== "development"
    ? "http://auth-express-jwt-js-dev.af-south-1.elasticbeanstalk.com/api"
    : "http://localhost:5000/api"

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: `${EVENTS_URL}`,
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
