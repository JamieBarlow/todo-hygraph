import { gql } from "graphql-request";

export const getTodos = gql`
  query GetTodos($userId: ID!) {
    todos(where: { userAuth: { id: $userId } }) {
      id
      title
      description
      dueDate
      completed
    }
  }
`;

export const CreateTodo = gql`
  mutation CreateTodo($title: String!, $description: String, $userId: ID!) {
    createTodo(
      data: {
        title: $title
        completed: false
        description: $description
        userAuth: { connect: { id: $userId } }
      }
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

export const CreateUserAuth = gql`
  mutation CreateUserAuth($email: String!, $password: String!) {
    createUserAuth(data: { email: $email, password: $password }) {
      id
    }
  }
`;

export const PublishUserAuth = gql`
  mutation PublishUserAuth($id: ID!) {
    publishUserAuth(where: { id: $id }) {
      id
    }
  }
`;
