import type { PageLoad } from './$types';

export const load = (async ({ params }) => {
	return {
		topic: params.topic,
		year: params.year
	};
}) satisfies PageLoad;
