import { configureStore } from "@reduxjs/toolkit";
import commentReducer from "../features/comments/store/commentSlice";

export const store = configureStore({
  reducer: {
    comment: commentReducer,
  },
});
