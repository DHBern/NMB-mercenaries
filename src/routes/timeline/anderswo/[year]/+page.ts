import type { PageLoad } from './$types';
import mainContent from '$lib/data/main.json';
import anderswoAll from '$lib/data/anderswo.json';

export const load = (async ({ params }) => {
    const currentyear = Number(params.year);
    const anderswo = anderswoAll.filter((item) => item.Jahr === currentyear).map((item) => item.Titel);

    return {
        anderswo
    };
}) satisfies PageLoad;
