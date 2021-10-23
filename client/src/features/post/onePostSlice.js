import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchOnePost = createAsyncThunk(
    "posts/fetchOnePost",
    (id) => fetch(`/posts/${id}`).then((response) => response.json())
  );

  const onePostSlice = createSlice({
    name: "onePost",
    initialState: {
      value: null
    },

    extraReducers: {
      [fetchOnePost.fulfilled](state, action) {
        state.value = action.payload;
      },
    },
  });

  export const selectOnePost = (state) => state.onePost.value;
  export default onePostSlice.reducer;
