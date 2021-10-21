import DefaultProfile from "../../photos/placeholder.png";

function PostCard({ post: { text, user } }) {
  return (
    <div>
      <h1>Username: {user.username} </h1>
      <img
        alt="profile pic"
        src={
          user.profile_picture
            ? `data:image/png;base64,${user.profile_picture}`
            : DefaultProfile
        }
        style={{ width: "3%", borderRadius: "10%" }}
      />
      <p>post: {text}</p>
    </div>
  );
}

export default PostCard;
