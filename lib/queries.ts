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
