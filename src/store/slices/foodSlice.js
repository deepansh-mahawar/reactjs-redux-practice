import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: ["Pizza", "Burger", "Sushi"],
};

const foodSlice = createSlice({
  name: "food",
  initialState,
  reducers: {
    addFood(state, action) {
      state.items.push(action.payload);
    },
    removeFood(state, action) {
      state.items.splice(action.payload, 1);
    },
    loadFoods(state, action) {
      state.items = action.payload;
    },
  },
});

export const { addFood, removeFood, loadFoods } = foodSlice.actions;
export default foodSlice.reducer;
