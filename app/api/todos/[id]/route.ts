import { hygraphClient } from "@/lib/hygraph";
import { UpdateTodo, PublishTodo, DeleteTodo } from "@/lib/queries";

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

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;

  await hygraphClient.request(DeleteTodo, { id });
  return Response.json({ id });
}
