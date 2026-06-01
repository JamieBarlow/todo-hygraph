import bcrypt from "bcryptjs";
import { hygraphClient } from "@/lib/hygraph";
import { CreateUserAuth, PublishUserAuth } from "@/lib/queries";

export async function POST(req: Request) {
  const body = await req.json();
  const hashedPassword = await bcrypt.hash(body.password, 10);

  const { createUserAuth } = await hygraphClient.request<{
    createUserAuth: { id: string };
  }>(CreateUserAuth, {
    email: body.email,
    password: hashedPassword,
  });

  await hygraphClient.request(PublishUserAuth, { id: createUserAuth.id });

  return Response.json({ success: true });
}
