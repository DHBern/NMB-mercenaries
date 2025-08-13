import { redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { base } from '$app/paths';

export const load = (async () => {
	redirect(307, `${base}/intro/1`);
}) satisfies PageLoad;
