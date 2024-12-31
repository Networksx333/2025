import { createSlice } from "@reduxjs/toolkit";

const scoreSlice = createSlice({
  name: "score",
  initialState: { points: 0 },
  reducers: {
    increment: (state, action) => {
      state.points += action.payload;
    },
  },
});

export const { increment } = scoreSlice.actions;
export default scoreSlice.reducer;
