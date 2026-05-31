import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getTodos } from "@/lib/queries";
import { GetTodosResponse } from "@/lib/types";
import TodoItem from "./TodoItem";
import { ItemGroup } from "./ui/item";
import { hygraphClient } from "@/lib/hygraph";

export default async function TodoDisplay() {
  const { todos } = await hygraphClient.request<GetTodosResponse>(getTodos);
  console.log(todos);
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Todo list</CardTitle>
      </CardHeader>
      <CardContent>
        <ItemGroup className="max-w-sm">
          {todos.map((todo) => (
            <TodoItem {...todo} key={todo.id} />
          ))}
        </ItemGroup>
      </CardContent>
    </Card>
  );
}
