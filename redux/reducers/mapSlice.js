import { createSlice } from "@reduxjs/toolkit";

const mapSlice = createSlice({
  name: "Place",
  initialState: {
    place: [],
  },
  reducers: {
    setPlace: (state, action) => {
      return {
        ...state,
        place: action.payload,
      };
    },
  },
});

export const { setPlace } = mapSlice.actions;
export default mapSlice.reducer;
