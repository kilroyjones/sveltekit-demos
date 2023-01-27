import { PrismaClient } from '@prisma/client';
import type { User } from '@prisma/client';
import type { RequestHandler } from './$types';

const prisma = new PrismaClient();

export const POST: RequestHandler = async ({ request }) => {
	let user: User = await request.json();
	let result = await prisma.user.create({
		data: {
			username: user.username,
			email: user.email
		},
		select: {
			username: true
		}
	});

	if ('username' in result) {
		return new Response(JSON.stringify({ status: 'success' }));
	}
	return new Response(JSON.stringify({ status: 'error' }));
};
