import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Menu, Popup } from "semantic-ui-react";
import { logout, selectUser } from "./userSlice";

function TitleHeader() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <h1>Cocoa Talk Title Header HERE</h1>
      {user ? (
        <Menu inverted>
          <NavLink exact to="/" activeStyle={{ fontWeight: "bold" }}>
            <Menu.Item>
              <Popup
                content="Homepage"
                trigger={
                  <img
                    src="https://img.icons8.com/doodle/48/000000/home--v1.png"
                    style={{ width: "75%" }}
                  />
                }
              />
            </Menu.Item>
          </NavLink>

          <NavLink
            to="/my-profile"
            activeStyle={{
              fontWeight: "bold",
            }}
          >
            <Menu.Item>
              <Popup
                content="My Profile"
                trigger={
                  <img
                    src="https://img.icons8.com/doodle/48/000000/test-account.png"
                    style={{ width: "75%" }}
                  />
                }
              />
            </Menu.Item>
          </NavLink>

          <Menu.Item onClick={handleLogout} style={{ color: "#98C3EC" }}>
          <Popup
                content="Log Out"
                trigger={
            <img
              src="https://img.icons8.com/doodle/48/000000/shutdown.png"
              style={{ width: "80%" }}
            /> }/>
          </Menu.Item>
        </Menu>
      ) : null}
    </div>
  );
}

export default TitleHeader;
