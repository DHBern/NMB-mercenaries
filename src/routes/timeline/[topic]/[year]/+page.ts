import type { PageLoad } from './$types';
import data from '$lib/data/main.json';
import anderswoAll from '$lib/data/anderswo.json';
import { parse } from 'marked';

export const load = (async ({ params }) => {
	const content = data[params.topic as 'Heilmann' | 'Brunnen' | 'Neuhaus'].find(
		(item) => item.Jahr === Number(params.year)
	);

	const anderswo = anderswoAll
		.filter((item) => item.Jahr === Number(params.year))
		.map((item) => item.Titel);

	if (content?.Text) {
		content.Text = await parse(content.Text);
	}

	return {
		topic: params.topic,
		year: params.year,
		content,
		anderswo
	};
}) satisfies PageLoad;
