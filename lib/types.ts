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
