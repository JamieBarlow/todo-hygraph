import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getTodos } from "@/lib/queries";
import { GetTodosResponse } from "@/lib/types";
import TodoItem from "./TodoItem";
import { ItemGroup } from "./ui/item";
import { hygraphClient } from "@/lib/hygraph";

import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function TodoDisplay() {
  const session = await getServerSession(authOptions);
  console.log("Session:", JSON.stringify(session, null, 2));
  if (!session?.user?.id) {
    return <p>Please log in to view your todos.</p>;
  }
  const { todos } = await hygraphClient.request<GetTodosResponse>(getTodos, {
    userId: session?.user?.id,
  });
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
