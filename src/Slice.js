// src/features/colorSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  color: 'white', 
 
};


const colorSlice = createSlice({
  name: 'color',
  initialState,
  reducers: {
    changeToRed: (state,action) => {
      state.color = action.payload;
    },
    changeToYellow: (state) => {
      state.color = 'yellow';
    },
  },
});

export const { changeToRed, changeToYellow } = colorSlice.actions;
export default colorSlice.reducer;
