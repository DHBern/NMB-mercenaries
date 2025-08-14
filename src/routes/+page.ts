import { redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { base } from '$app/paths';
import { localizeHref } from '$lib/paraglide/runtime';

export const load = (async () => {
	redirect(307, localizeHref(`${base}/intro/1`));
}) satisfies PageLoad;
