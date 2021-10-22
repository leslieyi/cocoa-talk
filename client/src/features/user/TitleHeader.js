import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Menu, Popup, Header} from "semantic-ui-react";
import { logout, selectUser } from "./userSlice";
import  Logo  from "../../../src/photos/cocoa.png"


function TitleHeader() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <div style={{margin: "20px"}}>
      <Header as="h1" style={{ display: "inline",}}> Cocoa Talk  </Header>
 
      <img src={Logo} style= {{verticalAlign: "middle", display: "inline", width:"45px", height:"45px",  }}/>

      </div>

      {user ? (
        <Menu inverted pointing secondary>
          <NavLink
            exact
            to="/"
            style={{ color: "white", fontSize: "20px", margin: "0px 10px 0px 10px",verticalAlign: "middle" }}
            activeStyle={{ fontWeight: "bold" }}
          >
            Home
            <img
            alt=""
              src="https://img.icons8.com/doodle/48/000000/home--v1.png"
              style={{ width: "30%", margin: "10px", verticalAlign: "middle" }}
            />
          </NavLink>

  

          <NavLink
            to="/my-profile"
            style={{ color: "white", fontSize: "20px", margin: "0px 10px 0px 10px",verticalAlign: "middle" }}
            activeStyle={{ fontWeight: "bold" }}
          >
            Profile
            <img
            alt=""
              src="https://img.icons8.com/doodle/48/000000/test-account.png"
              style={{ width: "25%", margin: "10px", verticalAlign: "middle" }}
            />
          </NavLink>

          <Menu.Menu position="right">
            <Menu.Item onClick={handleLogout} style={{ color: "#98C3EC" }}>
              <Popup
                content="Log Out"
                trigger={
                  <img
                  alt=""
                    src="https://img.icons8.com/doodle/48/000000/shutdown.png"
                    style={{ width: "80%",verticalAlign: "middle" }}
                  />
                }
              />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      ) : null}
    </div>
  );
}

export default TitleHeader;
