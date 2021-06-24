import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    adminPoolIds: ['w243f3'],
    userId: 'sdf3fsa'
};

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAdminPoolIds: (state, action) => {
      state.adminPoolIds = action.payload;
    }
  },
});

export const { actions: { setAdminPoolIds } , reducer } = slice;