import { gql } from "urql";

export const DELETE_POST = gql `
    mutation DeletePost($id: ID!) 
    {
        deletePost(id: $id)
    }
    `;

export const CREATE_POST = gql `
    mutation CreatePost($userId: ID!, $title: String!, $body: String!) {
        createPost(input: { id: $userId, title: $title, body: $body}) {
            id
            title
            body
            user {
                id
                name
            }
        }
    }
    `;