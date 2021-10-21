import { Link, Route, Switch } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import MyProfile from "./MyProfile"

function Auth() {
  return (
    <div>
      <h1>Log or Signup to Use the service</h1>
      <Link to="/login">Login</Link>
      <Link to="/signup">Signup</Link>

      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>

        <Route exact path="/my-profile">
          <MyProfile />
        </Route>
      </Switch>
    </div>
  );
}

export default Auth;
