import { Container, Popup } from "semantic-ui-react";
import "../post/Post.css";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../user/userSlice";
import { fetchOnePost} from "../post/onePostSlice"
function CommentContainer({ comment, post_id }) {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectUser);

  const handleDelete = (id) => {
    fetch(`/comments/${comment.id}`, {
      method: "DELETE",
    }).then((r) => dispatch(fetchOnePost(post_id)));
  };

  return (
    <div>
      <Container>
        <span style={{ color: "#bb3e03", display: "inline", fontSize: "18px" }}>
          {comment.username}:
        </span>
        <p style={{ display: "inline", fontSize: "18px" }}>{comment.text}</p>
        {currentUser.username === comment.username ? (
          <Popup
            content="Delete Post"
            trigger={
              <img
                alt=""
                className="zoom1"
                onClick={handleDelete}
                src="https://img.icons8.com/doodle/48/000000/delete-sign.png"
                style={{ width: "20px", height: "20px", cursor: "pointer" }}
              />
            }
          />
        ) : null}
        <br />
      </Container>
    </div>
  );
}

export default CommentContainer;
