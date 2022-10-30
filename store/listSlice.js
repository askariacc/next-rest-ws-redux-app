import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};

export const dataSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    fetchInit: (state, action) => {
      state.list = action.payload;
    },
    update: (state, action) => {
      // update data
    },
  },
});

export const {} = dataSlice.actions;

export default dataSlice.reducer;
