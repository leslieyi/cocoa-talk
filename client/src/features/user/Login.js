import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, Header, Icon, Input } from "semantic-ui-react";
import { login, selectErrors } from "./userSlice";

function Login() {
  const dispatch = useDispatch();

  const errors = useSelector(selectErrors);

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  function loginOnChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setUser({
      ...user,
      [name]: value,
    });
  }
  const loginSubmit = (e) => {
    e.preventDefault();
    dispatch(login(user));
  };

  return (
    <div>
      <Form onSubmit={loginSubmit} float="right" style={{padding:"10px 350px 0 350px"}}>
        <Header as="h2">Login</Header>

        <Form.Field
          id="form-input-control-username"
          control={Input}
          label="Username"
          placeholder="Username"
          name="username"
          autoComplete="off"
          onChange={loginOnChange}
        />

        <Form.Field
          id="form-input-control-password"
          control={Input}
          type="password"
          label="Password"
          placeholder="Password"
          name="password"
          onChange={loginOnChange}
        />

        {errors.map((error) => (
          <div>{error}</div>
        ))}
        <Button>
          <Icon name="sign in alternate" />
          Login
        </Button>
      </Form>
    </div>
  );
}

export default Login;
