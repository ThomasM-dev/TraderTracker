import { configureStore } from '@reduxjs/toolkit'
import operationsSlice  from './operationsSlice'
import { firebaseApi } from '../fetching/firebaseApi'

const store = configureStore({
  reducer: {
    operations: operationsSlice.reducer,
    [firebaseApi.reducerPath]: firebaseApi.reducer,
  },
   middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(firebaseApi.middleware)
})

export default store