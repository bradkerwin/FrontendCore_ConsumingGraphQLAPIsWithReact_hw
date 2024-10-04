import { useMutation, useQuery } from '@apollo/client';
import { GET_POSTS } from '../queries/Queries';
import { DELETE_POST } from '../mutations/Mutations';
import { Spinner, Card, Container, Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

interface PostInfo {
    id: string,
    title: string,
    body: string,
    user: {
        id: string,
        name: string
    }
}

const Posts = () => {
    const { data, loading } = useQuery(GET_POSTS);

    const { id } = useParams();
    const [ deletePost, { data: deleteData }] = useMutation(DELETE_POST, {
        variables: {
            id
        },
    });

    if(loading) {
        return <Spinner />
    }


  return (
    <>
        <Container>
            <h1>All Posts:</h1>
        {data.posts.data.map(({id, title, body, user }: PostInfo) => (
            <Card style={{ width: "18rem" }}>
            <Card.Body>
            <Card.Text>{id}</Card.Text>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{body}</Card.Text>
                <Link to={`${user.id}`}>
                    <Button variant="outline-primary" >See More Posts By {user.name}</Button>
                </Link>
                <Button variant='outline-danger' onClick={() => {
                alert("Post Has Been Deleted Successfully")
                deletePost(deleteData.post.id)}}>Delete Post</Button>
            </Card.Body>
            </Card>
        ))}
        </Container>
    </>
  )
}

export default Posts