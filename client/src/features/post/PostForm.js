import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Form, TextArea } from "semantic-ui-react";
import { fetchPosts } from "./postsSlice";

function PostForm() {
  const dispatch = useDispatch();

  const [errors, setErrors] = useState([]);

  const [text, setText] = useState("");

  function handleInputChange(event) {
    setText(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newPost = {
      text: text,
    };
    fetch("/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data.errors) {
          setErrors(data.errors);
        } else {
          dispatch(fetchPosts());
        }
      });
    event.target.reset();
  }

  return (
    <div
      style={{
        textAlign: "center",
        paddingRight: "200px",
        paddingLeft: "200px",
        paddingBottom: "50px",
      }}
    >
          {errors.map((error) => (
        <h4>{error}</h4>
      ))}
      <Form id="todo-form" onSubmit={handleSubmit}>
        <Form.Field
          label="New Message:"
          name="input"
          autoComplete="off"
          type="text"
          placeHolder="Start Writing..."
          control={TextArea}
          onChange={handleInputChange}
        />
        <Button type="submit" className="submit-button">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default PostForm;
