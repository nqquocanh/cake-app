import { createReducer } from "@reduxjs/toolkit";
// import { combineReducers } from "redux";
import shopReducer from "./Shopping/shopping-reducer";

const rootReducer = createReducer({
  shop: shopReducer,
});

export default rootReducer;
