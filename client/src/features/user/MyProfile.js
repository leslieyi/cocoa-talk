import { useSelector, useDispatch } from "react-redux";
import { selectUser, selectIsLoading, fetchUser } from "./userSlice";
import { Redirect } from "react-router-dom";
import DefaultProfile from "../../photos/placeholder.png";
import {
  Card,
  Image,
  Icon,
  Button,
  Form,
  Input,
  TextArea,
} from "semantic-ui-react";
import { useState } from "react";
import "../post/Post.css";

function MyProfile() {
  const user = useSelector(selectUser);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  const [errors, setErrors] = useState([]);
  const [userInput, setUserInput] = useState({ ...user });

  function handleSubmit(e) {
    e.preventDefault();
    fetch("edit-profile", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userInput),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.errors) {
          setErrors(data.errors);
        } else {
          dispatch(fetchUser());
          setEdit(!edit);
        }
      });
  }

  function inputOnChange(e) {
    const name = e.target.name;
    if (name === "picture") {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (read) => {
        const asString = btoa(read.target.result);
        setUserInput({
          ...userInput,
          profile_picture: asString,
        });
      };
      reader.readAsBinaryString(file);
    }
    const value = e.target.value;
    console.log(value);
    setUserInput({
      ...userInput,
      [name]: value,
    });
  }

  if (!user) return <Redirect to="/" />;
  return (
    <div>
      {isLoading ? <div className="loading">Loading&#8230;</div> : null}
      <Card style={{ margin: "40px auto auto auto" }}>
        <Image
          src={
            user.profile_picture
              ? `data:image/png;base64,${user.profile_picture}`
              : DefaultProfile
          }
        />
        <Card.Content>
          <Card.Header>{user.username}</Card.Header>

          <Card.Meta>bio: {user.bio}</Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <Icon name="clipboard list" />
          Total Number of Posts: {user.total_posts}
        </Card.Content>
        <Button onClick={() => setEdit(!edit)}>Click to Edit Profile</Button>
      </Card>

      {edit ? (
        <Form onSubmit={handleSubmit} style={{ padding: "10px 150px 0 150px" }}>
          <Form.Group widths="equal">
            <Form.Field
              id="form-input-control-username"
              control={Input}
              label="Username"
              name="username"
              placeholder="Username"
              autoComplete="off"
              onChange={inputOnChange}
            />

            <Form.Field
              id="form-input-control-password"
              control={Input}
              label="Password"
              name="password"
              placeholder="Password"
              type="password"
              autoComplete="off"
              onChange={inputOnChange}
              value={userInput.password}
            />
          </Form.Group>

          <Form.Field
            id="form-input-control-bio"
            control={TextArea}
            label="Bio"
            name="bio"
            placeholder="Bio"
            onChange={inputOnChange}
            value={userInput.bio}
          />

          <Form.Field
            id="form-input-control-profile-pic"
            control={Input}
            label="Profile Picture"
            name="picture"
            type="file"
            accept=".jpeg, .png, .jpg"
            placeholder="Profile Picture"
            onChange={inputOnChange}
          />

          <Button type="submit">
            <Icon name="signup" />
            Submit
          </Button>
        </Form>
      ) : null}
    </div>
  );
}

export default MyProfile;
