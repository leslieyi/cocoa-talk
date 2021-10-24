import { configureStore } from '@reduxjs/toolkit';
import userReducer from "../features/user/userSlice";
import postsReducer from "../features/post/postsSlice";
import onePostReducer from "../features/post/onePostSlice";
// import commentsReducer from "../features/comments/commentsSlice";


export const store = configureStore({
  reducer: {
    user: userReducer,
    posts: postsReducer,
    onePost: onePostReducer,
    // comments: commentsReducer,
  },
});

export default store;

