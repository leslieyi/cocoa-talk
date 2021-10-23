import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Form, TextArea, Header } from "semantic-ui-react";
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
        justifyContent: "center",
        padding: "0 350px 50px 350px",
      }}
    >
      {errors.map((error) => (
        <h4>{error}</h4>
      ))}

      <Form onSubmit={handleSubmit} style={{ textAlign: "center" }}>
        <Header as="h2" style={{ margin: "20px" }}>
          Start Typing...
        </Header>
        <TextArea
          style={{ minHeight: 250 }}
          name="input"
          autoComplete="off"
          placeholder="Start Writing..."
          onChange={handleInputChange}
        />
        <Button type="submit" style={{ margin: "20px" }}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default PostForm;
