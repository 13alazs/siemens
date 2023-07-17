import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import WordCountUtil from "../../../utils/WordCountUtil";
import { fetchComments } from "./commentsAPI";

const initialState = {
  loading: false,
  value: [],
  error: "",
  filter: null,
};

export const getComments = createAsyncThunk("comment/getComments", async () => {
  const response = await fetchComments();

  return response.data.map((comment) =>
    Object.assign(comment, { count: WordCountUtil.countWords(comment.body) })
  );
});

export const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
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

export const { setFilter } = commentSlice.actions;

const value = (state) => state.comment.value;
const filter = (state) => state.comment.filter;

export const selectComments = createSelector(
  [value, filter],
  (value, filter) => {
    if (filter) {
      return value.filter((comment) => comment.postId == filter);
    }
    return value;
  }
);

export default commentSlice.reducer;
