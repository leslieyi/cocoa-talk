import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", () =>
  fetch("/posts").then((response) => response.json())
);

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    value: [],
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [fetchPosts.fulfilled](state, action) {
      state.value = action.payload;
      state.loading = false;
    },
    [fetchPosts.pending](state) {
      state.loading = true;
    },
    [fetchPosts.rejected](state) {
      state.loading = false;
    },
  },
});

export const selectPosts = (state) => state.posts.value;
export const selectIsLoading = (state) => state.posts.loading;

export default postsSlice.reducer;