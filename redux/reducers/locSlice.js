import { createSlice } from "@reduxjs/toolkit";

const locSlice = createSlice({
  name: "Place",
  initialState: {
    location: { lat: 1.28692, lng: 103.85457 },
  },
  reducers: {
    setLoc: (state, action) => {
      return {
        ...state,
        location: action.payload,
      };
    },
  },
});

export const { setLoc } = locSlice.actions;
export default locSlice.reducer;
