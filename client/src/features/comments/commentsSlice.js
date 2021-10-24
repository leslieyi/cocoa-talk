// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// export const fetchComments = createAsyncThunk("posts/fetchComments", () =>
//   fetch("/comments").then((response) => response.json())
// );

// const commentsSlice = createSlice({
//   name: "comments",
//   initialState: {
//     value: [],
//     loading: false,
//   },
//   reducers: {},
//   extraReducers: {
//     [fetchComments.fulfilled](state, action) {
//       state.value = action.payload;
//       state.loading = false;
//     },
//     [fetchComments.pending](state) {
//       state.loading = true;
//     },
//     [fetchComments.rejected](state) {
//       state.loading = false;
//     },
//   },
// });

// export const selectComments = (state) => state.comments.value;
// export const selectIsLoading = (state) => state.comments.loading;

// export default commentsSlice.reducer;