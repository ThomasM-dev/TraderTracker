import { configureStore } from '@reduxjs/toolkit'
import { operationsSlice } from './operationsSlice'
import { firebaseApi } from '../fetching/firebaseApi'

export const store = configureStore({
  reducer: {
    operationsSlice: operationsSlice.reducer,
    [firebaseApi.reducerPath]: firebaseApi.reducer,
  },
   middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(firebaseApi.middleware)
})
