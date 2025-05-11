import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const operationsSlice = createSlice({
  name: 'operations',
  initialState,
  reducers: {
    addOperation: (state, action) => {
      state.value.push(action.payload)
    },
    updateOperation: (state, action) => {

    },
  },
})

export const { addOperation, updateOperation } = operationsSlice.actions
export default operationsSlice