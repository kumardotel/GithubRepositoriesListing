import { configureStore } from '@reduxjs/toolkit'
import githubSlice from './slices/githubSlice'


export const store = configureStore({
    reducer: {
      githubReducer:githubSlice,
    },
  })