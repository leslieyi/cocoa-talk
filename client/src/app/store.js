import { configureStore } from '@reduxjs/toolkit';
import userReducer from "../features/user/userSlice";
import postsReducer from "../features/post/postsSlice";
import onePostReducer from "../features/post/onePostSlice";



export const store = configureStore({
  reducer: {
    user: userReducer,
    posts: postsReducer,
    onePost: onePostReducer,
  },
});

export default store;

