import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

import { Button, Form, Icon, Input, TextArea, Header } from "semantic-ui-react";
import { signup, selectErrors } from "./userSlice";

function Signup() {
  const dispatch = useDispatch();
  const errors = useSelector(selectErrors);
  const [userInput, setUserInput] = useState({
    username: "",
    password: "",
    bio: "",
    profile_picture: "",
  });

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
        })
      };
      reader.readAsBinaryString(file);
    }
    const value = e.target.value;
    console.log(value)
    setUserInput({
      ...userInput,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(signup(userInput));
  }

  return (
    <div style={{textAlign: "center"}}>
      <Header as="h2">Sign Up</Header>
      {errors.map((error) => (
        <h2>{error}</h2>
      ))}
      <Form onSubmit={handleSubmit} style={{padding:"10px 150px 0 150px"}}>
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
          />
        </Form.Group>

        <Form.Field
          id="form-input-control-bio"
          control={TextArea}
          label="Bio"
          name="bio"
          placeholder="Bio"
          onChange={inputOnChange}
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
    </div>
  );
}

export default Signup;
