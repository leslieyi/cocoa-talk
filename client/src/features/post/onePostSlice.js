import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchOnePost = createAsyncThunk(
    "posts/fetchOnePost",
    (id) => fetch(`/posts/${id}`).then((response) => response.json())
  );

  const onePostSlice = createSlice({
    name: "onePost",
    initialState: {
      value: []
    },

    extraReducers: {
      [fetchOnePost.fulfilled](state, action) {
        state.value = action.payload;
        state.editing = null;
      },
    },
  });

  export const selectOnePost = (state) => state.onePost.value;
  export default onePostSlice.reducer;
