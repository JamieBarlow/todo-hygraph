import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { request } from "graphql-request";
import { getTodos } from "@/lib/queries";
import { GetTodosResponse } from "@/lib/types";
import { getEnv } from "@/lib/utils";

const endpoint = getEnv("HYGRAPH_ENDPOINT");

export default async function TodoDisplay() {
  const { todos } = await request<GetTodosResponse>(endpoint, getTodos);
  console.log(todos);
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Todos list</CardTitle>
      </CardHeader>
      <CardContent>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
