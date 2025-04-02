import type { PageLoad } from './$types';
import data from '$lib/data/main.json';
import anderswoAll from '$lib/data/anderswo.json';
import { parse } from 'marked';

export const load = (async ({ params }) => {
	const year = Number(params.year);
	const topic: 'Heilmann' | 'Brunnen' | 'Neuhaus' = params.topic as
		| 'Heilmann'
		| 'Brunnen'
		| 'Neuhaus';
	const contentIndex = data[params.topic as 'Heilmann' | 'Brunnen' | 'Neuhaus'].findIndex(
		(item) => item.Jahr === year
	);
	const content = data[topic][contentIndex];
	const nextYear = data[topic][contentIndex + 1]?.Jahr;
	const prevYear = data[topic][contentIndex - 1]?.Jahr;

	const anderswo = anderswoAll.filter((item) => item.Jahr === year).map((item) => item.Titel);

	if (content?.Text) {
		content.Text = await parse(content.Text);
	}

	return {
		topic,
		year,
		nextYear,
		prevYear,
		content,
		anderswo
	};
}) satisfies PageLoad;
