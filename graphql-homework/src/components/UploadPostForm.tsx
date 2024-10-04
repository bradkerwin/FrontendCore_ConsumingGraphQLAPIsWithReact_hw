import { FormEvent, useState } from "react";
import { CREATE_POST } from "../mutations/Mutations";
import { useMutation } from "@apollo/client";
import { Spinner, Form, Button, Container } from "react-bootstrap";

const UploadPostForm = () => {
  const [userId, setUserId] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const [uploadPost, { data, loading }] = useMutation(CREATE_POST);

  if (loading) {
    return <Spinner />;
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    uploadPost({
      variables: {
        userId: userId,
        title: title,
        body: body,
      },
    });
    alert("Post Uploaded");
    console.log("Post uploaded successfully!");
  };

  return (
    <>
      <Container>
        <h1>Create New Post</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formNewPost">
            <Form.Label>User ID</Form.Label>
            <Form.Control
              value={userId}
              type="text"
              placeholder="Enter your User ID?"
              autoComplete="off"
              onChange={(event) => setUserId(event.target.value)}
            />
            <Form.Label>Title</Form.Label>
            <Form.Control
              value={title}
              type="text"
              placeholder="Title"
              autoComplete="off"
              onChange={(event) => setTitle(event.target.value)}
            />
            <Form.Label>Body</Form.Label>
            <Form.Control
              value={body}
              type="text"
              placeholder="What's on your mind?"
              autoComplete="off"
              onChange={(event) => setBody(event.target.value)}
            />
          </Form.Group>
          <Button className="m-2" variant="primary" type="submit">
            Upload
          </Button>
        </Form>
        {data && (
          <>
            <h1>{data.uploadPost.title}</h1>
            <p>{data.uploadPost.body}</p>
          </>
        )}
      </Container>
    </>
  );
};

export default UploadPostForm;
