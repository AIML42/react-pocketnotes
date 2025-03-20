// redux/slices/uiSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  windowWidth: typeof window !== 'undefined' ? window.innerWidth : 0, 
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setWindowWidth(state, action) {
      state.windowWidth = action.payload;
    },
  },
});

export const { setWindowWidth } = uiSlice.actions;
export default uiSlice.reducer;