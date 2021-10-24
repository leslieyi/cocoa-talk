import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, TextArea } from "semantic-ui-react";
import { selectUser } from "../user/userSlice";
import {fetchOnePost} from "../post/onePostSlice"


function CommentForm({post_id}) {
  const [errors, setErrors] = useState([]);
  const [text, setText] = useState("");
  const currentUser = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    console.log("submitted");
    e.preventDefault();
    const newComment = {
      text: text,
      user_id: currentUser.id, 
      post_id:  post_id 
    };
    fetch("/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newComment),
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data.errors) {
          setErrors(data.errors);
        } else {
          dispatch(fetchOnePost(post_id));
        }
      });
    e.target.reset();
  };
  return (
    <div>
      {errors.map((error) => (
        <h4>{error}</h4>
      ))}
      <Form
        onSubmit={handleSubmit}
        style={{ textAlign: "center", marginTop: "10px" }}
      >

        <TextArea
          style={{ minHeight: 15 }}
          name="input"
          autoComplete="off"
          placeholder="Start Commenting..."
          onChange={handleInputChange}
        />
        <Button type="submit" style={{ margin: "20px" }}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default CommentForm;
