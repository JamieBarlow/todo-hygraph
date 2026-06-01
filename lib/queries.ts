import { gql } from "graphql-request";

export const getTodos = gql`
  {
    todos {
      id
      title
      description
      dueDate
      completed
    }
  }
`;

export const CreateTodo = gql`
  mutation createTodo($title: String!, $description: String) {
    createTodo(
      data: { title: $title, completed: false, description: $description }
    ) {
      id
    }
  }
`;

export const PublishTodo = gql`
  mutation PublishTodo($id: ID!) {
    publishTodo(where: { id: $id }) {
      id
    }
  }
`;

export const UpdateTodo = gql`
  mutation UpdateTodo(
    $id: ID!
    $title: String!
    $description: String
    $completed: Boolean
  ) {
    updateTodo(
      where: { id: $id }
      data: { title: $title, description: $description, completed: $completed }
    ) {
      id
    }
  }
`;

export const DeleteTodo = gql`
  mutation DeleteTodo($id: ID!) {
    deleteTodo(where: { id: $id }) {
      id
    }
  }
`;

export const GetUserByEmail = gql`
  query GetUserByEmail($email: String!) {
    userAuth(where: { email: $email }) {
      id
      email
      password
    }
  }
`;
