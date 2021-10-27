import { useState } from "react";
import { useSelector } from "react-redux";
import { Button, Container, Form, Popup } from "semantic-ui-react";
import "../post/Post.css";
import { selectUser } from "../user/userSlice";

function CommentContainer({ comment, refresh }) {
  const currentUser = useSelector(selectUser);
  const [toggleEdit, setToggleEdit] = useState(false);
  const [errors, setErrors] = useState([]);
  const [commentInput, setCommentInput] = useState({ ...comment });

  const handleDelete = (id) => {
    fetch(`/comments/${id}`, {
      method: "DELETE",
    }).then((r) => refresh());
  };

  const inputOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setCommentInput({
      ...commentInput,
      [name]: value,
    });
  };

  const handleEditButton = () => {
    setToggleEdit(!toggleEdit);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    fetch(`/comments/${comment.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(commentInput),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.errors) {
          setErrors(data.errors);
        } else {
          refresh();
          setToggleEdit(!toggleEdit);
        }
      });
  };

  return (
    <div>
      {toggleEdit ? (
        <Form onSubmit={handleUpdate}>
          {errors.map((error) => (
            <h1>{error}</h1>
          ))}
          <Form.Input
            style={{ width: "60%", height: "10%" }}
            name="text"
            value={commentInput.text}
            autoComplete="off"
            onChange={inputOnChange}
          />

          <Button
            type="submit"
            style={{
              width: "9%",
              fontSize: "10px",
              backgroundColor: "#2a9d8f",
              display: "inline",
            }}
          >
            Update
          </Button>
          <Button
            type="submit"
            style={{
              width: "9%",
              fontSize: "10px",
              backgroundColor: "#fbf2d5",
            }}
            onClick={handleEditButton}
          >
            Cancel
          </Button>
        </Form>
      ) : (
        <Container>
          <span
            style={{ color: "#bb3e03", display: "inline", fontSize: "18px" }}
          >
            {comment.username}:
          </span>
          <p style={{ display: "inline", fontSize: "18px" }}>{comment.text}</p>
          {currentUser.username === comment.username ? (
            <>
              <Popup
                content="Delete Comment"
                trigger={
                  <img
                    alt=""
                    className="zoom1"
                    onClick={() => handleDelete(comment.id)}
                    src="https://img.icons8.com/doodle/48/000000/delete-sign.png"
                    style={{ width: "20px", height: "20px", cursor: "pointer" }}
                  />
                }
              />
              <Popup
                content="Edit Comment"
                trigger={
                  <img
                    alt=""
                    className="zoom2"
                    onClick={handleEditButton}
                    src="https://img.icons8.com/doodle/48/000000/notability.png"
                    style={{ width: "20px", height: "20px", cursor: "pointer" }}
                  />
                }
              />
            </>
          ) : null}
          <br />
        </Container>
      )}
    </div>
  );
}

export default CommentContainer;
