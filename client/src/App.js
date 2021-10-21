import TitleHeader from "./features/user/TitleHeader";
import Homepage from "./features/Homepage";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUser } from "./features/user/userSlice";
import {fetchPosts} from "./features/post/postsSlice"

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
    dispatch(fetchPosts());
  });
  return (
    <div>
      <TitleHeader />
      <Homepage />
    </div>
  );
}

export default App;
