import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Container,
  Form,
  Header,
  Icon,
  TextArea,
  Divider,
  Popup,
} from "semantic-ui-react";
import DefaultProfile from "../../photos/placeholder.png";
import { selectUser } from "../user/userSlice";
import { fetchPosts } from "./postsSlice";
import "./Post.css";

function PostCard({ post: { user }, post }) {
  const currentUser = useSelector(selectUser);
  const [toggleEdit, setToggleEdit] = useState(false);
  const [postInput, setPostInput] = useState({ ...post });
  const [errors, setErrors] = useState([]);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const handleEditButton = () => {
    setToggleEdit(!toggleEdit);
  };

  const inputOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPostInput({
      ...postInput,
      [name]: value,
    });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    fetch(`/posts/${post.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postInput),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.errors) {
          setErrors(data.errors);
        } else {
          // dispatch(fetchPosts());
          setToggleEdit(!toggleEdit);
        }
      });
  };

  const handleDelete = (id) => {
    fetch(`/posts/${id}`, {
      method: "DELETE",
    }).then((r) => dispatch(fetchPosts()));
  };

  const handleClickOpen = () => {
    setOpen(!open);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Container text style={{ margin: "20px 0 20px 0" }}>
        <img
          alt="profile pic"
          src={
            user.profile_picture
              ? `data:image/png;base64,${user.profile_picture}`
              : DefaultProfile
          }
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            verticalAlign: "middle",
            horizontalAlign: "middle",
            objectFit: "cover",
          }}
        />
        <Header as="h2" style={{ display: "inline" }}>
          {user.username}
        </Header>

        {currentUser.id === user.id ? (
          <div style={{ display: "inline", marginLeft: "20px" }}>
            <Popup
              content="Edit Post"
              trigger={
                <img
                  className="zoom2"
                  onClick={handleEditButton}
                  src="https://img.icons8.com/doodle/48/000000/notability.png"
                  style={{ width: "30px", height: "30px" }}
                />
              }
            />

            <Popup
              content="Delete Post"
              trigger={
                <img
                  className="zoom1"
                  onClick={handleClickOpen}
                  src="https://img.icons8.com/doodle/48/000000/delete-sign.png"
                  style={{ width: "30px", height: "30px" }}
                />
              }
            />

            <Popup
              content="Go to Post"
              trigger={
                <img
                  className="zoom3"
                  alt=""
                  src="https://img.icons8.com/doodle/48/000000/typewriter-with-paper.png"
                  style={{ width: "30px", height: "30px" }}
                />
              }
            />
          </div>
        ) : (
          <Link to={"/posts/" + `${post.id}`}>
            <Popup
              content="Go to Post"
              trigger={
                <img
                  alt=""
                  src="https://img.icons8.com/doodle/48/000000/typewriter-with-paper.png"
                  style={{
                    width: "30px",
                    height: "30px",
                    marginLeft: "20px",
                    verticalAlign: "middle",
                  }}
                />
              }
            />
          </Link>
        )}

        {open ? (
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">Are You Sure?</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Do you really want to delete? This process cannot be undone.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button
                onClick={() => setOpen(false)}
                size="small"
                variant="outlined"
                color="error"
              >
                Cancel
              </Button>

              <Button
                onClick={() => handleDelete(post.id)}
                size="small"
                variant="outlined"
                color="brown"
                autoFocus
              >
                Delete
              </Button>
            </DialogActions>
          </Dialog>
        ) : null}

        {toggleEdit ? (
          <Form onSubmit={handleUpdate}>
            {errors.map((error) => (
              <h1>{error}</h1>
            ))}
            <TextArea
              label="Edit Post"
              name="text"
              autoComplete="off"
              onChange={inputOnChange}
              value={postInput.text}
            />

            <Button type="submit">
              <Icon name="refresh" />
              Update
            </Button>
            <Button onClick={handleEditButton}>cancel</Button>
          </Form>
        ) : (
          <p>Post: {postInput.text}</p>
        )}
      </Container>
      <Divider style={{ margin: "0 170px 0 170px" }} />
    </>
  );
}

export default PostCard;
