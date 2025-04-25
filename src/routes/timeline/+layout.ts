import type { LayoutLoad } from './$types';

export const load = (async ({ params }) => {
	return {
		topic: params.topic,
		currentyear: Number(params.year)
	};
}) satisfies LayoutLoad;
