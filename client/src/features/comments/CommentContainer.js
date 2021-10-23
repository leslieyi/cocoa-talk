function CommentContainer({ comment }) {
    console.log(comment)
  return (
    <div>
<h1><span style={{color: "blue" }}>{comment.username}: </span>{comment.text}</h1>
    </div>
  );
}

export default CommentContainer;
