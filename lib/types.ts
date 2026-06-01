import { DefaultSession } from "next-auth";

export type Todo = {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  completed: boolean;
};

export type GetTodosResponse = {
  todos: Todo[];
};

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
  }
}
