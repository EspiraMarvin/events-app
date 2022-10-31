import { configureStore } from '@reduxjs/toolkit'
import eventReducer from './slices/eventSlice'
import userReducer from './slices/userSlice'
import authReducer from './slices/authSlice'

export const store = configureStore({
    reducer: {
      auth: authReducer,
      user: userReducer,
      event: eventReducer,
    },
  })
  
  // Infer the `RootState` and `AppDispatch` types from the store itself
  export type RootState = ReturnType<typeof store.getState>
  // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
  export type AppDispatch = typeof store.dispatch