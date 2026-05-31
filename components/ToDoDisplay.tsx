import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { request } from "graphql-request";
import { getTodos } from "@/lib/queries";
import { GetTodosResponse } from "@/lib/types";
import { getEnv } from "@/lib/utils";
import TodoItem from "./TodoItem";
import { ItemGroup } from "./ui/item";

const endpoint = getEnv("HYGRAPH_ENDPOINT");

export default async function TodoDisplay() {
  const { todos } = await request<GetTodosResponse>(endpoint, getTodos);
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
