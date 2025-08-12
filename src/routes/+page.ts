import { redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async () => {
	redirect(307, '/intro/1');
}) satisfies PageLoad;
