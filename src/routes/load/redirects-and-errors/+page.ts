// /** @type {import('./$types').PageLoad} */ <-- Or this if using +page.server.js
import type { PageLoad } from './$types';
import { error, redirect } from '@sveltejs/kit';

export const load: PageLoad = async () => {
	// throw error(401, 'Not logged it');
	// throw error(404, 'Page does not exist');
	// throw redirect(302, '/');
};
