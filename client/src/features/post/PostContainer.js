import { useSelector } from "react-redux";
import { selectIsLoading, selectPosts } from "./postsSlice";
import PostCard from "./PostCard";
import PostForm from "./PostForm";

import "./Post.css";

function PostContainer() {
  const posts = useSelector(selectPosts);
  const isLoading = useSelector(selectIsLoading);

  return (
    <div>
      {isLoading ? (
      <div class="loading">Loading&#8230;</div>
      ) : null}
      
      <PostForm />
      {posts.map((post) => (
        <PostCard post={post} key={post.id} />
      ))}
    </div>
  );
}

export default PostContainer;
