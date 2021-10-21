import { useSelector } from "react-redux";
import { selectUser } from "./userSlice";
import { Redirect } from "react-router-dom";
import DefaultProfile from "../../photos/placeholder.png";


function MyProfile() {
  const user = useSelector(selectUser);
  if (!user) return <Redirect to="/" />;
  return (
    <div>
      <h1>username:{user.username}</h1>
      <h1>picture:</h1>
      <img
      alt="profile pic"
        src={
            user.profile_picture? 
             `data:image/png;base64,${user.profile_picture}` : DefaultProfile
        }
        style={{ width: "15%", height: "15%", borderRadius: "10%" }}
      />
      <h1>bio: {user.bio}</h1>
    </div>
  );
}

export default MyProfile;
