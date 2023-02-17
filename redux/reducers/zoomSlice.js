import { createSlice } from "@reduxjs/toolkit";

const zoomSlice = createSlice({
  name: "Zoom",
  initialState: {
    zoom: 15,
  },
  reducers: {
    setZoom: (state, action) => {
      return {
        ...state,
        zoom: action.payload,
      };
    },
  },
});

export const { setZoom } = zoomSlice.actions;
export default zoomSlice.reducer;
