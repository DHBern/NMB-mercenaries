import type { PageLoad } from './$types';
import mainContentAll from '$lib/data/main.json';
import { parse } from 'marked';

export const load = (async ({ params }) => {
	const currentyear = Number(params.year);
	const topic: 'Heilmann' | 'Biel' | 'Neuhaus' = params.topic as
		| 'Heilmann'
		| 'Biel'
		| 'Neuhaus';

	let topic_label;
	switch (topic) {
		case 'Heilmann':
			topic_label = 'G.&nbsp;F.&nbsp;Heilmann';
			break;
		case 'Biel':
			topic_label = '';
			break;
		case 'Neuhaus':
			topic_label = 'F.&nbsp;E.&nbsp;Neuhaus';
			break;
	}

	const contentIndex = mainContentAll[params.topic as 'Heilmann' | 'Biel' | 'Neuhaus'].findIndex(
		(item) => item.Jahr === currentyear
	);
	const mainContent = mainContentAll[topic][contentIndex];
	const nextYear = mainContentAll[topic][contentIndex + 1]?.Jahr;
	const prevYear = mainContentAll[topic][contentIndex - 1]?.Jahr;

	if (mainContent?.Text) {
		mainContent.Text = await parse(mainContent.Text);
	}

	return {
		topic,
		topic_label,
		nextYear,
		prevYear,
		mainContent,
	};
}) satisfies PageLoad;
