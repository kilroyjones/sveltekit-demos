import { PrismaClient } from '@prisma/client';
import type { RequestHandler } from './$types';

const prisma = new PrismaClient();

export const GET: RequestHandler = async ({ url }) => {
	const results = await prisma.user.findMany({});
	return new Response(JSON.stringify(results));
};
