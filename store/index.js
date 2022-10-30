import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import data from "./listSlice";

const combineReducer = combineReducers({
  data,
});

const masterReducer = (state, action) => {
  if (action.type === HYDRATE) {
    // do something for hydration
  } else {
    return combineReducer(state, action);
  }
};

export const makeStore = () => configureStore({ reducer: masterReducer });

export const wrapper = createWrapper(makeStore, { debug: true });
