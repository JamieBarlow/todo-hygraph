import { hygraphClient } from "@/lib/hygraph";
import { UpdateTodo, PublishTodo } from "@/lib/queries";

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const body = await req.json();

  const data = await hygraphClient.request(UpdateTodo, {
    id: id,
    title: body.title,
    description: body.description,
    completed: body.completed,
  });

  await hygraphClient.request(PublishTodo, {
    id: id,
  });

  return Response.json(data);
}
