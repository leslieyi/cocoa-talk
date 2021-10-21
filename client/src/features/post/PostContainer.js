import { useSelector } from "react-redux";
import { selectUser } from "../user/userSlice";
import DefaultProfile from "../../photos/placeholder.png";

function PostContainer() {
  const user = useSelector(selectUser);

  return (
    <div>
      <h1>Posts here, which will act as a main home page</h1>
    </div>
  );
}

export default PostContainer;
