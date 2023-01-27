// /** @type {import('./$types').PageServerLoad} */ <-- Or this if using +page.server.js
import type { PageServerLoad } from './$types';
import { PRIVATE_API_KEY } from '$env/static/private';

export const load: PageServerLoad = async ({ fetch }) => {
	console.log('This will run on the server and the client.');
	console.log('Use this if your API has a private key: ', PRIVATE_API_KEY);

	let response = await fetch('https://dogapi.dog/api/v2/breeds');
	if (!response.ok) {
		console.log('Error with fetch');
	}

	let breeds: any = await response.json();
	let breedNames: Array<string> = [];

	for (const breed of breeds.data) {
		breedNames.push(breed.attributes.name);
	}
	return { names: breedNames };
};
