import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchComments } from "./commentsAPI";

const initialState = {
  loading: false,
  value: [],
  error: "",
};

export const getComments = createAsyncThunk("comment/getComments", async () => {
  const response = await fetchComments();

  return response.data;
});

export const commentSlice = createSlice({
  name: "comment",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getComments.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getComments.fulfilled, (state, action) => {
      state.loading = false;
      state.value = action.payload;
      state.error = "";
    });
    builder.addCase(getComments.rejected, (state, action) => {
      state.loading = false;
      state.value = [];
      state.error = action.error.message;
    });
  },
});

export const selectComments = (state) => state.comment.value;

export default commentSlice.reducer;
