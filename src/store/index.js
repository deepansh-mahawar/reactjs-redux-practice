import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import lightReducer from "./slices/lightSlice";
import foodReducer from "./slices/foodSlice";
import cartReducer from "./slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    light: lightReducer,
    food: foodReducer,
    cart: cartReducer,
  },
});

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;
