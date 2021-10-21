import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", () =>
  fetch("/posts").then((response) => response.json())
);

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    value: [],
  },
  reducers: {},
  extraReducers: {
    [fetchPosts.fulfilled](state, action) {
      state.value = action.payload;
    },
  },
});

export const selectPosts = (state) => state.posts.value;

export default postsSlice.reducer;