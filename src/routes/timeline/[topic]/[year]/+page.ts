import type { PageLoad } from './$types';
import mainContentAll from '$lib/data/main.json';
import anderswoContentAll from '$lib/data/anderswo.json';
import { parse } from 'marked';

export const load = (async ({ params }) => {
	const currentyear = Number(params.year);
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

	const contentIndex = mainContentAll[params.topic as 'Heilmann' | 'Brunnen' | 'Neuhaus'].findIndex(
		(item) => item.Jahr === currentyear
	);
	const mainContent = mainContentAll[topic][contentIndex];
	const nextYear = mainContentAll[topic][contentIndex + 1]?.Jahr;
	const prevYear = mainContentAll[topic][contentIndex - 1]?.Jahr;

	// const anderswo = anderswoContentAll.filter((item) => item.Jahr === currentyear).map((item) => item.Titel);

	if (mainContent?.Text) {
		mainContent.Text = await parse(mainContent.Text);
	}

	return {
		topic,
		topic_label,
		nextYear,
		prevYear,
		mainContent,
		// anderswo
	};
}) satisfies PageLoad;
