import type { User } from "@prisma/client";
import type { RequestHandler } from "./$types";
import { prisma } from "$lib/db-client";

export const DELETE: RequestHandler = async ({ request }) => {
  let user: User = await request.json();
  let result = await prisma.user.delete({
    where: {
      id: user.id,
    },
    select: {
      id: true,
    },
  });

  if ("id" in result) {
    return new Response(JSON.stringify({ status: "success" }));
  }
  return new Response(JSON.stringify({ status: "error" }));
};
