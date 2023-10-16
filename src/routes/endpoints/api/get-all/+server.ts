import type { RequestHandler } from "./$types";
import { prisma } from "$lib/db-client";

export const GET: RequestHandler = async ({ url }) => {
  const results = await prisma.user.findMany({});
  return new Response(JSON.stringify(results));
};
