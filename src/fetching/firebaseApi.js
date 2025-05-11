import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react'
import { db } from './firebase'
import { ref, get, push, set } from 'firebase/database'

export const firebaseApi = createApi({
  reducerPath: 'firebaseApi',
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    getOperations: builder.query({
      async queryFn() {
        try {
          const snapshot = await get(ref(db, 'operaciones'))
          const data = snapshot.val()
          const formatted = data
            ? Object.entries(data).map(([id, value]) => ({ id, ...value }))
            : []
          return { data: formatted }
        } catch (err) {
          return { error: err }
        }
      },
    }),
    addOperation: builder.mutation({
      async queryFn(operation) {
        try {
          const newRef = push(ref(db, 'operaciones'))
          await set(newRef, operation)
          return { data: { id: newRef.key, ...operation } }
        } catch (err) {
          return { error: err }
        }
      },
    }),
  }),
})

export const { useGetOperationsQuery, useAddOperationMutation } = firebaseApi
