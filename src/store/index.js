import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import lightReducer from "./slices/lightSlice";
import foodReducer from "./slices/foodSlice";
import { useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    light: lightReducer,
    food: foodReducer,
  },
});

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;

