import { Redirect, Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "./user/userSlice";
import Auth from "./user/Auth";

function Homepage() {
  const user = useSelector(selectUser);

  if (!user) return <Auth />;
  return (
    <div>
      <h1> Homepage will render here</h1>
      <Switch>
        <Route exact path="/login">
          <Redirect to="/" />
        </Route>
        <Route exact path="/signup">
          <Redirect to="/" />
        </Route>
      </Switch>
    </div>
  );
}

export default Homepage;
