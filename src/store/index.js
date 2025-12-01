import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import counterReducer from "./slices/counterSlice";
import lightReducer from "./slices/lightSlice";
import foodReducer from "./slices/foodSlice";
import cartReducer from "./slices/cartSlice";
import postReducer from "./slices/postSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    light: lightReducer,
    food: foodReducer,
    cart: cartReducer,
    posts: postReducer,
  },
});

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;
