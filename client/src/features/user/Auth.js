import { Link, Route, Switch } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";

function Auth() {
  return (
    <div>
      <Link to="/login">Login</Link>
      <Link to="/signup">Signup</Link>

      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
      </Switch>
    </div>
  );
}

export default Auth;
