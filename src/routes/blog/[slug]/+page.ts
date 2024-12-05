import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const ssr = true;

export const load: PageLoad = async ({ params }) => {
	console.log('Fetching data', params.slug);
	const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.slug}`);
	if (!response.ok) {
		error(404, 'Not found');
	}

	const data = await response.json();

	return {
		blogData: data
	};
};
