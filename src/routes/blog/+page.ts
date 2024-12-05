import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	console.log('Fetching blog list');
	const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
	if (!response.ok) {
		error(404, 'Not found');
	}

	const data = await response.json();

	return {
		blogList: data
	};
};
