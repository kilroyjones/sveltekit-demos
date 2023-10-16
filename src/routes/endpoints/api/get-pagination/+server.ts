import type { RequestHandler } from "./$types";
import { prisma } from "$lib/db-client";

export const GET: RequestHandler = async ({ url }) => {
  let page: number = parseInt(url.searchParams.get("page") || "0");
  const results = await prisma.$transaction([
    prisma.user.count(),
    prisma.user.findMany({
      skip: 10 * page,
      take: 10,
    }),
  ]);
  return new Response(
    JSON.stringify({
      pageCount: results[0],
      users: results[1],
    })
  );
};
