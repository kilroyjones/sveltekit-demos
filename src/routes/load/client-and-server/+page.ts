// /** @type {import('./$types').PageLoad} */ <-- Or this if using +page.js
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	console.log('This will run on the server and the client.');

	return {
		person: {
			name: 'Fred',
			email: 'fred@fred.com',
			rnd: Math.floor(Math.random() * 10000)
		}
	};
};
