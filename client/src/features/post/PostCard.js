import { useState } from "react";
import { Button, Form, Icon } from "semantic-ui-react";
import DefaultProfile from "../../photos/placeholder.png";
import { selectUser } from "../user/userSlice";
import { useSelector } from "react-redux";

function PostCard({ post: { text, user }, post }) {
  const currentUser = useSelector(selectUser);
  const [toggleEdit, setToggleEdit] = useState(false);
  const [postInput, setPostInput] = useState({
    text: "",
    id: post.id,
    user_id: user.id,
  });

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
    console.log(postInput);
  };

  const handleUpdate = () => {
    console.log("hi");
  };

  return (
    <div>
      <h1>Username: {user.username} </h1>
      <img
        alt="profile pic"
        src={
          user.profile_picture
            ? `data:image/png;base64,${user.profile_picture}`
            : DefaultProfile
        }
        style={{ width: "2%", height: "2%", borderRadius: "10%" }}
      />

     {currentUser.id === user.id? 
     <button onClick={handleEditButton}>Click to Edit</button>
     : null
    } 

      {toggleEdit ? (
        <Form onSubmit={handleUpdate}>
          <Form.Input
            label="Post"
            name="text"
            autoComplete="off"
            onChange={inputOnChange}
            value={text}
          />

          <Button type="submit">
            <Icon name="refresh" />
            Update
          </Button>
        </Form>
      ) : (
        <p>post: {text}</p>
      )}
    </div>
  );
}

export default PostCard;
