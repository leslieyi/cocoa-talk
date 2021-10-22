import { Redirect, Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "./user/userSlice";
import Auth from "./user/Auth";
import MyProfile from "./user/MyProfile";
import PostContainer from "./post/PostContainer";
import OnePostContainer from "./post/OnePostContainer";

function Homepage() {
  const user = useSelector(selectUser);

  if (!user) return <Auth />;
  return (
    <div>
      <Switch>
        <Route exact path="/login">
          <Redirect to="/" />
        </Route>
        <Route exact path="/signup">
          <Redirect to="/" />
        </Route>

        <Route exact path="/">
          <PostContainer />
        </Route>

        <Route path="/posts/:id">
          <OnePostContainer />
        </Route>

        <Route exact path="/my-profile">
          <MyProfile />
        </Route>
      </Switch>
    </div>
  );
}

export default Homepage;
