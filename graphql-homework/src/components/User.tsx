import { useQuery } from '@apollo/client';
import { Spinner, Card, Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { GET_USER_POSTS } from '../queries/Queries';

interface UserInfo {
    id: string
    name: string
    posts: {
        data: Data
    }[]
}

interface Data {
    id: string
    title: string
    body: string
}

const User = () => {

    const { id } = useParams();
    const { data, loading } = useQuery(GET_USER_POSTS, {
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
        {data.user.posts.data.map(({id, title, body}: Data) => (
            <Card style={{ width: "18rem" }}>
            <Card.Body>
                <Card.Title>{data.user.name}</Card.Title>
                <Card.Text>{id}</Card.Text>
                <Card.Text>{title}</Card.Text>
                <Card.Text>{body}</Card.Text>
            </Card.Body>
            </Card>
        ))}
        </Container>
    </>
  )
}

export default User