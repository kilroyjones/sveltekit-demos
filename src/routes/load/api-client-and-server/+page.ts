// /** @type {import('./$types').PageLoad} */ <-- Or this if using +page.js
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	console.log('This will run on the server and the client.');

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
