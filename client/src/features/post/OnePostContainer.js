import { fetchOnePost, selectOnePost } from "./onePostSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "semantic-ui-react";
import CommentContainer from "../comments/CommentContainer";

function OnePostContainer() {
  const { id } = useParams();

  const dispatch = useDispatch();
  const post = useSelector(selectOnePost);

  const refresh = () => dispatch(fetchOnePost(id));
  useEffect(refresh, [id, dispatch]);

  console.log(post);

  return (
    <div>
      {post ? (
        <>
        <Container>
          {post.text}
          {post.comments.map((comment) => (
            <CommentContainer comment={comment} />
          ))}
        </Container>
</> 
      ) : null}
    </div>
  );
}

export default OnePostContainer;
