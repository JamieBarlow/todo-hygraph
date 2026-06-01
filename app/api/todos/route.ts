import { hygraphClient } from "@/lib/hygraph";
import { CreateTodo, PublishTodo } from "@/lib/queries";

export async function POST(req: Request) {
  const body = await req.json();

  const data = await hygraphClient.request(CreateTodo, {
    title: body.title,
    description: body.description,
    userId: body.userId,
    dueDate: body.dueDate,
  });
  await hygraphClient.request(PublishTodo, {
    id: data.createTodo.id,
  });
  return Response.json(data);
}
