import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOn: false,
};

const lightSlice = createSlice({
  name: "light",
  initialState,
  reducers: {
    turnOn(state) {
      state.isOn = true;
    },
    turnOff(state) {
      state.isOn = false;
    },
    toggle(state) {
      state.isOn = !state.isOn;
    },
  },
});

export const { turnOn, turnOff, toggle } = lightSlice.actions;

export default lightSlice.reducer;
