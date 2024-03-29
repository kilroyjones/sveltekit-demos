import type { User } from "@prisma/client";
import type { RequestHandler } from "./$types";
import { prisma } from "$lib/db-client";

export const PUT: RequestHandler = async ({ request }) => {
  let user: User = await request.json();
  let result = await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      username: user.username,
      email: user.email,
    },
  });

  if ("username" in result) {
    return new Response(JSON.stringify({ status: "success" }));
  }
  return new Response(JSON.stringify({ status: "error" }));
};
