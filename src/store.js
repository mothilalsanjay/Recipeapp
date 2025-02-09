import { configureStore } from "@reduxjs/toolkit";
import recipeReducer from "./features/recipeSlice"; // Import reducer

const store = configureStore({
  reducer: {
    recipes: recipeReducer,
  },
});

export default store;
