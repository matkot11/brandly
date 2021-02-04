import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'error',
  initialState: {
    err: false,
  },
  reducers: {
    getError: (state, action) => {
      state.err = action.payload;
    },
  },
});

export const { getError } = slice.actions;

export const getErrorData = (state) => state.error.err;

export default slice.reducer;
