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

	let topic_label;
	switch (topic) {
		case 'Heilmann':
			topic_label = 'G.&nbsp;F.&nbsp;Heilmann';
			break;
		case 'Brunnen':
			topic_label = '';
			break;
		case 'Neuhaus':
			topic_label = 'F.&nbsp;E.&nbsp;Neuhaus';
			break;
	}

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
		topic_label,
		year,
		nextYear,
		prevYear,
		content,
		anderswo
	};
}) satisfies PageLoad;
