// /** @type {import('./$types').PageServerLoad} */ <-- Or this if using +page.server.js
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	console.log('This will run on the server.');

	return {
		person: {
			name: 'Fred',
			email: 'fred@fred.com',
			rnd: Math.floor(Math.random() * 10000)
		}
	};
};
