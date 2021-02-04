import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'message',
  initialState: {
    msg: '',
  },
  reducers: {
    getMessage: (state, action) => {
      state.msg = action.payload;
    },
  },
});

export const { getMessage } = slice.actions;

export const getMessageData = (state) => state.message.msg;

export default slice.reducer;
