import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Container, Header } from "semantic-ui-react";
import DefaultProfile from "../../photos/placeholder.png";
import CommentContainer from "../comments/CommentContainer";
import CommentForm from "../comments/CommentForm";
import { fetchOnePost, selectOnePost } from "./onePostSlice";

function OnePostContainer() {
  const { id } = useParams();

  const dispatch = useDispatch();
  const post = useSelector(selectOnePost);

  const refresh = () => dispatch(fetchOnePost(id));
  useEffect(refresh, [id, dispatch]);

  return (
    <div>
      {post ? (
        <Container style={{ marginTop: "50px" }}>
          <img
            alt="profile pic"
            src={
              post.user.profile_picture
                ? `data:image/png;base64,${post.user.profile_picture}`
                : DefaultProfile
            }
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              float: "left",
            }}
          />
          <div>
            <Header as="h2" style={{ display: "inline" }}>
              Post by
              <span style={{ color: "#2a9d8f" }}> {post.user.username}</span>
            </Header>
            <br />
            {post.updated_at === post.created_at ? (
              <span
                style={{
                  fontWeight: "lighter",
                  fontSize: "12px",
                  display: "inline-block",
                }}
              >
                Posted: {post.date}
              </span>
            ) : (
              <span
                style={{
                  fontWeight: "lighter",
                  fontSize: "12px",
                  display: "inline-block",
                }}
              >
                Updated: {post.updated_date}
              </span>
            )}
          </div>
          <br />
          <br />
          <p style={{ fontSize: "24px" }}>{post.text}</p>
          <img
            alt=""
            src="https://img.icons8.com/doodle/48/000000/comments.png"
            style={{
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              display: "inline-block",
              verticalAlign: "middle",
              marginRight: "10px",
            }}
          />
          <p
            style={{
              fontSize: "18px",
              color: "#005f73",
              display: "inline-block",
            }}
          >
            Comments
          </p>
          <CommentForm post_id={id} />
          {post.comments.map((comment) => (
            <CommentContainer key={comment.id} comment={comment} post_id={id} />
          ))}
          <br />
          <br />
        </Container>
      ) : null}
    </div>
  );
}

export default OnePostContainer;
