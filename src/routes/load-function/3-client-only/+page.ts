// /** @type {import('./$types').PageLoad} */ <-- Or this if using +page.server.js
import type { PageLoad } from './$types';
export const ssr = false;

export const load: PageLoad = async () => {
	console.log('This will run on the server.');

	return {
		person: {
			name: 'Fred',
			email: 'fred@fred.com',
			rnd: Math.random()
		}
	};
};
