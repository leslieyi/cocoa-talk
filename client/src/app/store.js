import { configureStore } from '@reduxjs/toolkit';
import userReducer from "../features/user/userSlice";
import postsReducer from "../features/post/postsSlice";


export const store = configureStore({
  reducer: {
    user: userReducer,
    posts: postsReducer,
  },
});

export default store;

