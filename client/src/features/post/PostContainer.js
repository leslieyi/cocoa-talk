import { useSelector } from "react-redux";
import { selectUser } from "../user/userSlice";
import { selectPosts } from "./postsSlice";
import PostCard from "./PostCard";
import PostForm from "./PostForm";
function PostContainer() {
  const user = useSelector(selectUser);
  const posts = useSelector(selectPosts);
  console.log(posts);

  return (
    <div>
      <h1>Posts here, which will act as a main home page</h1>
      <PostForm />

      {posts.map((post) => (
        <PostCard post={post} />
      ))}
    </div>
  );
}

export default PostContainer;
