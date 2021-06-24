// src/store.ts
import { configureStore } from '@reduxjs/toolkit';
import { reducer as viewReducer } from './viewSlice';
import { reducer as userReducer } from './userSlice';

const store = configureStore({
  reducer: {
    view: viewReducer,
    user: userReducer 
  },
});

export default store;