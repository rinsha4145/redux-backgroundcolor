// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import colorReducer from './Slice';

const store = configureStore({
  reducer: {
    col: colorReducer,
  },
});

export default store;
