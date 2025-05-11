import { createSlice } from '@reduxjs/toolkit';

const operationsSlice = createSlice({
  name: 'operations',
  initialState: [],
  reducers: {
    setsOperations: (state, action) => {
      return action.payload;
    },
  },
});

export const { setsOperations } = operationsSlice.actions;
export default operationsSlice;
